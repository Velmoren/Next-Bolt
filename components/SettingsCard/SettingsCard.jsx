import s from "./SettingsCard.module.scss";
import { sliceGosts } from "../../action";
import { useSelector, useDispatch } from "react-redux";

const useCard = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const addCartItems = (id) => {
		dispatch({
			type: "ADD_CART_ITEMS",
			payload: id,
		});
	};

	return { cartItems, addCartItems };
};

export default function SettingsCard(props) {
	const { goods } = props;
	const { cartItems, addCartItems } = useCard();

	return (
		<div className={s.box}>
			<h3>Размерные зарактеристики</h3>
			<div className="table_box">
				<div className="table_container">
					<table className="table">
						<thead className="table_thead">
							<tr>
								<th className="th">Стандарт</th>
								<th className="th">Форма</th>
								<th className="th">Размер резьбы</th>
								<th className="th">Длина</th>
								<th className="th">Материал</th>
								<th className="th">Покрытие</th>
								<th className="th">
									Упаковка <br />
									(шт)
								</th>
								<th className="th">Количество</th>
								<th className="th">
									Цена <br />
									(за 100шт)
									<br /> без НДС
								</th>
								<th className="th"></th>
							</tr>
						</thead>
						<tbody>
							{goods.map((item) => {
								const { id, name, form, dimA, dimB, mat, pack, price } = item;
								return (
									<tr key={id}>
										<th className="th_body th_standart">{sliceGosts(name)}</th>
										<th className="th_body">{form}</th>
										<th className="th_body">{dimA}</th>
										<th className="th_body">{dimB}</th>
										<th className="th_body">{mat}</th>
										<th className="th_body">5</th>
										<th className="th_body">{pack}</th>
										<th className="th_body">
											<input type="text" className="input_count" />
										</th>
										<th className="th_body">{price}</th>
										<th className="th_body">
											<button
												className="btn_cart"
												onClick={() => {
													addCartItems(id);
												}}
											>
												<img src="/image/cart_btn.png" alt="cart_btn" />
											</button>
										</th>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
			<style jsx>{`
				.table {
					border-collapse: collapse;
					width: 100%;
				}

				.table_thead {
					background-color: #ebebeb;
				}

				.th {
					padding: 15px;
					color: #608d98;
					text-transform: uppercase;
					font-size: 10px;
					border: 1px solid #dee2e6;
				}
				.th_body {
					background-color: rgba(0, 0, 0, 0.05);
					padding: 15px;
				}

				.th_standart {
					width: 100px;
				}

				.input_count {
					width: 80px;
					height: 35px;
					border-radius: 5px;
					box-shadow: none;
					border: 1px solid #b8c9d6;
					outline: none;
					color: #80a4ad;
					font-size: 16px;
					padding: 5px;
				}

				.btn_cart {
					background-color: #007bff;
					border: none;
					width: 50px;
					height: 35px;
					border-radius: 5px;
					cursor: pointer;
					outline: none;
				}

				.btn_cart:hover {
					background-color: #2089fa;
				}
			`}</style>
		</div>
	);
}

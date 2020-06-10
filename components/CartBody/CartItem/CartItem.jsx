import Link from "next/link";
import s from "./CartItem.module.scss";
import { useDispatch } from "react-redux";

const useCounter = () => {
	const dispatch = useDispatch();

	const onDecriment = (id) => {
		dispatch({
			type: "DECREMENT_CART_ITEM",
			payload: id,
		});
	};
	const onChangeCount = (event, id) => {
		dispatch({
			type: "CHANGE_COUNT_CART_ITEMS",
			payload: { value: event.target.value, id: id },
		});
	};
	return { onDecriment, onChangeCount };
};

export default function CartItem(props) {
	const { cartItem } = props;
	const {
		id,
		title,
		name,
		dimA,
		dimB,
		mat,
		image,
		price,
		total,
		count,
	} = cartItem;
	const { onDecriment, onChangeCount } = useCounter();

	return (
		<div className={s.body}>
			<div className={s.image}>
				<img src={image} alt="" />
			</div>
			<div className={s.description}>
				<div className={s.description_box}>
					<Link href="/">
						<a className={s.description_title}>{title}</a>
					</Link>

					{/* <ul className={s.description_list}>
						<li className={s.description_list_item}>
							<h3>DIN</h3>
							<span>933</span>
						</li>
						<li className={s.description_list_item}>
							<h3>ISO</h3>
							<span>4017</span>
						</li>
						<li className={s.description_list_item}>
							<h3>PN</h3>
							<span>82105</span>
						</li>
						<li className={s.description_list_item}>
							<h3>ГОСТ</h3>
							<span>7798-70, 7805-70</span>
						</li>
					</ul> */}
					<h3>{name}</h3>

					<div className={s.description_settings}>
						<div className={s.description_settings_item}>
							<h3>Размер</h3>
							<span>
								{dimA} x {dimB}
							</span>
						</div>
						<div className={s.description_settings_item}>
							<h3>Материал</h3>
							<span>{mat ? mat : "Отсутствует"}</span>
						</div>
						<div className={s.description_settings_item}>
							<h3>Покрытие</h3>
							<span>Белый цинк</span>
						</div>
					</div>
				</div>
			</div>
			<div className={s.price}>
				<span>{price} руб</span>
			</div>
			<div className={s.input}>
				<input
					type="text"
					value={count}
					onChange={(event) => {
						onChangeCount(event, id);
					}}
				/>
			</div>
			<div className={s.final_price}>{total} руб</div>
			<div className={s.decrement}>
				<img
					src="/image/close.png"
					alt="close"
					onClick={() => onDecriment(id)}
				/>
			</div>
		</div>
	);
}

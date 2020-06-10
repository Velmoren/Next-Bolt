import Link from "next/link";
import s from "./CartBody.module.scss";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

const useCart = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const omRemoveCart = () => {
		dispatch({
			type: "REMOVE_CART",
		});
	};

	return { cartItems, omRemoveCart };
};

function CartBody() {
	const { cartItems, omRemoveCart } = useCart();

	return (
		<div className={s.cart}>
			<div className={s.head}>
				<div className={s.image}>
					<span>фото</span>
				</div>
				<div className={s.description}>
					<span>описание</span>
				</div>
				<div className={s.price}>
					<span>цена с ндс</span>
				</div>
				<div className={s.remove_cart}>
					<a
						href="#"
						onClick={(event) => {
							event.preventDefault();
							omRemoveCart();
						}}
					>
						очистить всю корзину
					</a>
				</div>
			</div>
			{cartItems.map((cartItem) => {
				const { id } = cartItem;
				return <CartItem cartItem={cartItem} key={id} />;
			})}
		</div>
	);
}

export default CartBody;

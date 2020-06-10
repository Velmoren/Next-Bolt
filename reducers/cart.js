const initialState = {
	goods: [],
	cartItems: [],
	totalPrice: 0,
};

const giveMeTotalPrice = (arr) => {
	return arr.reduce((acc, item) => acc + item.total, 0);
};

const cart = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_GOODS":
			return {
				...state,
				goods: action.payload,
			};
		case "ADD_CART_ITEMS":
			const itemId = action.payload;
			const newItem = state.goods.find((item) => item.id === itemId);
			const goodInCart = state.cartItems.find((item) => item.id === itemId);
			// const newTotalPrice = state.totalPrice + newItem.price;

			if (goodInCart) {
				return {
					...state,
					cartItems: state.cartItems.map((item) => {
						if (item.id === goodInCart.id) {
							item.count += 1;
							item.total += goodInCart.price;
						}
						return item;
					}),
					// totalPrice: newTotalPrice,
					totalPrice: state.totalPrice + 1,
				};
			} else {
				newItem.total = newItem.price;
				newItem.count = 1;
				return {
					...state,
					cartItems: state.cartItems.concat(newItem),
					// totalPrice: newTotalPrice,
					totalPrice: state.totalPrice + 1,
				};
			}
		case "DECREMENT_CART_ITEM":
			const decId = action.payload;
			const newDecCartItems = state.cartItems.map((item) => {
				if (item.id === decId) {
					item.count--;
					item.total -= item.price;
				}
				return item;
			});
			const newDecCartItemsFilter = newDecCartItems.filter(
				(item) => item.count > 0
			);

			return {
				...state,
				cartItems: newDecCartItemsFilter,
				// totalPrice: giveMeTotalPrice(newDecCartItemsFilter),
				totalPrice: state.totalPrice - 1,
			};

		case "CHANGE_COUNT_CART_ITEMS":
			const changeId = action.payload.id;
			const changeCount = action.payload.value;

			const newChangeCartItems = state.cartItems.map((item) => {
				if (item.id === changeId) {
					item.count = changeCount;
					item.total = item.price * changeCount;
				}
				return item;
			});

			return {
				...state,
				cartItems: newChangeCartItems,
				totalPrice: giveMeTotalPrice(newChangeCartItems),
			};

		case "REMOVE_CART":
			return {
				...state,
				cartItems: [],
				totalPrice: 0,
			};

		default:
			return state;
	}
};

export default cart;

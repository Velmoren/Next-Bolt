const initialState = {
	clickedItem: null,
};

const goods = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_CLICKED_ITEM":
			return {
				clickedItem: action.payload,
			};

		default:
			return state;
	}
};

export default goods;

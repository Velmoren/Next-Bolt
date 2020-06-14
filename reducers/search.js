const initialState = {
	searchStr: "",
	isSubmit: false,
	goods: [],
};

const search = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_SEARCH_STRING":
			return {
				...state,
				searchStr: action.payload,
			};
		case "ADD_SEARCH_GOODS":
			return {
				...state,
				goods: action.payload,
			};

		default:
			return state;
	}
};

export default search;

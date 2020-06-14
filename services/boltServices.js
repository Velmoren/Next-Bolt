import axios from "axios";

export default class BoltServices {
	_apiBase = "https://web1c.standart.by/std_UT/hs/api";

	getResource = async (url) => {
		try {
			const res = axios({
				url: `${this._apiBase}${url}`,
				auth: {
					username: "hs",
					password: "1qasw23ed!",
				},
			});
			return await res;
		} catch (e) {
			console.log(e);
		}
	};

	getAllType = async () => {
		const res = await this.getResource(`/StandartsByType/1`);
		return res.data.ListOfTypes;
	};

	getAllGoods = async (id) => {
		const res = await this.getResource(`/StandartsByType/${id}`);
		return res.data.ListOfTypes[0];
	};

	// выбор вариантов/размеров одного товара
	getItems = async (id, currentPage, countPage) => {
		const res = await this.getResource(
			`/Standart/${id}?offset=${currentPage}&count=${countPage}`
		);
		return res.data;
	};

	getItemsName = async (id) => {
		const res = await this.getResource(`/Standart/${id}`);

		return res;
	};

	// поиск

	getSearchItems = async () => {
		let arr = [];
		const res1 = await this.getResource("/Search/96");

		await res1.data.ListOfTypes.forEach((item) => {
			arr.push(...item.StdList);
		});

		return arr;
	};

	_transformScrews = (screw) => {
		return {
			...screw,
			img: "/image/no_img.jpg",
		};
	};
}

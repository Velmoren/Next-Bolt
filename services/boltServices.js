import axios from "axios";

export default class BoltServices {
	_apiBase = "http://web1c.standart.by/std_UT/hs/api";

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
		return res.data.ListOfTypes[0].StdList;
	};

	getAllBolts = async () => {
		const res = await this.getResource(
			`/StandartsByType/bd35f5e8-394a-11e9-9fa8-00155d0e072e`
		);

		return res.data.ListOfTypes[0].StdList.map(this._transformScrews);
	};

	getAllScrews = async () => {
		const res = await this.getResource(
			`/StandartsByType/c90c4463-394a-11e9-9fa8-00155d0e072e`
		);
		return res.data.ListOfTypes[0].StdList.map(this._transformScrews);
	};

	getAllWares = async () => {
		const res = await this.getResource(
			`/StandartsByType/dbe38c4a-394a-11e9-9fa8-00155d0e072e`
		);
		return res.data.ListOfTypes[0].StdList.map(this._transformScrews);
	};

	getAllNuts = async () => {
		const res = await this.getResource(
			`/StandartsByType/2dd5ff8b-394b-11e9-9fa8-00155d0e072e`
		);
		return res.data.ListOfTypes[0].StdList.map(this._transformScrews);
	};

	getAllAnchors = async () => {
		const res = await this.getResource(
			`/StandartsByType/ac55ae62-394a-11e9-9fa8-00155d0e072e`
		);
		return res.data.ListOfTypes[0].StdList.map(this._transformScrews);
	};

	getAllElements = async () => {
		const res = await this.getResource(
			`/StandartsByType/145ad2fc-394b-11e9-9fa8-00155d0e072e`
		);
		return res.data.ListOfTypes[0].StdList.map(this._transformScrews);
	};

	getAllWashers = async () => {
		const res = await this.getResource(
			`/StandartsByType/912fc794-394a-11e9-9fa8-00155d0e072e`
		);
		return res.data.ListOfTypes[0].StdList.map(this._transformScrews);
	};

	getAllOtherBolts = async () => {
		const res = await this.getResource(
			`/StandartsByType/06d29a2a-394b-11e9-9fa8-00155d0e072e`
		);
		return res.data.ListOfTypes[0].StdList.map(this._transformScrews);
	};

	getAllOtherWares = async () => {
		const res = await this.getResource(
			`/StandartsByType/66784aac-577c-11e7-bc71-c4e98402e535`
		);
		return res.data.ListOfTypes[0].StdList.map(this._transformScrews);
	};

	// выбор вариантов/размеров одного товара
	getItems = async (id, currentPage, countPage) => {
		const res = await this.getResource(
			`/Standart/${id}?offset=${currentPage}&count=${countPage}`
		);
		return res.data;
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

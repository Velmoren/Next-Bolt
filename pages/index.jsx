import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import SearchForm from "../components/SearchForm";
import CatalogAndPrice from "../components/CatalogAndPrice";
import SliderBlock from "../components/SliderBlock";
import Description from "../components/Description";
import HeroGoods from "../components/HeroGoods";
import { useStore, useSelector } from "react-redux";
import BoltServices from "../services/boltServices";

const boltServices = new BoltServices();

Home.getInitialProps = async () => {
	const types = await boltServices.getAllType().then((res) => {
		return res;
	});

	return {
		types,
	};
};

function Home(props) {
	const cart = useSelector((state) => state.cart);
	const { types } = props;
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="hero">
				<div className="p-40">
					<div className="container">
						<div className="box">
							<div className="left">
								<SearchForm />
								<CatalogAndPrice />
								<SliderBlock />
							</div>
							<div className="center">
								<HeroGoods types={types} />
							</div>
							<div className="right">
								<Description />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Home;

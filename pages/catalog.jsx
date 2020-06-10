import Head from "next/head";
import React from "react";
import BannerTop from "../components/BannerTop";
import CatalogCards from "../components/CatalogCards";
import CATALOG_ITEMS from "../resources/categories";
import Layout, { siteTitle } from "../components/layout";
// import BoltServices from "../services/boltServices";

// const boltServices = new BoltServices();

// Catalog.getInitialProps = async () => {
// 	const types = await boltServices.getAllType().then((res) => {
// 		return res;
// 	});

// 	return {
// 		types,
// 	};
// };

function Catalog(props) {
	const path_spans = "Каталог продукции";
	const path_link = [{ label: "Главная", path: "/" }];
	const bannerTitile = "Каталог продукции";
	// const { types } = props;

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="hero">
				<div className="banner_section p-30">
					<div className="container">
						<BannerTop
							path_link={path_link}
							path_spans={path_spans}
							bannerTitile={bannerTitile}
						/>
					</div>
				</div>
				<div className="catalog p-30">
					<div className="container">
						<div className="box">{/* <CatalogCards types={types} /> */}</div>
					</div>
				</div>

				<style jsx>{`
					section {
						background-color: white;
					}
				`}</style>
			</section>
		</Layout>
	);
}
export default Catalog;

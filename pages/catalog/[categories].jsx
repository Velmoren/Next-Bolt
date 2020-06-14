import Head from "next/head";
import React from "react";
import BannerTop from "../../components/BannerTop";
import MenuCategories from "../../components/MenuCategories";
import Contacts from "../../components/Contacts";
import FilterTop from "../../components/FilterTop";
import GoodsList from "../../components/GoodsList";
import BoltServices from "../../services/boltServices";
import Layout, { siteTitle } from "../../components/layout";

const boltServices = new BoltServices();

Categories.getInitialProps = async ({ query }) => {
	const pageName = await query.categories;
	const category = await boltServices.getAllGoods(query.categories);
	const goods = await category.StdList;
	const typeName = await category.Type;

	return {
		typeName,
		goods,
		pageName,
		query,
	};
};

function Categories(props) {
	const { goods, pageName, typeName, query } = props;

	const bannerTitile = typeName;
	const path_spans = bannerTitile;
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Каталог продукции", path: "/catalog" },
	];

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="anchors">
				<div className="banner_section p-30">
					<div className="container">
						<BannerTop
							path_link={path_link}
							path_spans={path_spans}
							bannerTitile={bannerTitile}
						/>
					</div>
				</div>

				<div className="about_section p-30">
					<div className="container">
						<div className="box">
							<div className="left">
								<MenuCategories boxMargin={`0 0 40px 0`} />
								<Contacts
									colorText={"#608d98"}
									paddingBox={"0"}
									backgroundBox={"inherit"}
								/>
							</div>
							<div className="centerAndDolie">
								<FilterTop />
								<GoodsList goods={goods} namePage={pageName} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Categories;

import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import BannerTop from "../components/BannerTop";
import Contacts from "../components/Contacts";
import MenuCategories from "../components/MenuCategories";
import FilterTop from "../components/FilterTop";

function Search(props) {
	const path_spans = "О компании";
	const path_link = [{ label: "Главная", path: "/" }];
	const bannerTitile = "О компании";

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<div className="banner_section p-30">
					<div className="container">
						<BannerTop
							path_link={path_link}
							path_spans={path_spans}
							bannerTitile={bannerTitile}
						/>
					</div>
				</div>
				<div className="about_section p-30" onClick={props.incAc}>
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
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Search;

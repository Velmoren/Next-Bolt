import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import BannerTop from "../components/BannerTop";
import AboutCompany from "../components/AboutCompany";
import Contacts from "../components/Contacts";
import MenuCategories from "../components/MenuCategories";
import BoltServices from "../services/boltServices";

const boltServices = new BoltServices();

About.getInitialProps = async () => {
	const types = await boltServices.getAllType().then((res) => {
		return res;
	});

	return {
		types,
	};
};

function About(props) {
	const path_spans = "О компании";
	const path_link = [{ label: "Главная", path: "/" }];
	const bannerTitile = "О компании";
	const { types } = props;

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
								<MenuCategories boxMargin={`0 0 40px 0`} types={types} />
								<Contacts
									colorText={"#608d98"}
									paddingBox={"0"}
									backgroundBox={"inherit"}
								/>
							</div>
							<div className="centerAndDolie">
								<AboutCompany />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default About;

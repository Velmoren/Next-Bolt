import Head from "next/head";
import React from "react";
import BannerTop from "../components/BannerTop";
import Contacts from "../components/Contacts";
import Layout, { siteTitle } from "../components/layout";

export default function ContactsPage() {
	const path_spans = "Контакты";
	const path_link = [{ label: "Главная", path: "/" }];
	const bannerTitile = "Контакты";

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="contacts">
				<div className="banner_section p-30">
					<div className="container">
						<BannerTop
							path_link={path_link}
							path_spans={path_spans}
							bannerTitile={bannerTitile}
						/>
					</div>
				</div>
				<div className="about p-30">
					<div className="container">
						<div className="box">
							<div className="left">
								<Contacts
									colorText={"#608d98"}
									paddingBox={"0"}
									backgroundBox={"inherit"}
								/>
							</div>

							<div className="centerAndDolie">
								<img src="/image/map.jpg" alt="map" />
							</div>
						</div>
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

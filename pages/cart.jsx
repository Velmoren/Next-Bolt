import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import BannerTop from "../components/BannerTop";
import CartBody from "../components/CartBody";

export default function Cart() {
	const path_spans = "Корзина";
	const path_link = [{ label: "Главная", path: "/" }];
	const bannerTitile = "Корзина";

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

				<div className="cart p-30">
					<div className="container">
						<div className="box">
							<CartBody />
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

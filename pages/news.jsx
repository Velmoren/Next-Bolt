import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import BannerTop from "../components/BannerTop";
import NewsItems from "../components/NewsItems";
import PagePagination from "../components/PagePagination";
import NEWS_DATA from "../resources/news";
// import WrapperSections from "../components/WrapperSections";

export default function News() {
	const path_spans = "Новости";
	const path_link = [{ label: "Главная", path: "/" }];
	const bannerTitile = "Новости";

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="news">
				<div className="banner_section p-30">
					<div className="container">
						<BannerTop
							path_link={path_link}
							path_spans={path_spans}
							bannerTitile={bannerTitile}
							buttons={true}
						/>
					</div>
				</div>
				<div className="container">
					<div className="news-cards p-30">
						<NewsItems news={NEWS_DATA} />
					</div>
					<PagePagination />
				</div>

				<style jsx>{`
					section {
						background-color: white;
					}

					.news-cards {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
					}
				`}</style>
			</section>
		</Layout>
	);
}

import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import BannerTop from "../../components/BannerTop";
import NewsInner from "../../components/NewsInner";
import VerticalNews from "../../components/VerticalNews";
import { getNewsWhithId, getNews } from "../../action";
import Layout, { siteTitle } from "../../components/layout";

NewsPage.getInitialProps = async ({ query }) => {
	const newsItem = await getNewsWhithId(query.id);
	const news = await getNews();
	return { newsItem, news };
};

export default function NewsPage(props) {
	const { newsItem, news } = props;

	const path_spans = newsItem ? newsItem.title : "";
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Новости", path: "/news" },
	];
	const bannerTitile = newsItem ? newsItem.title : "";
	const date = newsItem ? newsItem.date : null;

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
						>
							{<h2 className="banner_data">{date}</h2>}
						</BannerTop>
					</div>
				</div>

				<div className="news-item p-30">
					<div className="container">
						<div className="box">
							<div className="centerAndDolie">
								<NewsInner newsItem={newsItem ? newsItem : []} />
							</div>
							<div className="right">
								<VerticalNews news={news ? news : []} />
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

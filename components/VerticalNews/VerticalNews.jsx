import Link from "next/link";
import s from "./VerticalNews.module.scss";
import NewsItemText from "../NewsItems/NewsItemText";

export default function VerticalNews(props) {
	const latestNews = props.news.slice(0, 3);

	return (
		<div className={s.box}>
			<h2 className={s.title}>Последние новости</h2>
			{latestNews.map((item) => {
				return <NewsItemText item={item} key={item.id} />;
			})}
			<Link href="/news">
				<a className={s.button}>все новости</a>
			</Link>
		</div>
	);
}

import Link from "next/link";
import s from "./NewsItemText.module.scss";

export default function NewsItemText({ item }) {
	const { id, date, title, subtitle } = item;
	return (
		<div className={s.box}>
			<span className={s.date}>{date}</span>
			<Link href="/news/[id]" as={`/news/${id}`}>
				<a className={s.title}>{title}</a>
			</Link>
			<p className={s.subtitle}>{subtitle}</p>
		</div>
	);
}

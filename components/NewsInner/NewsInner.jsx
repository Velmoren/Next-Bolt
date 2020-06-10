import Link from "next/link";
import s from "./NewsInner.module.scss";
import { set } from "date-fns";

export default function NewsInner(props) {
	const { newsItem } = props;

	return (
		<div className={s.box}>
			<img className={s.image} src={newsItem.image} alt={newsItem.subtitle} />
			<h2 className={s.subtitle}>{newsItem.subtitle}</h2>
			<p className={s.long_subtitle}>{newsItem.long_subtitle}</p>
		</div>
	);
}

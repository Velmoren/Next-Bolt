import Link from "next/link";
import styles from "./HeroGoodsItem.module.scss";

export default function HeroGoodsItem(props) {
	const { box } = styles;
	const { type, index } = props;
	const { UID, Type } = type;
	return (
		<Link href={`/catalog/[categories]`} as={`/catalog/${UID}`}>
			<div className={box}>
				<span>{Type}</span>
				<img src={`/image/ico/ico_${index + 1}.svg`} alt={Type} />
			</div>
		</Link>
	);
}

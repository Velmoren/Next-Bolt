import Link from "next/link";
import styles from "./CatalogCard.module.scss";

export default function CatalogCard(props) {
	const { box, img, title } = styles;
	const { type, index } = props;
	const { UID, Type } = type;

	return (
		<div className={box}>
			<Link href={`/catalog/[categories]`} as={`/catalog/${UID}`}>
				<a>
					<span className={`${img} image`}></span>
					<span className={title}>{Type}</span>
				</a>
			</Link>
			<style jsx>{`
				.image {
					background-image: url("/image/ico/ico_${index + 1}.svg");
					background-size: 60%;
					background-repeat: no-repeat;
					background-position: center;
				}
			`}</style>
		</div>
	);
}

import Link from "next/link";
import styles from "./MenuCategoriesItem.module.scss";

export default function MenuCategoriesItem(props) {
	const { item, image } = styles;
	const { type, index } = props;
	const { UID, Type } = type;

	return (
		<li className={item}>
			<Link href={`/catalog/[categories]`} as={`/catalog/${UID}`}>
				<a>
					<span className={`image ${image}`}></span>
					<span className="text">{Type}</span>
				</a>
			</Link>

			<style jsx>{`
				.image {
					background: url("/image/ico/ico_${index + 1}.svg") no-repeat center;
					width: 35px;
					min-width: 35px;
					height: 35px;
				}
			`}</style>
		</li>
	);
}

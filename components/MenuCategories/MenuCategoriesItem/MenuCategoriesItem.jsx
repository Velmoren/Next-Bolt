import Link from "next/link";
import styles from "./MenuCategoriesItem.module.scss";

export default function MenuCategoriesItem(props) {
	const { item, image } = styles;
	const { itemImage, itemTextext, itemPath, itemBorder } = props;

	return (
		<li className={item}>
			<Link href={itemPath}>
				<a>
					<span className={`image ${image}`}></span>
					<span className="text">{itemTextext}</span>
				</a>
			</Link>

			<style jsx>{`
				.image {
					background: url(${itemImage}) no-repeat center;
					width: 35px;
					min-width: 35px;
					height: 35px;
				}
			`}</style>
		</li>
	);
}

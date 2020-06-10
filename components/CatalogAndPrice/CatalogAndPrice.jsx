import Link from "next/link";
import styles from "./CatalogAndPrice.module.scss";

export default function CatalogAndPrice() {
	const { buttons, catalog, price } = styles;

	return (
		<div className={buttons}>
			<div className={catalog}>
				<a href="#" className="linkText">
					<span>каталог продукции</span>
				</a>
			</div>
			<div className={price}>
				<a href="#" className="linkText">
					<span>прайс-лист</span>
				</a>
			</div>

			<style jsx>{`
				.linkText {
					color: white;
				}
			`}</style>
		</div>
	);
}

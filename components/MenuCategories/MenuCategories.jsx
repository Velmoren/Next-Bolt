import styles from "./MenuCategories.module.scss";
import MenuCategoriesItem from "./MenuCategoriesItem";
import CATALOG_ITEMS from "../../resources/categories";

export default function MenuCategories(props) {
	const { list } = styles;
	const { boxMargin } = props;

	return (
		<div className={`itemBox`}>
			<ul className={list}>
				{CATALOG_ITEMS.map((item) => {
					const { id, url, label, path, border } = item;

					return (
						<MenuCategoriesItem
							key={id}
							itemImage={url}
							itemTextext={label}
							itemPath={path}
							itemBorder={border}
						/>
					);
				})}
			</ul>
			<style jsx>{`
				.itemBox {
					color: red;
					margin: ${boxMargin};
				}
			`}</style>
		</div>
	);
}

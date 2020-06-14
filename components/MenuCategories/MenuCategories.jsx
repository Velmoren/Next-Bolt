import styles from "./MenuCategories.module.scss";
import MenuCategoriesItem from "./MenuCategoriesItem";

export default function MenuCategories(props) {
	const { list } = styles;
	const { boxMargin, types } = props;

	return (
		<div className={`itemBox`}>
			<ul className={list}>
				{types
					? types.map((type, index) => {
							const { UID } = type;

							return <MenuCategoriesItem key={UID} type={type} index={index} />;
					  })
					: null}
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

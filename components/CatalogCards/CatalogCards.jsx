import CatalogCard from "./CatalogCard";
import styles from "./CatalogCards.module.scss";

export default function CatalogCards(props) {
	const { box } = styles;
	const { types } = props;

	return (
		<div className={box}>
			{types.map((type, index) => {
				const { UID } = type;
				return <CatalogCard key={UID} type={type} index={index} />;
			})}
		</div>
	);
}

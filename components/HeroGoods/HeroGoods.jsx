import styles from "./HeroGoods.module.scss";
import HeroGoodsItem from "./HeroGoodsItem";

const { box } = styles;

export default function HeroGoods(props) {
	const { types } = props;
	return (
		<div className={box}>
			{types.map((type, index) => {
				const { UID } = type;
				return <HeroGoodsItem key={UID} type={type} index={index} />;
			})}
		</div>
	);
}

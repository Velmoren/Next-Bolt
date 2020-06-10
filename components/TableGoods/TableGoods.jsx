import s from "./TableGoods.module.scss";

export default function TableGoods(props) {
	const { goods } = props;
	return (
		<div className={s.box}>
			{goods.map((item) => {
				return <div key={item.id}>{item.standartName}</div>;
			})}
		</div>
	);
}

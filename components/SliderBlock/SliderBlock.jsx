import styles from "./SliderBlock.module.scss";

export default function SliderBlock() {
	const { slider_block } = styles;

	return (
		<div className={slider_block}>
			<div>
				<h3>Только у нас</h3>
				<p>Вы можете приобрести метизы оптом в любых количествах!</p>
			</div>
		</div>
	);
}

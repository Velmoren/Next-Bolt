import styles from "./SearchForm.module.scss";

export default function SearchForm() {
	const { form, title, subtitle, input, button } = styles;

	return (
		<div className={form}>
			<span className={title}>выберите стандарт</span>
			<label className={subtitle} htmlFor="quicksearchform-query">
				DIN / ISO / ГОСТ <span className="red_text">*</span>
			</label>
			<input type="text" className={input} id="quicksearchform-query" />
			<button className={button}>найти в каталоге</button>
		</div>
	);
}

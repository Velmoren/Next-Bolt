import s from "./FilterTop.module.scss";

export default function FilterTop() {
	const onSubmitForm = (event) => {
		event.preventDefault();
	};

	return (
		<form className={s.form} action="" onSubmit={onSubmitForm}>
			<input className={s.input} type="text" placeholder={`DIN/ISO/PN/ГОСТ`} />
			<button className={s.button} type="submit"></button>
		</form>
	);
}

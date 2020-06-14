import s from "./SearchTop.module.scss";

export default function FilterTop(props) {
	const { searchStr, updateSearchStr } = props;

	const onChangeValue = (event) => {
		let value = event.target.value;
		updateSearchStr(value);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
	};

	return (
		<form className={s.form} action="" onSubmit={onSubmitForm}>
			<input
				className={s.input}
				type="text"
				placeholder={`DIN/ISO/PN/ГОСТ`}
				value={searchStr}
				onChange={onChangeValue}
			/>
			<button className={s.button} type="submit"></button>
		</form>
	);
}

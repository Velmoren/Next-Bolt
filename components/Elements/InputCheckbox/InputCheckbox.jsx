import styles from "./InputCheckbox.module.scss";

export default function InputCheckbox(props) {
	const { form_buttons_check } = styles;
	const { id, label, name } = props;
	return (
		<div className={form_buttons_check}>
			<input type="checkbox" name={name} id={id} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
}

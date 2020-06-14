import Link from "next/link";
import InputCheckbox from "../Elements/InputCheckbox";
import styles from "./LogInForm.module.scss";

export default function LogInForm() {
	const {
		box,
		form,
		form_control,
		form_control_wrap,
		form_title,
		form_buttons,
		form_buttons_check,
		form_buttons_send,
	} = styles;

	return (
		<div className={box}>
			<form className={form}>
				<h2 className={form_title}>Вход для партнеров</h2>
				<div className={form_control}>
					<div className={form_control_wrap}>
						<label htmlFor="LogInFormEmail">Логин или E-mail</label>
						<Link href="">
							<a>Зарегистрироваться</a>
						</Link>
					</div>

					<input type="email" id="LogInFormEmail" />
				</div>

				<div className={form_control}>
					<div className={form_control_wrap}>
						<label htmlFor="LogInFormPassword">Пароль</label>
						<div className="forgotYourPass">
							<Link href="">
								<a>Забыли пароль?</a>
							</Link>
						</div>
					</div>
					<input type="password" id="LogInFormPassword" />
				</div>

				<div className={form_buttons}>
					<div className={form_buttons_check}>
						<InputCheckbox
							id={`LogInFormCheck`}
							label={`Запомнить меня`}
							name={`ok`}
						/>
					</div>
					<button className={form_buttons_send}>вход</button>
				</div>
			</form>
		</div>
	);
}

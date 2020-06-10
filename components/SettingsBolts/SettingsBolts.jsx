import styles from "./SettingsBolts.module.scss";
import InputCheckbox from "../Elements/InputCheckbox";

export default function SettingsBolts() {
	const { box, list, title, inputs_length, after_set } = styles;

	return (
		<div className={box}>
			<div className="item">
				<h3 className={title}>Резьба</h3>
				<ul className={list}>
					<li>
						<InputCheckbox id={`param1`} label={`M4`} name={`1`} />
					</li>
					<li>
						<InputCheckbox id={`param2`} label={`M5`} name={`2`} />
					</li>
					<li>
						<InputCheckbox id={`param3`} label={`M6`} name={`3`} />
					</li>
					<li>
						<InputCheckbox id={`param4`} label={`M7`} name={`4`} />
					</li>
					<li>
						<InputCheckbox id={`param5`} label={`M8`} name={`5`} />
					</li>
					<li>
						<a href="#" className={after_set}>
							Показать все 19
						</a>
					</li>
				</ul>
			</div>

			<div className="item">
				<h3 className={title}>Материал</h3>
				<ul className={list}>
					<li>
						<InputCheckbox id={`param21`} label={`Сталь`} name={`21`} />
					</li>
					<li>
						<InputCheckbox id={`param22`} label={`Медь`} name={`22`} />
					</li>
					<li>
						<InputCheckbox id={`param23`} label={`Бронза`} name={`23`} />
					</li>
					<li>
						<InputCheckbox id={`param24`} label={`Латунь`} name={`24`} />
					</li>
					<li>
						<InputCheckbox id={`param25`} label={`Алюминий`} name={`25`} />
					</li>
				</ul>
			</div>

			<div className="item">
				<h3 className={title}>Длина болта L (мм)</h3>
				<div className={inputs_length}>
					<input type="text" id="length1" placeholder={`От`} />
					<input type="text" id="length2" placeholder={`До`} />
					<button>ok</button>
				</div>
			</div>
		</div>
	);
}

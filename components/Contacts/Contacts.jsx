import Link from "next/link";
import styles from "./Contacts.module.scss";
import contacts from "../../resources/contacts";

export default function Contacts(props) {
	const { item, item_left, item_right, item_text } = styles;
	const { colorText, paddingBox, backgroundBox } = props;
	const { city, index, adress, office, number1, number2, email } = contacts;

	return (
		<div className="contacts">
			<div className={item}>
				<div className={item_left}>
					<img src="/image/phone.png" alt="phone" className="item_image" />
					<span className={item_text}>телефоны</span>
				</div>
				<div className={item_right}>
					<a href="#" className="jsxText">
						{number1}
					</a>
					<a href="#" className="jsxText">
						{number2}
					</a>
				</div>
			</div>
			<div className={item}>
				<div className={item_left}>
					<img src="/image/map.png" alt="map" className="item_image" />
					<span className={item_text}>адрес</span>
				</div>
				<div className={item_right}>
					<span className="jsxText">
						{index}, {city}
					</span>
					<span className="jsxText">
						{adress}, {office}
					</span>
				</div>
			</div>
			<div className={item}>
				<div className={item_left}>
					<img src="/image/time.png" alt="time" className="item_image" />
					<span className={item_text}>работаем</span>
				</div>
				<div className={item_right}>
					<span className="jsxText">ПН-ПТ 09:00-17:00</span>
				</div>
			</div>
			<div className={item}>
				<div className={item_left}>
					<img src="/image/mail.png" alt="mail" className="item_image" />
					<span className={item_text}>e-mail</span>
				</div>
				<div className={item_right}>
					<a href="#" className="jsxText">
						{email}
					</a>
				</div>
			</div>

			<style jsx>{`
				.jsxText {
					color: ${colorText};
					font-weight: bold;
				}

				.contacts {
					padding: ${paddingBox};
					background: ${backgroundBox};
				}
			`}</style>
		</div>
	);
}

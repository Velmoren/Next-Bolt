import Link from "next/link";
import styles from "./Description.module.scss";
import Contacts from "../Contacts";

export default function Description() {
	const { title, subtitle } = styles;

	return (
		<div>
			<h3 className={title}>Кто мы?</h3>
			<p className={subtitle}>
				Компания Стандарт Контакт реализует метизную продукцию в Минске1. У нас
				представлен широкий ассортимент крепежных изделий, мы предлагаем купить
				метизы оптом в любых объемах
			</p>
			<Contacts
				colorText={"white"}
				paddingBox={"0"}
				backgroundBox={"inherit"}
			/>
		</div>
	);
}

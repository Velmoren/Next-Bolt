import Link from "next/link";
import contacts from "../../resources/contacts";

export default function Footer() {
	const { city, index, adress, office, number1, number2, email } = contacts;

	return (
		<footer className="footer">
			<div className="container">
				<div className="box">
					<div className="top">
						<div className="links">
							<div className="links_item">
								<Link href="/catalog">
									<a>
										<strong>Наша продукция</strong>
									</a>
								</Link>
								<Link href="/news">
									<a>
										<strong>Новости</strong>
									</a>
								</Link>
								<Link href="/about">
									<a>
										<strong>О компании</strong>
									</a>
								</Link>
								<Link href="/contacts">
									<a>
										<strong>Контакты</strong>
									</a>
								</Link>
							</div>
							<div className="links_item">
								<strong>АДРЕС</strong>
								<span>
									{index} {city}
								</span>
								<span>
									{adress}, {office}
								</span>
								<strong>ВРЕМЯ РАБОТЫ</strong>
								<span>пн.-пт. 09:00-17:00</span>
							</div>
							<div className="links_item">
								<strong>ТЕЛЕФОНЫ В МИНСКЕ</strong>
								<a href="#">{number1}</a>
								<a href="#">{number2}</a>
								<strong>E-MAIL</strong>
								<a href="#">{email}</a>
							</div>
							<div className="links_item">
								<div className="catalogs">
									<a href="#" className="catalog">
										<span>каталог продукции</span>
									</a>
									<a href="#" className="price">
										<span>прайс-лист</span>
									</a>
								</div>
							</div>
							<div className="links_item">
								<div className="languages">
									<Link href="/">
										<a>ENG</a>
									</Link>
									<Link href="/">
										<a>РУС</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="down">
						<span>© 2017 Все права защищены. ООО "СтандартКонтакт"</span>
					</div>
				</div>
			</div>

			<style jsx>{`
				.footer {
					padding: 25px 0;
					background-color: #404c54;
					color: #9eb9ca;
				}

				.footer a {
					color: #9eb9ca;
					text-decoration: none;
				}

				.footer a:hover {
					opacity: 0.7;
				}

				.box {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				.top {
					display: flex;
					justify-content: space-between;
					margin-bottom: 10px;
				}

				.links {
					display: flex;
					justify-content: space-between;
					width: 100%;
					line-height: 20px;
				}

				.links_item {
					display: flex;
					flex-direction: column;
				}

				.catalogs > a {
					display: flex;
					border: 1px solid #9eb9ca;
					border-radius: 5px;
					background-repeat: no-repeat;
					background-position: 10px center;
					margin-bottom: 20px;
				}

				.catalogs > a:hover {
					opacity: 0.7;
				}

				.catalog {
					padding: 10px 10px 10px 40px;
					background-image: url("/image/catalog_pdf_btn.png");
				}

				.price {
					max-width: 125px;
					padding: 10px 10px 10px 40px;
					background-image: url("/image/price_pdf_btn.png");
				}

				.languages > a {
					display: flex;
					border: 1px solid #9eb9ca;
					border-radius: 5px;
					background-repeat: no-repeat;
					background-position: 10px center;
					margin-bottom: 20px;
					padding: 10px;
				}
				.languages > a:hover {
					opacity: 0.7;
				}
			`}</style>
		</footer>
	);
}

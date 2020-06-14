import Link from "../Link";
import { useSelector } from "react-redux";

const useTotalPrice = () => {
	const count = useSelector((state) => state.cart.totalPrice);
	return { count };
};

export default function Header() {
	const { count } = useTotalPrice();

	return (
		<header className="header">
			<div className="container">
				<div className="box">
					<div className="logo">
						<Link href="/">
							<a className="logo_back"></a>
						</Link>
					</div>
					<nav>
						<ul>
							<li>
								<Link activeClassName="active" href="/catalog">
									<a className="link">наша продукция</a>
								</Link>
							</li>
							<li>
								<Link activeClassName="active" href="/news">
									<a className="link">новости</a>
								</Link>
							</li>
							<li>
								<Link activeClassName="active" href="/about">
									<a className="link">о компании</a>
								</Link>
							</li>
							<li>
								<Link activeClassName="active" href="/contacts">
									<a className="link">контакты</a>
								</Link>
							</li>
						</ul>
					</nav>
					<div className="logics">
						<div className="search">
							<Link href="/search">
								<a className="link"></a>
							</Link>
						</div>
						<div className="cart">
							<Link activeClassName="active" href="/cart">
								<a className="link">{count}</a>
							</Link>
						</div>
						<div className="login">
							<Link activeClassName="active" href="/login">
								<a className="link">вход для партнеров</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.active {
					color: #608d98;
					border-color: #608d98;
					background-color: #ebebeb;
				}
				.header {
					background: white;
					box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
					position: relative;
				}

				.logo_back {
					background-image: url("/image/logo.png");
					background-repeat: no-repeat;
					background-position: center;
					width: 100%;
					height: 100%;
				}

				.box {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.box > nav {
					display: flex;
					align-items: center;
				}

				.box > nav > ul {
					display: flex;
				}

				.box > nav > ul > li {
					list-style: none;
				}

				.box > nav > ul > li > a {
					padding: 32px 15px 34px;
				}
				.log {
					display: flex;
				}

				.logo {
					display: flex;
					width: 20%;
				}

				.logo > a {
					padding: 30px 0;
				}

				.logics {
					display: flex;
				}

				.search {
					border-left: 1px solid #b8c9d6;
				}

				.search > a {
					width: 100%;
					height: 100%;
					background-image: url("/image/search_btn.png");
					background-repeat: no-repeat;
					background-position: center;
					padding: 30px 33px;
					display: block;
				}

				.cart {
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-left: 1px solid #b8c9d6;
				}

				.cart > a {
					text-align: center;
					min-width: 110px;
					padding: 32px 15px 34px 45px;
					background-image: url("/image/cart.png");
					background-repeat: no-repeat;
					background-position: 10px center;
				}

				.login {
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-left: 1px solid #b8c9d6;
					border-right: 1px solid #b8c9d6;
				}

				.login > a {
					padding: 32px 15px 34px 15px;
				}

				.link {
					border-top: 3px solid transparent;
					text-transform: uppercase;
					text-decoration: none;
					font-weight: bold;
					color: #404c54;
				}

				.link:hover {
					color: #608d98;
					border-color: #608d98;
					background-color: #ebebeb;
				}

				.link.active {
					color: #608d98;
					border-color: #608d98;
					background-color: #ebebeb;
				}
			`}</style>
		</header>
	);
}

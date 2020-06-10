import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../store";

export const siteTitle = "Bolt-Next";

function Layout(props) {
	const { children } = props;

	return (
		<div className="layout">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Provider store={store}>
				<Header />
			</Provider>
			<main className="main_section">{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;

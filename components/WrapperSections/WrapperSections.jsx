import Header from "../Header";
import Footer from "../Footer";

export default function WrapperSections(props) {
	const { children } = props;
	return (
		<>
			<Header />
			<main className="main">{children}</main>
			<Footer />
		</>
	);
}

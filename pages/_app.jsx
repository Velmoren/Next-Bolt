import "../styles/global.scss";
import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default App;

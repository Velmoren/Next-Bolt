import Head from "next/head";
import React from "react";
import BannerTop from "../../../components/BannerTop";
import MenuCategories from "../../../components/MenuCategories";
import Contacts from "../../../components/Contacts";
import FilterTop from "../../../components/FilterTop";
import BoltServices from "../../../services/boltServices";
import { connect } from "react-redux";
import Layout, { siteTitle } from "../../../components/layout";
import PagePagination from "../../../components/PagePagination";
import { sliceNumbers } from "../../../action/halpers";
import SettingsCard from "../../../components/SettingsCard";

class Anchors extends React.Component {
	boltServices = new BoltServices();
	state = {
		path_spans: "Анкера",
		path_link: [
			{ label: "Главная", path: "/" },
			{ label: "Каталог", path: "/catalog" },
			{ label: "Анкера", path: "/catalog/anchors" },
		],
		bannerTitile: "Анкера",
		ID: this.props.ID,
		goods: [],
		currentPage: 1,
		countPage: 20,
		size: 1,
	};
	async componentDidMount() {
		await this.boltServices
			.getItems(this.state.ID, this.state.currentPage, this.state.countPage)
			.then((data) => {
				this.props.addToCart(data.list);
				this.setState({
					size: Math.floor(data.size / this.state.countPage),
					goods: data.list,
					path_spans: sliceNumbers(data.list[0].standartName),
					bannerTitile: sliceNumbers(data.list[0].standartName),
				});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		this.boltServices
			.getItems(this.state.ID, this.state.currentPage, this.state.countPage)
			.then((data) => {
				if (prevState.currentPage !== this.state.currentPage) {
					this.props.addToCart(data.list);
					this.setState({ goods: data.list });
				}
			});
	}

	incCurrentPage = () => {
		if (
			this.state.currentPage < this.state.size &&
			this.state.currentPage >= 1
		) {
			this.setState({ currentPage: this.state.currentPage + 1 });
		}
	};
	decCurrentPage = () => {
		if (
			this.state.currentPage <= this.state.size &&
			this.state.currentPage > 1
		) {
			this.setState({ currentPage: this.state.currentPage - 1 });
		}
	};

	changeCurrentPage = (num) => {
		this.setState({ currentPage: num });
	};

	render() {
		const {
			path_spans,
			path_link,
			bannerTitile,
			ID,
			goods,
			size,
			currentPage,
		} = this.state;

		return (
			<Layout>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<section>
					<div className="banner_section p-30">
						<div className="container">
							<BannerTop
								path_link={path_link}
								path_spans={path_spans}
								bannerTitile={bannerTitile}
							>
								{<h2 className="banner_data"></h2>}
							</BannerTop>
						</div>
					</div>

					<div className="anchors p-30">
						<div className="container">
							<div className="box">
								<div className="left">
									<MenuCategories boxMargin={`0 0 40px 0`} />
									<Contacts
										colorText={"#608d98"}
										paddingBox={"0"}
										backgroundBox={"inherit"}
									/>
								</div>
								<div className="centerAndDolie">
									<FilterTop />
									<SettingsCard goods={this.state.goods} />
									<PagePagination
										count={size}
										currentPage={currentPage}
										incCurrentPage={this.incCurrentPage}
										decCurrentPage={this.decCurrentPage}
										changeCurrentPage={this.changeCurrentPage}
									/>
								</div>
							</div>
						</div>
					</div>

					<style jsx>{`
						section {
							background-color: white;
						}
					`}</style>
				</section>
			</Layout>
		);
	}
}

Anchors.getInitialProps = async ({ query }) => {
	console.log(query);

	const ID = query.id;
	return { ID };
};

const mapStateToProps = (store) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (data) =>
			dispatch({
				type: "ADD_GOODS",
				payload: data,
			}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Anchors);

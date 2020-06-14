import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import BannerTop from "../components/BannerTop";
import Contacts from "../components/Contacts";
import MenuCategories from "../components/MenuCategories";
import SearchTop from "../components/SearchTop";
import BoltServices from "../services/boltServices";
import { useSelector, useDispatch } from "react-redux";

const boltServices = new BoltServices();

const useSearch = () => {
	const searchStr = useSelector((state) => state.search.searchStr);
	const dispatch = useDispatch();

	const updateSearchStr = (str) => {
		dispatch({
			type: "UPDATE_SEARCH_STRING",
			payload: str,
		});
	};

	return { searchStr, updateSearchStr };
};

Search.getInitialProps = async () => {
	const types = await boltServices.getAllType().then((res) => {
		return res;
	});

	return {
		types,
	};
};

function Search(props) {
	const path_spans = "О компании";
	const path_link = [{ label: "Главная", path: "/" }];
	const bannerTitile = "О компании";
	const { types } = props;
	const { searchStr, updateSearchStr } = useSearch();
	console.log(types);

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
						/>
					</div>
				</div>
				<div className="about_section p-30" onClick={props.incAc}>
					<div className="container">
						<div className="box">
							<div className="left">
								<MenuCategories boxMargin={`0 0 40px 0`} types={types} />
								<Contacts
									colorText={"#608d98"}
									paddingBox={"0"}
									backgroundBox={"inherit"}
								/>
							</div>
							<div className="centerAndDolie">
								<SearchTop
									searchStr={searchStr}
									updateSearchStr={updateSearchStr}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Search;

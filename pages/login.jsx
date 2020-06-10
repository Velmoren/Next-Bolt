import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import LogInForm from "../components/LogInForm";
// import WrapperSections from "../components/WrapperSections";

export default function Regas() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="login_section">
				<div className="container">
					<div className="wrapper">
						<LogInForm />
					</div>
				</div>
			</section>
		</Layout>
	);
}

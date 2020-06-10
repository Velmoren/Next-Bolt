import Link from "next/link";
import styles from "./BannerTop.module.scss";

export default function BannerTop(props) {
	const { box, path, arrow, title, banner_children } = styles;
	const { path_spans, path_link, bannerTitile, buttons = false } = props;

	return (
		<div className={box}>
			<div className={path}>
				{path_link.map((link, index) => {
					return (
						<React.Fragment key={index}>
							<Link href={link.path}>
								<a>{link.label}</a>
							</Link>
							<span className={arrow}> » </span>
						</React.Fragment>
					);
				})}
				<span>{path_spans}</span>
			</div>
			<h1 className={title}>{bannerTitile}</h1>
			<div className={banner_children}>{props.children}</div>
			{buttons ? <span>asdasd</span> : null}
		</div>
	);
}

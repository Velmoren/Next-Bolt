import Link from "next/link";
import s from "./GoodsList.module.scss";

function GoodsList(props) {
	const { goods, namePage } = props;
	console.log(namePage);

	return (
		<>
			{goods
				? goods.map((bolt, index) => {
						const {
							STANDARTID,
							STANDARTNAME,
							image,
							DIN,
							ISO,
							PN,
							GOST,
							img,
						} = bolt;
						return (
							<div className={s.box} key={index}>
								<div className={s.image}>
									<img src="" alt="" />
								</div>
								<div className={s.description}>
									<Link
										href={`/catalog/[categories]/[id]`}
										as={`/catalog/${namePage}/${STANDARTID}`}
									>
										<a className={s.title}>{STANDARTNAME}</a>
									</Link>
									<div className={s.description_item}>
										<h3>DIN</h3>
										<span>{DIN}</span>
									</div>
									<div className={s.description_item}>
										<h3>ISO</h3>
										<span>{ISO}</span>
									</div>
									<div className={s.description_item}>
										<h3>PN</h3>
										<span>{PN}</span>
									</div>
									<div className={s.description_item}>
										<h3>ГОСТ</h3>
										<span>{GOST}</span>
									</div>
								</div>
								<div className={s.button}>
									<Link
										href={`/catalog/${namePage}/[id]`}
										as={`/catalog/${namePage}/${STANDARTID}`}
									>
										<a>в каталог</a>
									</Link>
								</div>
							</div>
						);
				  })
				: null}
		</>
	);
}

export default GoodsList;

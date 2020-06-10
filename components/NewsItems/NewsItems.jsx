import NewsItemText from "./NewsItemText";
import s from "./NewsItems.module.scss";

export default function NewsItems({ news }) {
	return (
		<>
			{news.map((item) => {
				const { id, image_preview, title } = item;

				return (
					<div className={s.box} key={id}>
						<div className={s.content}>
							<img className={s.img} src={image_preview} alt={title} />
							<NewsItemText item={item} />
						</div>
					</div>
				);
			})}
		</>
	);
}

import styles from "./PagePagination.module.scss";

export default function PagePagination(props) {
	const { box, list, list_item } = styles;
	const {
		count = 1,
		currentPage,
		incCurrentPage,
		decCurrentPage,
		changeCurrentPage,
	} = props;

	const arrPagination = [];
	for (let i = 1; i <= count; i++) {
		arrPagination.push(i);
	}

	return (
		<div className={box}>
			<ul className={list}>
				<li className={list_item}>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							decCurrentPage();
						}}
					>
						«
					</a>
				</li>
				{arrPagination.map((item, index) => {
					if (currentPage === 1 && item <= currentPage + 2) {
						return (
							<li className={list_item} key={index}>
								<a
									href=""
									style={{
										backgroundColor: item === currentPage ? "#ebebeb" : "white",
									}}
									onClick={(e) => {
										e.preventDefault();
										changeCurrentPage(item);
									}}
								>
									{item}
								</a>
							</li>
						);
					} else if (currentPage === count && item >= currentPage - 2) {
						return (
							<li className={list_item} key={index}>
								<a
									href=""
									style={{
										backgroundColor: item === currentPage ? "#ebebeb" : "white",
									}}
									onClick={(e) => {
										e.preventDefault();
										changeCurrentPage(item);
									}}
								>
									{item}
								</a>
							</li>
						);
					} else if (
						currentPage !== 1 &&
						item <= currentPage + 1 &&
						item >= currentPage - 1
					) {
						return (
							<li className={list_item} key={index}>
								<a
									href=""
									style={{
										backgroundColor: item === currentPage ? "#ebebeb" : "white",
									}}
									onClick={(e) => {
										e.preventDefault();
										changeCurrentPage(item);
									}}
								>
									{item}
								</a>
							</li>
						);
					} else {
						return null;
					}
				})}
				<li className={list_item}>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							incCurrentPage();
						}}
					>
						»
					</a>
				</li>
			</ul>
		</div>
	);
}

import styles from "./App.module.css";
import SearchWithIcon from "./components/SearchWithIcon/SearchWithIcon";
const App = () => {
	return (
		// <div className={styles.app}>
		// 	{/* <Navigation />

		// 	<hr className={styles.hr} />

		// 	<Main />
		// 	<GetStartedPart />
		// 	<BottomPage /> */}

		// </div>
		<div className={styles.demo}>
			{/* <SearchWithIcon /> */}
			{/* <WebsiteDesc
				imgPath={assets.web_img}
				iconPath={assets.w_icon}
				name={"Elysian Tennis"}
				source={"Webflow"}
				money={"Free"}
			/> */}
			{/* <LinkWithImage iconPath={assets.Youtube_icon} link={"#"} /> */}
			{/* <PartOfAddress /> */}
			<SearchWithIcon />
		</div>
	);
};

export default App;

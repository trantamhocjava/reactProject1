import Navigation from "./components/Navigation/Navigation";
import styles from "./App.module.css";
import Main from "./components/Main/Main";
import GetStartedPart from "./components/GetStartedPart/GetStartedPart";
import BottomPage from "./components/BottomPage/BottomPage";

const App = () => {
	return (
		<div className={styles.app}>
			<Navigation />

			<hr className={styles.hr} />

			<Main />
			<GetStartedPart />
			<BottomPage />
		</div>
	);
};

export default App;

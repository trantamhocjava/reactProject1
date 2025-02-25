import MainRight from "../MainRight/MainRight";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Main.module.css";

const Main = () => {
	return (
		<div className={styles.main}>
			<Sidebar />
			<MainRight />
		</div>
	);
};

export default Main;

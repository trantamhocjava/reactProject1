import FeatureWithIcon from "../FeatureWithIcon/FeatureWithIcon";
import SearchWithIcon from "../SearchWithIcon/SearchWithIcon";
import styles from "./Sidebar.module.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<SearchWithIcon />
			<FeatureWithIcon
				text={"All"}
				iconPath={assets.Home_icon}
				number={"6344"}
			/>
			<FeatureWithIcon
				text={"Featured"}
				iconPath={assets.Home_icon}
			/>
			<FeatureWithIcon text={"Free"} iconPath={assets.Home_icon} />
			<hr className={styles.hr} />
			<FeatureWithIcon
				text={"Architecture & Design"}
				iconPath={assets.Home_icon}
				className={styles.extraFeatureWithIcon}
			/>
			<FeatureWithIcon
				text={"Arts & Entertainment"}
				iconPath={assets.Home_icon}
				className={styles.extraFeatureWithIcon}
			/>
			<FeatureWithIcon
				text={"Blog & Editorial"}
				iconPath={assets.Home_icon}
				className={styles.extraFeatureWithIcon}
			/>
			<FeatureWithIcon
				text={"Community & Profit"}
				iconPath={assets.Home_icon}
				className={styles.extraFeatureWithIcon}
			/>
			<FeatureWithIcon
				text={"Documentation"}
				iconPath={assets.Home_icon}
				className={styles.extraFeatureWithIcon}
			/>
			<FeatureWithIcon
				text={"Education"}
				iconPath={assets.Home_icon}
				className={styles.extraFeatureWithIcon}
			/>
			<FeatureWithIcon
				text={"Environment"}
				iconPath={assets.Home_icon}
				className={styles.extraFeatureWithIcon}
			/>
		</div>
	);
};

export default Sidebar;

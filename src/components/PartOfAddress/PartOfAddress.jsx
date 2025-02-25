import { assets } from "../../assets/assets";
import styles from "./PartOfAddress.module.css";

const PartOfAddress = () => {
	return (
		<div className={styles.partOfAddress}>
			<p className={styles.partOfAddressPrev}>Templates</p>
			<img
				src={assets.Arrows_right_icon}
				alt="Arrows_right_icon"
				className={styles.arrow}
			/>
			<p className={styles.partOfAddressPrev}>Categories</p>
			<img
				src={assets.Arrows_right_icon}
				alt="Arrows_right_icon"
				className={styles.arrow}
			/>
			<p>Free</p>
		</div>
	);
};

export default PartOfAddress;

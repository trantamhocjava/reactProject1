import styles from "./Navigation.module.css";
import { assets } from "../../assets/assets";
import Link from "../Link/Link";
import Button from "../Button/Button";

const Navigation = () => {
	return (
		<div className={styles.nav}>
			<img src={assets.w_icon} alt="icon" className={styles.img} />
			<div className={styles.fourLinks}>
				<Link text={"Dashboard"} className={styles.link} />
				<div className={styles.linkWithArrow}>
					<Link
						text={"Marketplace"}
						className={styles.link}
					/>
					<img
						src={assets.arrow_down_icon}
						alt="arrow_down_icon"
						className={styles.arrowDown}
					/>
				</div>
				<Link text={"Learn"} className={styles.link} />
				<div className={styles.linkWithArrow}>
					<Link
						text={"Resources"}
						className={styles.link}
					/>
					<img
						src={assets.arrow_down_icon}
						alt="arrow_down_icon"
						className={styles.arrowDown}
					/>
				</div>
			</div>
			<Button
				text={"Get started - it's free"}
				className={styles.button}
			/>
		</div>
	);
};

export default Navigation;

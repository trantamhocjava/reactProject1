import PropTypes from "prop-types";
import styles from "./GetStartedPart.module.css";
import Button from "../Button/Button";
import clsx from "clsx";
import { assets } from "../../assets/assets";

const GetStartedPart = ({ className }) => {
	return (
		<div className={clsx(styles.div, className)}>
			<div className={styles.descDiv}>
				<h1 className={styles.heading}>
					Want to sell your own website templates?
				</h1>
				<p className={styles.desc}>
					Check out the review process and guidelines to get
					started selling your own website templates
				</p>
				<Button
					text={"Get started"}
					className={styles.button}
				/>
			</div>

			<div className={styles.imgs}>
				<img
					src={assets.sky}
					alt="sky"
					className={styles.imgSmall}
				/>
				<img
					src={assets.sky_bg}
					alt="sky_bg"
					className={styles.imgBig}
				/>
				<img
					src={assets.sky}
					alt="sky"
					className={styles.imgMedium}
				/>
			</div>
		</div>
	);
};

GetStartedPart.propTypes = {
	className: PropTypes.string,
};

export default GetStartedPart;

import PropTypes from "prop-types";
import styles from "./ButtonWithArrow.module.css";
import clsx from "clsx";
import { assets } from "../../assets/assets";

const ButtonWithArrow = ({ text, className }) => {
	return (
		<div className={clsx(styles.div, className)}>
			<button className={styles.button}>{text}</button>
			<img
				src={assets.long_Arrows_right_icon}
				alt=""
				className={styles.icon}
			/>
		</div>
	);
};

ButtonWithArrow.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
};

export default ButtonWithArrow;

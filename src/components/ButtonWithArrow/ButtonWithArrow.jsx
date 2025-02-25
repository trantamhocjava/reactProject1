import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./ButtonWithArrow.module.css";
import arrowIcon from "./long_Arrows_right_icon.png";

const ButtonWithArrow = ({ text, className }) => {
	return (
		<div className={clsx(styles.div, className)}>
			<button className={styles.button}>{text}</button>
			<img src={arrowIcon} alt="" className={styles.icon} />
		</div>
	);
};

ButtonWithArrow.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
};

export default ButtonWithArrow;

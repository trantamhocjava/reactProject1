import PropTypes from "prop-types";
import styles from "./FeatureWithIcon.module.css";
import clsx from "clsx";

const FeatureWithIcon = ({ iconPath, text, number, className }) => {
	return (
		<div className={clsx(styles.div, className)}>
			<img src={iconPath} alt="icon" className={styles.img} />
			<p className={styles.p}>{text}</p>
			<p className={styles.number}>{number}</p>
		</div>
	);
};

FeatureWithIcon.propTypes = {
	iconPath: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
	number: PropTypes.string,
};

export default FeatureWithIcon;

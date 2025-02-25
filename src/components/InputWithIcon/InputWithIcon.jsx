import PropTypes from "prop-types";
import styles from "./InputWithIcon.module.css";
import clsx from "clsx";
import { assets } from "../../assets/assets";

const InputWithIcon = ({ className }) => {
	return (
		<div className={clsx(className, styles.div)}>
			<img
				src={assets.search_icon}
				alt="search_icon"
				className={styles.icon}
			/>
			<input
				type="text"
				placeholder="Search for templates"
				className={styles.input}
			/>
		</div>
	);
};

InputWithIcon.propTypes = {
	className: PropTypes.string,
};

export default InputWithIcon;

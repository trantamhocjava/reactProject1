import PropTypes from "prop-types";
import styles from "./Link.module.css";
import clsx from "clsx";

const Link = ({ text, className }) => {
	return (
		<a href="#" className={clsx(className, styles.a)}>
			{text}
		</a>
	);
};

Link.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
};

export default Link;

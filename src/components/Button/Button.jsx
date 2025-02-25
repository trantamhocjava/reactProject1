import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text, className }) => {
	return <button className={clsx(styles.button, className)}>{text}</button>;
};

Button.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
};

export default Button;

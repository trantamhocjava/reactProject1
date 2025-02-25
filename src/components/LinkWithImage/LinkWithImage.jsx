import PropTypes from "prop-types";
import styles from "./LinkWithImage.module.css";
import clsx from "clsx";
const LinkWithImage = ({ className, iconPath, link }) => {
	return (
		<a className={clsx(styles.div, className)} href={link}>
			<img src={iconPath} alt="icon" className={styles.img} />
		</a>
	);
};

LinkWithImage.propTypes = {
	className: PropTypes.string,
	iconPath: PropTypes.string,
	link: PropTypes.string,
};

export default LinkWithImage;

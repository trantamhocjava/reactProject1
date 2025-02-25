import PropTypes from "prop-types";
import styles from "./SearchWithIcon.module.css";
import clsx from "clsx";
import search_icon from "./search_icon.png";

const SearchWithIcon = ({ className }) => {
	return (
		<div className={clsx(className, styles.div)}>
			<img
				src={search_icon}
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

SearchWithIcon.propTypes = {
	className: PropTypes.string,
};

export default SearchWithIcon;

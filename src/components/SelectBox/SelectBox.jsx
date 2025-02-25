import PropTypes from "prop-types";
import styles from "./SelectBox.module.css";

const SelectBox = ({ text, name }) => {
	return (
		<select name={name} id="" className={styles.select}>
			<option value="" selected hidden>
				{text}
			</option>
			<option value="">Hello</option>
		</select>
	);
};

SelectBox.propTypes = {
	text: PropTypes.string,
	name: PropTypes.string,
};

export default SelectBox;

import PropTypes from "prop-types";
import ButtonWithArrow from "../ButtonWithArrow/ButtonWithArrow";
import styles from "./WebsiteDesc.module.css";

const WebsiteDesc = ({ imgPath, iconPath, name, source, money }) => {
	return (
		<div className={styles.websiteDesc}>
			<div className={styles.websiteImgDiv}>
				<img
					src={imgPath}
					alt="img"
					className={styles.websiteImg}
				/>
				<ButtonWithArrow
					text={"View Detail"}
					className={styles.buttonWithArrow}
				/>
			</div>
			<div className={styles.websiteDescDown}>
				<img src={iconPath} alt="" className={styles.icon} />
				<div className={styles.nameSource}>
					<p className={styles.name}>{name}</p>
					<p className={styles.source}>{source}</p>
				</div>
				<p className={styles.money}>{money}</p>
			</div>
		</div>
	);
};

WebsiteDesc.propTypes = {
	imgPath: PropTypes.string,
	iconPath: PropTypes.string,
	name: PropTypes.string,
	source: PropTypes.string,
	money: PropTypes.string,
};

export default WebsiteDesc;

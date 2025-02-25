import PropTypes from "prop-types";
import styles from "./BottomPage.module.css";
import clsx from "clsx";
import Link from "../Link/Link";
import LinkWithImage from "../LinkWithImage/LinkWithImage";
import { assets } from "../../assets/assets";

const BottomPage = ({ className }) => {
	return (
		<div className={clsx(styles.div, className)}>
			<div className={styles.explorePart}>
				<p>
					<strong>Explore</strong>
				</p>
				<Link text={"Dashboard"} />
				<Link text={"Marketplace"} />
				<Link text={"Designers"} />
			</div>

			<div className={styles.explorePart}>
				<p>
					<strong>Learn & get help</strong>
				</p>
				<Link text={"Support"} />
				<Link text={"University"} />
				<Link text={"Courses"} />
				<Link text={"Blog"} />
				<Link text={"Ebooks"} />
				<Link text={"Forum"} />
				<Link text={"Community"} />
				<Link text={"Developers"} />
				<Link text={"Wishlist"} />
				<Link text={"Status"} />
			</div>

			<div className={styles.companyTerms}>
				<div className={styles.explorePart}>
					<p>
						<strong>Company</strong>
					</p>
					<Link text={"About"} />
					<Link text={"Careers"} />
					<Link text={"Sitemap"} />
					<Link text={"Become an affiliate"} />
				</div>

				<div className={styles.explorePart}>
					<p>
						<strong>Teams & policies</strong>
					</p>
					<Link text={"Terms of service"} />
					<Link text={"Privacy policy"} />
					<Link text={"Cookie policy"} />
					<Link text={"Cookie preferences"} />
				</div>
			</div>

			<div className={styles.explorePart}>
				<p>
					<strong>Social</strong>
				</p>
				<LinkWithImage iconPath={assets.w_icon} link={"#"} />
				<LinkWithImage
					iconPath={assets.Youtube_icon}
					link={"#"}
				/>
				<LinkWithImage
					iconPath={assets.twitter_icon}
					link={"#"}
				/>
				<LinkWithImage iconPath={assets.w_icon} link={"#"} />
				<LinkWithImage
					iconPath={assets.Youtube_icon}
					link={"#"}
				/>
				<LinkWithImage
					iconPath={assets.twitter_icon}
					link={"#"}
				/>
			</div>
		</div>
	);
};

BottomPage.propTypes = {
	className: PropTypes.string,
};

export default BottomPage;

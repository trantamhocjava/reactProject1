import styles from "./MainRight.module.css";

import PartOfAddress from "../PartOfAddress/PartOfAddress";
import SelectBox from "../SelectBox/SelectBox";
import WebsiteDesc from "../WebsiteDesc/WebsiteDesc";
import { assets } from "../../assets/assets";

const MainRight = () => {
	return (
		<div className={styles.div}>
			<PartOfAddress />
			<h1 className={styles.heading}>Free Website Templates</h1>
			<div className={styles.selectBoxs}>
				<SelectBox text={"Style"} />
				<SelectBox text={"Type"} />
			</div>
			<div className={styles.websiteDescs}>
				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Elysian Tennis"}
					source={"Webflow"}
					money={"Free"}
				/>

				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Iftech"}
					source={"Sithoopa Gunarathne"}
					money={"Free"}
				/>

				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Fortress"}
					source={"Riffmax"}
					money={"Free"}
				/>

				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Kayo"}
					source={"Pawel Gola jjjjjjjjjjjjjjjjjj"}
					money={"Free"}
				/>
			</div>

			<div className={styles.websiteDescs}>
				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Elysian Tennis"}
					source={"Webflow"}
					money={"Free"}
				/>

				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Iftech"}
					source={"Sithoopa Gunarathne"}
					money={"Free"}
				/>

				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Fortress"}
					source={"Riffmax"}
					money={"Free"}
				/>

				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Kayo"}
					source={"Pawel Gola jjjjjjjjjjjjjjjjjj"}
					money={"Free"}
				/>
			</div>

			<div className={styles.websiteDescs}>
				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Elysian Tennis"}
					source={"Webflow"}
					money={"Free"}
				/>

				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Iftech"}
					source={"Sithoopa Gunarathne"}
					money={"Free"}
				/>

				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Fortress"}
					source={"Riffmax"}
					money={"Free"}
				/>

				<WebsiteDesc
					imgPath={assets.web_img}
					iconPath={assets.w_icon}
					name={"Kayo"}
					source={"Pawel Gola jjjjjjjjjjjjjjjjjj"}
					money={"Free"}
				/>
			</div>
		</div>
	);
};

export default MainRight;

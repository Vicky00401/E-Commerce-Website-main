import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/vigneshwaran-v-b182b6306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/Vicky00401" icon={BsGithub} />
          <Footer.Icon
            href="mailto:mailboxsince2004@gmail.com"
            icon={BsEnvelope}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */

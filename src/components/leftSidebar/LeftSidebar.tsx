import { GithubOutlined, LinkedinOutlined, MailOutlined, InstagramOutlined, SendOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
// import qwe from "../../assets/img/Physics Wallpaper 1920x1080 ·①  WallpaperTag.jpg";
// import photo1 from "../../assets/svg/photo_1.jpg"
// import photo2 from "../../assets/svg/photo_2.jpg"
// import photo3 from "../../assets/svg/photo_3.jpg"
// import photo4 from "../../assets/svg/photo_4.jpg"
// import photo5 from "../../assets/svg/photo_5.jpg"
import photo6 from "../../assets/svg/photo_6.jpg"

export default function LeftSidebar() {
  const { t } = useTranslation("leftSidebar"); // 🗂 leftSidebar.json namespace

  return (
    <div className="leftSidebar">
      <div className="leftSidebar__header">
        <div className="profile">
          <p className="avatar">Asror</p>
          <span className="badge">A</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: t("role") }} />
      </div>

      <div className="leftSidebar__me">
        <img src={photo6} alt="Abdunazarov Asrorbek — Frontend Developer Portfolio, Asror, Abdunazarov, Asrorbek, Asror Abdunazarov, Abdunazarov Asrorbek, Asrorbek Abdunazarov, Abdunazarov Asror" />
      </div>

      <p className="leftSidebar__email">{t("email")}</p>

      <p className="leftSidebar__address">{t("address")}</p>

      <p className="leftSidebar__copyright">{t("copyright")}</p>

      <div className="leftSidebar__icons">
        <div className="leftSidebar__row">
          <div className="leftSidebar__col">
            <a href="https://github.com/AbdunazarovAsrorbek" target="_blank" rel="noreferrer">
              <GithubOutlined />
            </a>
          </div>
          <div className="leftSidebar__col">
            <a href="https://linkedin.com/in/asror-abdunazarov-25a7a2377" target="_blank" rel="noreferrer">
              <LinkedinOutlined />
            </a>
          </div>
          <div className="leftSidebar__col">
            <a href="https://instagram.com/__asror1" target="_blank" rel="noreferrer">
              <InstagramOutlined />
            </a>
          </div>
          <div className="leftSidebar__col">
            <a href="https://t.me/aabdunazarov1" target="_blank" rel="noopener noreferrer">
              <SendOutlined />
            </a>
          </div>
        </div>
      </div>

      <a href="#Contact" className="leftSidebar__link">
        <MailOutlined /> {t("hireMe")}
      </a>
    </div>
  );
}

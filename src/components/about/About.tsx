import { UserOutlined } from "@ant-design/icons";
import Reveal from "../reveal/Reveal";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about"); 

  return (
    <div className="about">
      <Reveal direction="up">
        <div className="about__subtitle" id="About">
          <UserOutlined /> <p>{t("subtitle")}</p>
        </div>
      </Reveal>

      <Reveal direction="up">
        <h1 className="about__title">
          {t("title.before")} <span>{t("title.highlight")}</span>
        </h1>
      </Reveal>

      <Reveal direction="up">
        <p className="about__uptitle">{t("description")}</p>
      </Reveal>
    </div>
  );
}

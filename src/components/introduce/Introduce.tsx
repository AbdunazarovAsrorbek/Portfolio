import { HomeOutlined } from "@ant-design/icons";
import Loader from "../loader/Loader";
import Reveal from "../reveal/Reveal";
import { useTranslation } from "react-i18next";

export default function Introduce() {
  const { t } = useTranslation("introduce");

  return (
    <div className="introduce">
      <Reveal direction="up">
        <div className="introduce__subtitle" id="Home">
          <HomeOutlined /> <p>{t("subtitle")}</p>
        </div>
      </Reveal>

      <Reveal direction="up">
        <h1 className="introduce__title">
          {t("title.before")} <span>{t("title.name")}</span>,{" "}
          {t("title.after")}
        </h1>
      </Reveal>

      <Reveal direction="up">
        <p className="introduce__uptitle">{t("description")}</p>
      </Reveal>

      <Reveal direction="up">
        <div className="introduce__loader">
          <Loader />
        </div>
      </Reveal>

      <div className="introduce__facts">
        <Reveal direction="right">
          <div className="facts__left">
            <h1>{t("facts.experience.years")}</h1>
            <p dangerouslySetInnerHTML={{ __html: t("facts.experience.text") }} />
          </div>
        </Reveal>

        <Reveal direction="left">
          <div className="facts__right">
            <h1>{t("facts.clients.count")}</h1>
            <p dangerouslySetInnerHTML={{ __html: t("facts.clients.text") }} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

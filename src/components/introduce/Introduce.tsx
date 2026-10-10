import { DownloadOutlined, HomeOutlined } from "@ant-design/icons";
import Loader from "../loader/Loader";
import Reveal from "../reveal/Reveal";
import { useTranslation } from "react-i18next";

const resumeLanguage = {
  uz: "CVResumeUZ.pdf",
  ru: "CVResumeRU.pdf",
  en: "CVResumeEN.pdf",
}

export default function Introduce() {
  const { t, i18n } = useTranslation("introduce");

  const resumeFile =
    resumeLanguage[i18n.resolvedLanguage as keyof typeof resumeLanguage] ??
    resumeLanguage.uz;

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
        <button
          onClick={() =>
            window.open(`/${resumeFile}`, "_blank", "noopener,noreferrer")
          }
          className="introduce__download-btn"
        >
          <DownloadOutlined />
          {t("resumeDownload")}
        </button>
      </Reveal>

      <Reveal direction="up">
        <div className="introduce__loader">
          <Loader />
        </div>
      </Reveal>

      <div className="introduce__facts">
        <Reveal direction="right">
          <div className="facts__left">
            <span className="facts__number">{t("facts.experience.years")}</span>
            <p dangerouslySetInnerHTML={{ __html: t("facts.experience.text") }} />
          </div>
        </Reveal>

        <Reveal direction="left">
          <div className="facts__right">
            <span className="facts__number">{t("facts.clients.count")}</span>
            <p dangerouslySetInnerHTML={{ __html: t("facts.clients.text") }} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

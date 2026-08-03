import Reveal from "../reveal/Reveal";
import { AppstoreAddOutlined, LinkOutlined, CalendarOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation("portfolio");

  // ⚡ To‘g‘ri variant — massivni to‘g‘ridan-to‘g‘ri i18n orqali olish
  const projects = t("projects", { returnObjects: true }) as {
    title: string;
    date: string;
    link: string;
  }[];

  return (
    <div className="portfolio" id="Portfolio">
      <Reveal direction="up">
        <div className="portfolio__subtitle">
          <AppstoreAddOutlined /> <p>{t("subtitle")}</p>
        </div>
      </Reveal>

      <Reveal direction="up">
        <h2 className="portfolio__title">
          {t("title.before")} <span>{t("title.after")}</span>
        </h2>
      </Reveal>

      <div className="portfolio__cards">
        {Array.isArray(projects) &&
          projects.map((proj, index) => (
            <Reveal key={index} direction="up">
              <div className="portfolio__card">
                <div>
                  <h3 className="portfolio__card-title">{proj.title}</h3>
                  <p className="portfolio__card-date">
                    <CalendarOutlined /> {proj.date}
                  </p>
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio__card-link"
                >
                  <LinkOutlined /> {t("viewProject")}
                </a>
              </div>
            </Reveal>
          ))}
      </div>
    </div>
  );
}

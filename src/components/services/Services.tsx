import Reveal from "../reveal/Reveal";
import { ToolOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface ServicesData {
  subtitle: string;
  title: string;
  items: {
    title: string;
    text: string;
    projects: string;
    icon: string;
  }[];
}

export default function Services() {
  const { i18n } = useTranslation("services"); // "services" namespace ishlatiladi
  const services = i18n.getResourceBundle(i18n.language, "services") as ServicesData | undefined;
  // console.log("Current language:", i18n.language);
  // console.log("services data:", services);

  // Ma'lumotlarni konsolga chiqarish (debug uchun)
  // console.log("Services data:", services);

  const titleParts = services?.title?.split(" ") || ["Ta'lim", "Tajriba"];
  const items = services?.items || [];

  return (
    <div className="services">
      <Reveal direction="up">
        <div className="services__subtitle" id="Services">
          <ToolOutlined /> <p>{services?.subtitle || "Subtitle mavjud emas"}</p>
        </div>
      </Reveal>

      <Reveal direction="up">
        <h2 className="services__title">
          {titleParts[0]} <span>{titleParts[1] || ""}</span>
        </h2>
      </Reveal>

      <div className="services__row">
        {items.length > 0 ? (
          items.map((item, i) => (
            <Reveal key={i}>
              <div className="services__col">
                <div className="services__col-subtitle">
                  <h2>{item.title}</h2>
                  <i className={item.icon} />
                </div>
                <p>{item.text}</p>
                <span>{item.projects}</span>
              </div>
            </Reveal>
          ))
        ) : (
          <p>Ma'lumotlar mavjud emas</p>
        )}
      </div>
    </div>
  );
}
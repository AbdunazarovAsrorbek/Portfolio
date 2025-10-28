import { ArrowDownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export default function Loader() {
  const { t } = useTranslation("loader");

  const loaderText = t("loader.text");
  const portfolioLink = `#${t("loader.link")}`;

  console.log(loaderText);

  return (
    <div className="loader-circle">
      <svg viewBox="0 0 200 200" className="loader-svg">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -80, 0
               a 80,80 0 1,1 160,0
               a 80,80 0 1,1 -160,0"
          />
        </defs>

        <text className="circle-text">
          <textPath
            xlinkHref="#circlePath"
            textLength="502"
            lengthAdjust="spacingAndGlyphs"
          >
            {` • ${loaderText} • ${loaderText} `}
          </textPath>
        </text>
      </svg>

      <a className="loader-icon" href={portfolioLink}>
        <ArrowDownOutlined />
      </a>
    </div>
  );
}
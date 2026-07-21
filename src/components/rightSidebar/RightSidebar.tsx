import {
  HomeOutlined,
  UserOutlined,
  ReadOutlined,
  // ToolOutlined,
  CodeOutlined,
  AppstoreAddOutlined,
  CommentOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import useActiveSection from "../useActiveSection";
import ToggleTwo from "../toggleTwo/ToggleTwo";

export default function RightSidebar() {
  useActiveSection();
  const { t } = useTranslation("rightSidebar");

  const links = [
    { id: "Home", icon: <HomeOutlined />, label: t("home") },
    { id: "About", icon: <UserOutlined />, label: t("about") },
    { id: "Resume", icon: <ReadOutlined />, label: t("resume") },
    // { id: "Services", icon: <ToolOutlined />, label: t("services") },
    { id: "Skills", icon: <CodeOutlined />, label: t("skills") },
    { id: "Portfolio", icon: <AppstoreAddOutlined />, label: t("portfolio") },
    { id: "Testimonials", icon: <CommentOutlined />, label: t("testimonials") },
    { id: "Contact", icon: <MailOutlined />, label: t("contact") },
  ];

  return (
    <>
      <ToggleTwo />
      <div className="rightSidebar">
        <div className="rightSidebar__row">
          {links.map((link) => (
            <div key={link.id} className="rightSidebar__col">
              <a
                href={`#${link.id}`}
                data-label={link.label}
                className="sidebar-link"
              >
                {link.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>

  );
}

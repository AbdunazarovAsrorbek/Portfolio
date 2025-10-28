import { useState } from "react";
import {
    MenuOutlined,
    CloseOutlined,
    InstagramOutlined,
    SendOutlined,
    HomeOutlined,
    UserOutlined,
    ReadOutlined,
    ToolOutlined,
    CodeOutlined,
    AppstoreAddOutlined,
    CommentOutlined,
    MailOutlined,
    GithubOutlined,
    LinkedinOutlined
} from "@ant-design/icons";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import useActiveSection from "../useActiveSection";

export default function Toggle() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation("rightSidebar");
    useActiveSection();

    const links = [
        { id: "Home", icon: <HomeOutlined />, label: t("home") },
        { id: "About", icon: <UserOutlined />, label: t("about") },
        { id: "Resume", icon: <ReadOutlined />, label: t("resume") },
        { id: "Services", icon: <ToolOutlined />, label: t("services") },
        { id: "Skills", icon: <CodeOutlined />, label: t("skills") },
        { id: "Portfolio", icon: <AppstoreAddOutlined />, label: t("portfolio") },
        { id: "Testimonials", icon: <CommentOutlined />, label: t("testimonials") },
        { id: "Contact", icon: <MailOutlined />, label: t("contact") },
    ];

    const handleClose = () => setIsOpen(false);

    return (
        <>
            {/* 🔲 Overlay – sahifani qoraytiradi va bosilganda menyuni yopadi */}
            <div
                className={`toggle__overlay ${isOpen ? "toggle__overlay--active" : ""}`}
                onClick={handleClose}
            ></div>

            <div className="toggle">
                {/* 🔘 Asosiy tugma */}
                <button
                    className="toggle__button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle sidebar"
                >
                    {isOpen ? <CloseOutlined /> : <MenuOutlined />}
                </button>

                {/* 🧭 Yon menyu */}
                <div className={`toggle__menu ${isOpen ? "toggle__menu--open" : ""}`}>
                   <div>
                   <div className="toggle__menu-header">
                        <h3>{t("menu")}</h3>
                        <button className="toggle__menu-close" onClick={handleClose}>
                            <CloseOutlined />
                        </button>
                    </div>

                    <ul className="toggle__menu-links">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} onClick={handleClose}>
                                    {link.icon}
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <LanguageSwitcher />
                   </div>

                    <div className="toggle__menu-socials-main">
                        <a href="https://github.com/AbdunazarovAsrorbek" target="_blank" rel="noopener noreferrer">
                            <GithubOutlined />
                        </a>
                        <a href="https://linkedin.com/in/asror-abdunazarov-25a7a2377" target="_blank" rel="noopener noreferrer">
                            <LinkedinOutlined />
                        </a>
                        <a href="https://instagram.com/__asror1" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined />
                        </a>
                        <a href="https://t.me/aabdunazarov1" target="_blank" rel="noopener noreferrer">
                            <SendOutlined />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

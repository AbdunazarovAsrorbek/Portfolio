import { CodeOutlined } from "@ant-design/icons";
import Reveal from "../reveal/Reveal";
import { useTranslation } from "react-i18next";

import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import sass from "../../assets/svg/sass.svg";
import figma from "../../assets/svg/figma.svg";
import js from "../../assets/svg/js.svg";
import react from "../../assets/svg/react-removebg-preview.png";
import ts from "../../assets/svg/ts.svg";
import mysql from "../../assets/svg/bootstrap.svg";
import tailwind from "../../assets/svg/tailwind.svg";
import postman from "../../assets/svg/postman.svg";
import redux from "../../assets/svg/redux.svg";
import github from "../../assets/svg/github.svg";

interface SkillsData {
    subtitle: string;
    title: string;
    skill: {
        name: string;
        image: string;
        direction: "up" | "down" | "left" | "right";
    }[];
}

export default function Skills() {
    const { i18n } = useTranslation("skills"); // "skills" namespace ishlatiladi

    const skills = i18n.getResourceBundle(i18n.language, "skills") as SkillsData | undefined;


    // Debugging uchun: konsolda ma'lumotlarni tekshirish
    // console.log("Current language:", i18n.language);
    // console.log("Resume data:", skills);

    const titleParts = skills?.title?.split(" ") || ["Ta'lim", "Tajriba"];
    const skill = skills?.skill || [];

    const images: Record<string, string> = {
        html,
        css,
        sass,
        figma,
        js,
        react,
        ts,
        mysql,
        tailwind,
        postman,
        redux,
        github
    };

    return (
        <div className="skills">
            <Reveal direction="up">
                <div className="skills__subtitle" id="Skills">
                    <CodeOutlined /> <p>{skills?.subtitle || "Subtitle mavjud emas"}</p>
                </div>
            </Reveal>

            <Reveal direction="up">
                <h1 className="skills__title">
                    {titleParts[0]} <span>{titleParts[1] || ""}</span>
                </h1>
            </Reveal>

            <div className="skills__row">
                {skill.length > 0 ? (
                    skill.map((skill, i) => (
                        <div key={i} className="skills__col">
                            <Reveal direction={skill.direction}>
                                <div className="skills__col-card">
                                    <div className="img-box">
                                        <img src={images[skill.image]} alt={skill.name} />
                                    </div>
                                    <h1>{skill.name}</h1>
                                </div>
                            </Reveal>
                        </div>
                    ))
                ) : (
                    <p>Ma'lumotlar mavjud emas</p>
                )}
            </div>
        </div>
    );
}
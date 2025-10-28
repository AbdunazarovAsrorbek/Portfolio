import { useTranslation } from "react-i18next";
import { useState } from "react";
import uz from "../../assets/svg/Flag_of_Uzbekistan.svg.png";
import ru from "../../assets/svg/Flag_of_Russia.svg.png";
import en from "../../assets/svg/Flag_of_the_United_States.svg.webp";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "uz", img: uz, label: "O'zbekcha" },
    { code: "ru", img: ru, label: "Русский" },
    { code: "en", img: en, label: "English" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="languageSwitcher">
      {/* 🌐 TIL TUGMASI */}
      <div
        className="languageSwitcher__icon"
        onClick={() => setOpen(!open)}
      >
        <img
          src={currentLang.img}
          alt={currentLang.code}
          className="languageSwitcher__flag"
        />
        <span>{currentLang.label}</span>
      </div>

      {/* 📜 DROPDOWN */}
      {open && (
        <div className="languageSwitcher__dropdown">
          {languages
            .filter((l) => l.code !== currentLang.code)
            .map((l) => (
              <div
                key={l.code}
                className="languageSwitcher__option"
                onClick={() => changeLanguage(l.code)}
              >
                <img src={l.img} alt={l.code} />
                <span>{l.label}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

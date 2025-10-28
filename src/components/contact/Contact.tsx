import React, { useRef } from "react";
import { MailOutlined } from "@ant-design/icons";
import Reveal from "../reveal/Reveal";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

export default function Contact() {
  const { t } = useTranslation("contact"); // 🗂 contact.json dan tarjima
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_portfolioAsror", // ✅ EmailJS Service ID
        "template_mnx26kl",       // ✅ Template ID
        form.current,             // ✅ Form reference
        "tGvtMF1BQIteDqKvs"       // ✅ Public Key
      )
      .then(
        () => {
          alert("Xabaringiz muvaffaqiyatli yuborildi!");
          form.current?.reset();
        },
        (error) => {
          console.error("Email yuborishda xatolik:", error);
          alert("Xabar yuborilmadi, qayta urinib ko‘ring.");
        }
      );
  };

  return (
    <div className="contact">
      <Reveal direction="up">
        <div className="contact__subtitle" id="Contact">
          <MailOutlined /> <p>{t("subtitle")}</p>
        </div>
      </Reveal>

      <Reveal direction="up">
        <h1 className="contact__title">
          {t("title.before")} <span>{t("title.highlight")}</span>
        </h1>
      </Reveal>

      <Reveal direction="up">
        <p className="contact__uptitle">{t("email")}</p>
      </Reveal>

      <Reveal direction="up">
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-card">
            <div className="contact__form-group">
              <label>
                {t("form.fullName")} <span>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder={t("form.fullNamePlaceholder") || ""}
                required
              />
            </div>

            <div className="contact__form-group">
              <label>
                {t("form.telegram")} <span>*</span>
              </label>
              <input
                type="text"
                name="telegram"
                placeholder={t("form.telegramPlaceholder") || ""}
              />
            </div>
          </div>

          <div className="contact__form-card">
            <div className="contact__form-group">
              <label>
                {t("form.email")} <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("form.emailPlaceholder") || ""}
                required
              />
            </div>

            <div className="contact__form-group">
              <label>
                {t("form.phone")}{" "}
                <span className="optional">({t("form.optional")})</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder={t("form.phonePlaceholder") || ""}
              />
            </div>
          </div>

          <div className="contact__form-group">
            <label>
              {t("form.message")} <span>*</span>
            </label>
            <textarea
              name="message"
              placeholder={t("form.messagePlaceholder") || ""}
              rows={5}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact__btn">
            {t("form.send")}
          </button>
        </form>
      </Reveal>
    </div>
  );
}

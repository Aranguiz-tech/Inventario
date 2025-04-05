import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import BanderaChile from "../assets/Bandera_chile.png";
import BanderaUK from "../assets/Bandera_inglaterra.png";

function LanguageSwitcher() {
  const { i18n: i18 } = useTranslation();
  const currentLang = i18.language;

  // Al cargar, aplicar el idioma guardado en localStorage si existe
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== currentLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div style={styles.container}>
      <img
        src={BanderaChile}
        alt="Español"
        onClick={() => switchLanguage("es")}
        style={{
          ...styles.flag,
          opacity: currentLang === "es" ? 1 : 0.5,
          transform: currentLang === "es" ? "scale(1.1)" : "scale(1)",
        }}
      />
      <img
        src={BanderaUK}
        alt="English"
        onClick={() => switchLanguage("en")}
        style={{
          ...styles.flag,
          opacity: currentLang === "en" ? 1 : 0.5,
          transform: currentLang === "en" ? "scale(1.1)" : "scale(1)",
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    cursor: "pointer",
  },
  flag: {
    width: "36px",
    height: "24px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    transition: "opacity 0.3s, transform 0.2s",
  },
};

export default LanguageSwitcher;

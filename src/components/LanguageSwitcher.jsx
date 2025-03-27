import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import BanderaChile from "../assets/Bandera_chile.png";
import BanderaUK from "../assets/Bandera_inglaterra.png";

function LanguageSwitcher() {
  const { i18n: i18 } = useTranslation();
  const currentLang = i18.language;

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
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
        }}
      />
      <img
        src={BanderaUK}
        alt="English"
        onClick={() => switchLanguage("en")}
        style={{
          ...styles.flag,
          opacity: currentLang === "en" ? 1 : 0.5,
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
    transition: "opacity 0.3s",
  },
};

export default LanguageSwitcher;

import { MdOutlineTranslate } from "react-icons/md";
import { useTranslation } from "react-i18next";

export function TranslateTogleButton() {
  const { i18n } = useTranslation();
  const HandleToggleLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("pt");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <button onClick={HandleToggleLanguage} title="Traduzir">
      <MdOutlineTranslate className="dark:text-white text-neutral-900   dark:hover:text-gray-400 hover:text-neutral-500 transition-colors" />
    </button>
  );
}
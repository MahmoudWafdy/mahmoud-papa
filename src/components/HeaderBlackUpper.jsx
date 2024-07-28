import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const HeaderBlackUpper = () => {
  const { t, i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "ar") {
      document.documentElement.classList.add("rtl");
      document.documentElement.classList.remove("ltr");
      setIsArabic(true);
    } else {
      document.documentElement.classList.add("ltr");
      document.documentElement.classList.remove("rtl");
      setIsArabic(false);
    }
  };

  useEffect(() => {
    // Set initial language based on i18n current language
    const currentLang = i18n.language;
    if (currentLang === "ar") {
      document.documentElement.classList.add("rtl");
      document.documentElement.classList.remove("ltr");
      setIsArabic(true);
    } else {
      document.documentElement.classList.add("ltr");
      document.documentElement.classList.remove("rtl");
      setIsArabic(false);
    }
  }, [i18n.language]);

  return (
    <div className="bg-black w-full text-white text-xs py-1 md:text-sm">
      <div className="container mx-auto px-2 gap-3  flex items-center justify-between md:px-5">
        <div className="flex justify-between gap-2">
          <span>
            {t(
              "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
            )}
          </span>
          <a href="#"> {t("ShopNow")}</a>
        </div>
        <div id="lang_Btn_container" className="p-1">
          {isArabic ? (
            <button
              onClick={() => changeLanguage("en")}
              id="eng-btn"
              className="visible"
            >
              Eng
            </button>
          ) : (
            <button
              onClick={() => changeLanguage("ar")}
              id="arb-btn"
              className="visible"
            >
              Arb
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HeaderBlackUpper;

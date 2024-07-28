import { useTranslation } from "react-i18next";

const HeaderBlackUpper = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="bg-black w-full text-white text-xs py-1 md:text-sm">
      <div className="container mx-auto px-2 gap-3  flex justify-between md:px-5">
        <div className="flex justify-between gap-2">
          <span>
            {t(
              "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
            )}
          </span>
          <a href="#"> ShopNow</a>
        </div>
        <div>
          <button onClick={() => changeLanguage("en")}>Eng</button>
          <button onClick={() => changeLanguage("ar")}>Arb</button>
          <button onClick={() => changeLanguage("fr")}>Fren</button>
        </div>
      </div>
    </div>
  );
};
export default HeaderBlackUpper;

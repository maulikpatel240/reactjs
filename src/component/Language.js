import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Language = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const lang = i18n.language;
    const langs = i18n.languages;
    
    const checkAvailability = (val) => {
        if(val == lang){
            return 1;
        }else{
            return 0;
        }
    }

    return (
        <>
            <button
                type="button"
                className={checkAvailability('en') ? 'btn btn-primary-outline active' : 'btn btn-primary-outline'}
                onClick={() => changeLanguage("en")}
            >
                {t("English")}
            </button>
            <button
                type="button"
                className={checkAvailability('de')? 'btn btn-primary-outline active' : 'btn btn-primary-outline'}
                onClick={() => changeLanguage("de")}
            >
                {t("German")}
            </button>
        </>
    );
};

export default Language;

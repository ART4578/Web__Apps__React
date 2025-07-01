import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { LanguagesData } from "./LanguagesData";
import GlobeIcon from "./GlobeIcon";

function Language() {
    const currentLanguageCode = cookies.get('i18next') || 'en';
    const currentLanguage = LanguagesData.find(l => l.code === currentLanguageCode);
    const { t } = useTranslation();

    const releaseDate = new Date('2024-04-27');
    const timeDifference = new Date() - releaseDate;
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr';
        document.title = t('app_title');
    }, [currentLanguage, t]);

    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <GlobeIcon/>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                    <span className="dropdown-item-text">{t('language')}</span>
                    </li>
                    {
                    LanguagesData.map(({ code, name, country_code, img }) => (
                        <li key={country_code}>
                        <button 
                        className="dropdown-item" 
                        onClick={() => i18next.changeLanguage(code)}
                        disabled={code === currentLanguageCode}
                        >
                            <img 
                            className="mx-2" src={img} 
                            style={{
                            opacity: currentLanguageCode === code ? 0.5 : 1,
                            }}
                            />
                            {name}
                        </button>
                        </li>
                    ))
                    }
                </ul>
                </div>
            </div>
            <div className="d-flex flex-column align-items-start">
                <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
                <p>{t('days_since_release', { number_of_days })}</p>
            </div>
        </div>
    );
};

export default Language;
import en from "../../resources/langs/en.json";
import hu from "../../resources/langs/hu.json";
import de from "../../resources/langs/de.json";

import { useAppSelector } from "../store";
import { DEFAULT_LANG, Language } from "../langHandle";
import { getAppLang } from "../slices/appSettingsSlice";

const dictionaries: any = { hu, en, de };

const crawlDictionary = (dictionary: any, text: string) => {
    const textParts = text.split(".");

    while (textParts.length > 1) {
        dictionary = dictionary[textParts.shift() as string];
    }

    text = textParts[0];

    return [dictionary, text];
};

const getMissingTranslation = (text: string): string => "Error_" + text;

const useTranslation = () => {
    const appLang: Language = useAppSelector(getAppLang) ?? DEFAULT_LANG;

    const translation = (text: string): string => {
        let dictionary = dictionaries?.[appLang];

        if (!dictionary) {
            return getMissingTranslation(text);
        }

        if (text.includes(".")) {
            try {
                [dictionary, text] = crawlDictionary(dictionary, text);
            } catch (err) {
                return getMissingTranslation(text);
            }
        }

        const translatedText = dictionary?.[text];

        return translatedText ?? getMissingTranslation(text);
    };

    return {
        t: translation,
        appLang,
    };
};

export default useTranslation;

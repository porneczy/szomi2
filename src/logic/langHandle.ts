export type Language = "hu" | "en" | "de";

export const HU_LANG: Language = "hu";
export const EN_LANG: Language = "en";
export const DE_LANG: Language = "de";

export const DEFAULT_LANG: Language = HU_LANG;

export function getBrowserLang(): Language {
    const lang = window.navigator.language.substring(0, 2);
    return lang === EN_LANG || lang === HU_LANG || lang === DE_LANG
        ? lang
        : DEFAULT_LANG;
}

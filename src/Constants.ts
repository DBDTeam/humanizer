import { Languages, LanguageUnits } from "@types";

/**
 * All supported time units.
 */
export const Units = [
    "decades",
    "lustrums",
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
];

/**
 * Time conversion factors.
 */
export const Factors: Record<string, number> = {
    decades: 311040000000,
    lustrums: 155520000000,
    years: 31104000000,
    months: 2592000000,
    weeks: 604800000,
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000,
    milliseconds: 1,
};

/**
 * Language code map.
 */
export const Langs = new Map<Languages, LanguageUnits>();

// ESPAÑOL (SPANISH)
Langs.set("es", {
    years: ["año", "años"],
    decades: ["década", "décadas"],
    lustrums: ["lustro", "lustros"],
    months: ["mes", "meses"],
    weeks: ["semana", "semanas"],
    days: ["día", "días"],
    hours: ["hora", "horas"],
    minutes: ["minuto", "minutos"],
    seconds: ["segundo", "segundos"],
    milliseconds: ["milisegundo", "milisegundos"],
})
    
// PORTUGUÉS
.set("pt", {
    years: ["ano", "anos"],
    decades: ["década", "décadas"],
    lustrums: ["lustro", "lustros"],
    months: ["mês", "meses"],
    weeks: ["semana", "semanas"],
    days: ["dia", "dias"],
    hours: ["hora", "horas"],
    minutes: ["minuto", "minutos"],
    seconds: ["segundo", "segundos"],
    milliseconds: ["milissegundo", "milissegundos"],
})
    
// ENGLISH
.set("en", {
    years: ["year", "years"],
    decades: ["decade", "decades"],
    lustrums: ["lustrum", "lustrums"],
    months: ["month", "months"],
    weeks: ["week", "weeks"],
    days: ["day", "days"],
    hours: ["hour", "hours"],
    minutes: ["minute", "minutes"],
    seconds: ["second", "seconds"],
    milliseconds: ["millisecond", "milliseconds"],
})
    
// ITALIANO (ITALIAN)
.set("it", {
    years: ["anno", "anni"],
    decades: ["decade", "decadi"],
    lustrums: ["lustro", "lustrum"],
    months: ["mese", "mesi"],
    weeks: ["settimana", "settimane"],
    days: ["giorno", "giorni"],
    hours: ["ora", "ore"],
    minutes: ["minuto", "minuti"],
    seconds: ["secondo", "secondi"],
    milliseconds: ["millisecondo", "millisecondi"],
})
    
// FRANÇAIS (FRENCH)
.set("fr", {
    years: ["an", "ans"],
    decades: ["décennie", "décennies"],
    lustrums: ["lustre", "lustres"],
    months: ["mois", "mois"],
    weeks: ["semaine", "semaines"],
    days: ["jour", "jours"],
    hours: ["heure", "heures"],
    minutes: ["minute", "minutes"],
    seconds: ["seconde", "secondes"],
    milliseconds: ["milliseconde", "millisecondes"],
})
    
// DEUTSCH (GERMAN)
.set("de", {
    years: ["Jahr", "Jahre"],
    decades: ["Jahrzehnt", "Jahrzehnte"],
    lustrums: ["Lustrum", "Lustra"],
    months: ["Monat", "Monate"],
    weeks: ["Woche", "Wochen"],
    days: ["Tag", "Tage"],
    hours: ["Stunde", "Stunden"],
    minutes: ["Minute", "Minuten"],
    seconds: ["Sekunde", "Sekunden"],
    milliseconds: ["Millisekunde", "Millisekunden"],
})
    
// NEDERLANDS (DUTCH)
.set("nl", {
    years: ["jaar", "jaren"],
    decades: ["decennium", "decennia"],
    lustrums: ["lustre", "lustra"],
    months: ["maand", "maanden"],
    weeks: ["week", "weken"],
    days: ["dag", "dagen"],
    hours: ["uur", "uren"],
    minutes: ["minuut", "minuten"],
    seconds: ["seconde", "seconden"],
    milliseconds: ["milliseconde", "milliseconden"],
})
    
// SVENSKA (SWEDISH)
.set("sv", {
    years: ["år", "år"],
    decades: ["decennium", "decennier"],
    lustrums: ["lustro", "lustro"],
    months: ["månad", "månader"],
    weeks: ["vecka", "veckor"],
    days: ["dag", "dagar"],
    hours: ["timme", "timmar"],
    minutes: ["minut", "minuter"],
    seconds: ["sekund", "sekunder"],
    milliseconds: ["millisekund", "millisekunder"],
})
    
// РУССКИЙ (RUSSIAN)
.set("ru", {
    years: ["год", "года"],
    decades: ["десятилетие", "десятилетия"],
    lustrums: ["лустра", "лустры"],
    months: ["месяц", "месяца"],
    weeks: ["неделя", "недели"],
    days: ["день", "дня"],
    hours: ["час", "часа"],
    minutes: ["минута", "минуты"],
    seconds: ["секунда", "секунды"],
    milliseconds: ["миллисекунда", "миллисекунды"],
})

// 中文 (CHINESE TRADITIONAL)
.set("zh", {
    years: ["年", "年"],
    decades: ["十年", "十年"],
    lustrums: ["五年", "五年"],
    months: ["月", "月"],
    weeks: ["周", "周"],
    days: ["天", "天"],
    hours: ["小时", "小时"],
    minutes: ["分钟", "分钟"],
    seconds: ["秒", "秒"],
    milliseconds: ["毫秒", "毫秒"],
})
    
// 日本語 (JAPANESE)
.set("ja", {
    years: ["年", "年"],
    decades: ["十年", "十年"],
    lustrums: ["五年", "五年"],
    months: ["月", "月"],
    weeks: ["週", "週"],
    days: ["日", "日"],
    hours: ["時間", "時間"],
    minutes: ["分", "分"],
    seconds: ["秒", "秒"],
    milliseconds: ["ミリ秒", "ミリ秒"],
})

// 한국어 (KOREAN)
.set("ko", {
    years: ["년", "년"],
    decades: ["십 년", "십 년"],
    lustrums: ["다섯 년", "다섯 년"],
    months: ["개월", "개월"],
    weeks: ["주", "주"],
    days: ["일", "일"],
    hours: ["시간", "시간"],
    minutes: ["분", "분"],
    seconds: ["초", "초"],
    milliseconds: ["밀리 초", "밀리 초"],
})

// العربية (ARABIC)
.set("ar", {
    years: ["سنة", "سنوات"],
    decades: ["عقد", "عقود"],
    lustrums: ["خمس سنوات", "خمس سنوات"],
    months: ["شهر", "أشهر"],
    weeks: ["أسبوع", "أسابيع"],
    days: ["يوم", "أيام"],
    hours: ["ساعة", "ساعات"],
    minutes: ["دقيقة", "دقائق"],
    seconds: ["ثانية", "ثواني"],
    milliseconds: ["ميلي ثانية", "ميلي ثواني"],
})

// हिन्दी (HINDI)
.set("hi", {
    years: ["साल", "साल"],
    decades: ["दशक", "दशक"],
    lustrums: ["लस्ट्रम", "लस्ट्रम"],
    months: ["महीना", "महीने"],
    weeks: ["सप्ताह", "सप्ताह"],
    days: ["दिन", "दिन"],
    hours: ["घंटा", "घंटे"],
    minutes: ["मिनट", "मिनट"],
    seconds: ["सेकंड", "सेकंड"],
    milliseconds: ["मिलीसेकंड", "मिलीसेकंड"],
})

// فارسی (PERSIAN)
.set("fa", {
    years: ["سال", "سال"],
    decades: ["دهه", "دهه"],
    lustrums: ["لوستر", "لوستر"],
    months: ["ماه", "ماه"],
    weeks: ["هفته", "هفته"],
    days: ["روز", "روز"],
    hours: ["ساعت", "ساعت"],
    minutes: ["دقیقه", "دقیقه"],
    seconds: ["ثانیه", "ثانیه"],
    milliseconds: ["میلی ثانیه", "میلی ثانیه"],
})

// தமிழ் (TAMIL)
.set("ta", {
    years: ["வருடம்", "ஆண்டுகள்"],
    decades: ["தசாவது", "தசாகள்"],
    lustrums: ["லஸ்ட்ரம்", "லஸ்ட்ரம்"],
    months: ["மாதம்", "மாதங்கள்"],
    weeks: ["வாரம்", "வாரங்கள்"],
    days: ["நாள்", "நாட்கள்"],
    hours: ["மணி", "மணிகள்"],
    minutes: ["நிமிடம்", "நிமிடங்கள்"],
    seconds: ["விநாடி", "விநாடிகள்"],
    milliseconds: ["மில்லி விநாடி", "மில்லி விநாடிகள்"],
})

// తెలుగు (TELUGU)
.set("te", {
    years: ["సంవత్సరం", "సంవత్సరాలు"],
    decades: ["దశాబ్దాలు", "దశాబ్దాలు"],
    lustrums: ["లస్ట్రం", "లస్ట్రాలు"],
    months: ["నెల", "నెలలు"],
    weeks: ["వారం", "వారాలు"],
    days: ["రోజు", "రోజులు"],
    hours: ["గంట", "గంటలు"],
    minutes: ["నిమిషం", "నిమిషాలు"],
    seconds: ["సెకన్", "సెకన్లు"],
    milliseconds: ["మిల్లీసెకన్డు", "మిల్లీసెకన్డులు"],
})

// বাংলা (BENGALI)
.set("bn", {
    years: ["বছর", "বছর"],
    decades: ["দশক", "দশক"],
    lustrums: ["লস্ট্রাম", "লস্ট্রাম"],
    months: ["মাস", "মাস"],
    weeks: ["সপ্তাহ", "সপ্তাহ"],
    days: ["দিন", "দিন"],
    hours: ["ঘন্টা", "ঘন্টা"],
    minutes: ["মিনিট", "মিনিট"],
    seconds: ["সেকেন্ড", "সেকেন্ড"],
    milliseconds: ["মিলিসেকেন্ড", "মিলিসেকেন্ড"],
})

// ગુજરાતી (GUJARATI)
.set("gu", {
    years: ["વર્ષ", "વર્ષો"],
    decades: ["દાયો", "દાયકા"],
    lustrums: ["લસ્ટ્રમ", "લસ્ટ્રમ્સ"],
    months: ["મહિનો", "મહિના"],
    weeks: ["અઠવાડિયું", "અઠવાડિયા"],
    days: ["દિવસ", "દિવસો"],
    hours: ["ઘંટા", "ઘંટા"],
    minutes: ["મિનિટ", "મિનિટ"],
    seconds: ["સેકન્ડ", "સેકન્ડ"],
    milliseconds: ["મિલિસેકન્ડ", "મિલિસેકન્ડ"],
});

/**
 * This can be infinitely improved by getting a language list
 * and fetching every translated word and adding it to the map.
 */
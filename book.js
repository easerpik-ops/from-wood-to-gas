(function () {
  var KEY = "woodToGas.a11y";
  var STRINGS = {
    en: {
      simple: {
        title: "From Wood to Gas",
        kicker: "A digital book",
        audience: "For grades 3 and 4",
        contents: "Contents",
        back: "Back to cover",
        next: "Next",
        prev: "Previous",
        waiting: "No pages yet. We will add them soon.",
        tabBook: "Contents",
        tabAccess: "Accessibility",
        close: "Close",
        send: "Send",
        listen: "Listen",
        accessTitle: "Accessibility",
        language: "Language",
        difficulty: "Word level",
        font: "Letter size",
        sizeSm: "Small",
        sizeMd: "Medium",
        sizeLg: "Large",
        space: "Line spacing",
        spaceTight: "Tight",
        spaceNorm: "Normal",
        spaceRoomy: "Roomy",
        contrast: "Paper",
        contrastPaper: "Usual",
        contrastHigh: "Higher contrast",
        seen: "Opened",
        alt: "A wooden log with a small flame and a blue wisp, and green leaves.",
        page1: "Wood, the first fuel",
        page2: "The forests disappear",
        page3: "Steam and new fuels",
        page4: "Before engines and after",
        page5: "Coal instead of wood",
        page6: "The story of coal",
        page7: "Get to know coal",
        page8: "Coal and charcoal",
        page9: "How we use coal",
        page10: "From oil to kerosene",
        page11: "How oil forms",
        page12: "Oil, step by step",
        page13: "Get to know crude oil",
        page14: "What the oil does",
        page15: "Cooking gas",
        page16: "Which fuel gives more heat?",
        page17: "Fuels and the air around us",
        page18: "What we have learned",
        page19: "King of the fuels",
        page20: "The king sits down",
        cardsAlt: "Blank cards on a table with wood, coal, a candle, straw, and a jar of oil.",
        throneAlt: "A blue cooking-gas flame sits on a purple throne under a striped canopy, with a gold crown above the flame, a lump of coal on the left, and a kerosene lamp on the right.",
        smokeAlt: "A factory with two smoking chimneys and a dark pile of ash, with trees and flowers in front.",
        pilesAlt: "Huge piles of coal and a long conveyor at a power station by the sea.",
        keroAlt: "A dark jar of crude oil, a pale jar of kerosene, a lit lamp, and a heater, with an airplane in the window.",
        formAlt: "Fish and shell creatures above a muddy sea floor, with black oil and pale gas in hole-filled rock below.",
        sinkAlt: "Tiny sea creatures drift in blue water and settle on the sea floor.",
        mudAlt: "Layers of mud and sand cover a dark band of old sea remains.",
        wellAlt: "A wooden oil tower drills down through folded rock to a pool of black oil.",
        oilTrayAlt: "A golden jar of cooking oil, a dark jar of crude oil, two droppers, white paper, two cups of water, and paper towels.",
        flameAlt: "A metal spoon holds dark oil, a small flame, and a wisp of smoke.",
        gasAlt: "A blue gas flame burns under a cooking pot, with a metal pipe on the wall and no smoke.",
        pairAlt: "A shiny black lump of coal beside a dull, hole-filled lump of charcoal.",
        fossilAlt: "A black lump of coal with a fern shape pressed into it.",
        trayAlt: "A metal tray with coal, paper, a small hammer, a cup of water, and a paper towel.",
        trayEmptyAlt: "An empty metal tray on a wooden table.",
        coalAlt: "A coal mine with a tall tower, a smoking chimney, and carts full of coal.",
        s1Alt: "Giant trees and ferns stand in a swamp.",
        s2Alt: "Fallen trees lie in swamp water.",
        s3Alt: "Sand and mud cover a dark layer of plants.",
        s4Alt: "A black layer of coal lies between layers of rock.",
        s5Alt: "A miner with a lamp stands in a wooden tunnel of coal.",
        s6Alt: "Carts of coal leave a mine on a green hill.",
        c1Alt: "A green horse-drawn coach on a dusty road, with a driver and two horses.",
        c2Alt: "A green steam train passes brick factories with tall chimneys.",
        c3Alt: "In a workshop, a craftsperson shows one metal bucket to a customer.",
        c4Alt: "A man in a blue jacket points up beside a cart piled with metal buckets.",
        shipAlt: "A paddle steamship with two smoking chimneys.",
        stationAlt: "Steam trains stand in a busy station.",
        f1Alt: "A full forest and a child carrying a small bundle of sticks.",
        f2Alt: "Tree stumps in the grass, with one factory behind the cabin.",
        f3Alt: "Factories and smoke where the forest used to be.",
        tentAlt: "A woman bakes bread over a wood fire in a tent.",
        hearthAlt: "Wood burns in a fireplace and heats the room."
      },
      common: {
        title: "From Wood to Gas",
        kicker: "A digital book",
        audience: "For children in grades 3 and 4",
        contents: "Contents",
        back: "Back to cover",
        next: "Next",
        prev: "Previous",
        waiting: "This book is just beginning. New pages will appear here, one at a time.",
        tabBook: "Contents",
        tabAccess: "Accessibility",
        close: "Close",
        send: "Send",
        listen: "Listen",
        accessTitle: "Accessibility",
        language: "Language",
        difficulty: "How hard are the words?",
        font: "Letter size",
        sizeSm: "Small",
        sizeMd: "Medium",
        sizeLg: "Large",
        space: "Line spacing",
        spaceTight: "Tight",
        spaceNorm: "Normal",
        spaceRoomy: "Roomy",
        contrast: "Paper",
        contrastPaper: "Usual",
        contrastHigh: "Higher contrast",
        seen: "Opened",
        alt: "A wooden log with a small flame and a curling blue wisp, framed by green leaves.",
        page1: "Wood, the first fuel people used",
        page2: "Machines and the lost forests",
        page3: "Steam machines and new fuels",
        page4: "Life before engines and after them",
        page5: "Coal takes the place of wood",
        page6: "The story of coal",
        page7: "Get to know the coal",
        page8: "Coal and charcoal",
        page9: "Coal as a fuel",
        page10: "Crude oil and kerosene",
        page11: "How oil forms in nature",
        page12: "The steps that make oil",
        page13: "Get to know crude oil",
        page14: "More tests of crude oil",
        page15: "Where cooking gas comes from",
        page16: "Heat from equal amounts",
        page17: "Fuels and the environment",
        page18: "A summary",
        page19: "King of the fuels",
        page20: "Cooking gas is king",
        cardsAlt: "Blank calling cards beside a log, a lump of coal, a candle, straw, and a jar of pale oil.",
        throneAlt: "Under a red-and-cream canopy, a blue cooking-gas flame sits crowned on a purple throne, with a black lump of coal standing on the left and a glass kerosene lamp standing on the right.",
        smokeAlt: "Gray smoke pours from two factory chimneys beside a heap of ash, while trees and flowers fill the foreground.",
        pilesAlt: "Black coal heaps and a conveyor stand before the towers of a power station by the sea.",
        keroAlt: "A jar of thick black crude oil beside a jar of clear kerosene, with a lit lamp, a heater, and an airplane beyond the window.",
        formAlt: "An ancient sea with fish and curled shells above brown mud, and beneath it porous rock holding a pool of black oil beside a pale pocket of gas.",
        sinkAlt: "Countless tiny sea creatures drift down through sunlit water onto a carpet of shells on the sea floor.",
        mudAlt: "Blue water above layers of brown mud and pale sand, with a dark band of buried shells below.",
        wellAlt: "A wooden derrick in a green field sends a pipe down through folded layers of rock into a black pool of oil.",
        oilTrayAlt: "Closed jars of golden cooking oil and black crude oil, with two droppers, white paper, two cups of water, and paper towels.",
        flameAlt: "Dark oil burns in a metal spoon, with a yellow flame and a curl of smoke.",
        gasAlt: "A clean blue flame under a metal pot on a green stove, with a gas pipe along the wall.",
        pairAlt: "A glossy black lump of coal beside a dull, porous lump of charcoal.",
        fossilAlt: "A fern shape is pressed into the shiny face of a black coal lump.",
        trayAlt: "A metal tray holds coal, blank paper, a small hammer, a cup of water, and a folded towel.",
        trayEmptyAlt: "A bare metal tray on a wooden table.",
        coalAlt: "A coal mine, with a winding tower, a tall chimney trailing smoke, and a line of carts loaded with coal.",
        s1Alt: "An ancient swamp forest of tall trees and ferns.",
        s2Alt: "Dead trees sink into the still water of a swamp.",
        s3Alt: "Layers of sand and mud bury ancient plants, while a flying reptile glides above.",
        s4Alt: "A black coal seam is pressed between layers of rock.",
        s5Alt: "An adult miner with a lamp stands in a timbered tunnel at the coal seam.",
        s6Alt: "Coal carts roll out of a mine beside a winding tower and a brick house.",
        c1Alt: "A green stagecoach pulled by two horses rolls along a dusty country road.",
        c2Alt: "A green steam locomotive pulls passenger cars past brick factories and smoking chimneys.",
        c3Alt: "A tinsmith in a small workshop holds out one metal bucket.",
        c4Alt: "A factory owner in a blue jacket stands by a cart stacked high with metal buckets, while workers make more.",
        shipAlt: "A paddle steamship crosses the river, with smoke rising from two chimneys.",
        stationAlt: "Two steam locomotives wait under the roof of a crowded station.",
        f1Alt: "A green forest, a cabin, and a child with a few sticks.",
        f2Alt: "Many stumps, some trees still standing, and one factory with two chimneys.",
        f3Alt: "A bare land of stumps, factories pouring smoke, and a truck on a road.",
        tentAlt: "Bread is baked on a pan over a fire of wood and charcoal in a tent.",
        hearthAlt: "Logs burn on a grate in a brick fireplace and heat the living room."
      }
    },
    he: {
      simple: {
        title: "From Wood to Gas",
        kicker: "ספר דיגיטלי",
        audience: "לכיתות ג׳ ו-ד׳",
        contents: "תוכן",
        back: "חזרה לכריכה",
        next: "הבא",
        prev: "הקודם",
        waiting: "עוד אין עמודים. נוסיף אותם בקרוב.",
        tabBook: "תוכן",
        tabAccess: "נגישות",
        close: "סגור",
        send: "שליחה",
        listen: "השמעה",
        accessTitle: "נגישות",
        language: "שפה",
        difficulty: "רמת המילים",
        font: "גודל האותיות",
        sizeSm: "קטן",
        sizeMd: "בינוני",
        sizeLg: "גדול",
        space: "רווח בין השורות",
        spaceTight: "צפוף",
        spaceNorm: "רגיל",
        spaceRoomy: "מרווח",
        contrast: "הנייר",
        contrastPaper: "רגיל",
        contrastHigh: "ניגודיות גבוהה",
        seen: "נפתח",
        alt: "בול עץ עם להבה קטנה ועשן כחול, ועם עלים ירוקים.",
        page1: "העץ, הדלק הראשון",
        page2: "היערות נעלמים",
        page3: "קיטור ודלקים חדשים",
        page4: "לפני המנועים ואחריהם",
        page5: "פחם במקום עץ",
        page6: "סיפור הפחם",
        page7: "הכירו את הפחם",
        page8: "פחם ופחם-עץ",
        page9: "למה משמש הפחם",
        page10: "מנפט לקרוסין",
        page11: "איך נוצר הנפט",
        page12: "הנפט צעד אחר צעד",
        page13: "הכירו את הנפט",
        page14: "מה הנפט עושה",
        page15: "גז בישול",
        page16: "איזה דלק נותן יותר חום",
        page17: "דלקים והסביבה",
        page18: "מה למדנו",
        page19: "מלך הדלקים",
        page20: "המלך יושב",
        cardsAlt: "כרטיסים ריקים על שולחן, עם עץ, פחם, נר, קש וצנצנת שמן.",
        throneAlt: "להבת גז בישול כחולה יושבת על כיסא סגול מתחת לסוכך מפוספס, כתר זהב מעל הלהבה, גוש פחם משמאל ומנורת קרוסין מימין.",
        smokeAlt: "בית חרושת עם שתי ארובות מעשנות וערמת אפר כהה, ולפניו עצים ופרחים.",
        pilesAlt: "ערימות פחם גדולות ומסוע בתחנת כוח ליד הים.",
        keroAlt: "צנצנת כהה של נפט גולמי, צנצנת בהירה של קרוסין, מנורה דולקת ותנור, ומטוס בחלון.",
        formAlt: "דגים ויצורי קונכיות מעל קרקעית בוץ, ומתחתיה נפט שחור וגז בהיר בסלע מלא חורים.",
        sinkAlt: "יצורים זעירים צפים במים כחולים ושוקעים על קרקעית הים.",
        mudAlt: "שכבות של בוץ וחול מכסות פס כהה של שרידי ים ישנים.",
        wellAlt: "מגדל עץ שואב נפט קודח מטה דרך סלע מקופל אל שלולית נפט שחור.",
        oilTrayAlt: "צנצנת זהובה של שמן מאכל, צנצנת כהה של נפט גולמי, שני טפיים, נייר לבן, שתי כוסות מים ומגבות נייר.",
        flameAlt: "כפית מתכת מחזיקה נפט כהה, להבה קטנה ועשן דק.",
        gasAlt: "להבת גז כחולה בוערת מתחת לסיר, עם צינור מתכת על הקיר ובלי עשן.",
        pairAlt: "גוש פחם שחור ומבריק ליד גוש פחם-עץ עמום ומלא חורים.",
        fossilAlt: "גוש פחם שחור עם צורת שרך לחוצה בתוכו.",
        trayAlt: "מגש מתכת עם פחם, נייר, פטיש קטן, כוס מים ומגבת נייר.",
        trayEmptyAlt: "מגש מתכת ריק על שולחן עץ.",
        coalAlt: "מכרה פחם עם מגדל גבוה, ארובה מעשנת וקרונות מלאים בפחם.",
        s1Alt: "עצים ענקיים ושרכים בביצה.",
        s2Alt: "עצים שנפלו שוכבים במי הביצה.",
        s3Alt: "חול ובוץ מכסים שכבה כהה של צמחים, וזוחל מעופף בשמיים.",
        s4Alt: "שכבה שחורה של פחם בין שכבות סלע.",
        s5Alt: "כורה עם מנורה עומד במנהרה של עץ ליד הפחם.",
        s6Alt: "קרונות פחם יוצאים ממכרה על גבעה ירוקה.",
        c1Alt: "כרכרה ירוקה עם שני סוסים ונהג על דרך מאובקת.",
        c2Alt: "רכבת קיטור ירוקה עוברת ליד מפעלי לבנים.",
        c3Alt: "בסדנה, פחח מראה דלי מתכת אחד.",
        c4Alt: "איש במקטורן כחול מצביע למעלה ליד עגלה עמוסה בדליים.",
        shipAlt: "ספינת קיטור עם שתי ארובות מעשנות.",
        stationAlt: "רכבות קיטור עומדות בתחנה הומה.",
        f1Alt: "יער מלא וילד עם חבילה קטנה של עצים.",
        f2Alt: "גזעי עצים כרותים ומפעל אחד מאחורי הבקתה.",
        f3Alt: "מפעלים ועשן במקום שהיה בו יער.",
        tentAlt: "אישה אופה לחם על אש של עץ באוהל.",
        hearthAlt: "עצים בוערים ומחממים חדר."
      },
      common: {
        title: "From Wood to Gas",
        kicker: "ספר דיגיטלי",
        audience: "לילדים בכיתות ג׳ ו-ד׳",
        contents: "תוכן העניינים",
        back: "חזרה לכריכה",
        next: "הבא",
        prev: "הקודם",
        waiting: "הספר רק מתחיל. עמודים חדשים יופיעו כאן, אחד אחד.",
        tabBook: "תוכן",
        tabAccess: "נגישות",
        close: "סגור",
        send: "שליחה",
        listen: "השמעה",
        accessTitle: "נגישות",
        language: "שפה",
        difficulty: "עד כמה המילים קשות?",
        font: "גודל האותיות",
        sizeSm: "קטן",
        sizeMd: "בינוני",
        sizeLg: "גדול",
        space: "רווח בין השורות",
        spaceTight: "צפוף",
        spaceNorm: "רגיל",
        spaceRoomy: "מרווח",
        contrast: "הנייר",
        contrastPaper: "רגיל",
        contrastHigh: "ניגודיות גבוהה",
        seen: "נפתח",
        alt: "בול עץ עם להבה קטנה ועשן כחול, ומסביב עלים ירוקים.",
        page1: "העץ, חומר הדלק הראשון",
        page2: "המכונות והיערות שנעלמו",
        page3: "מכונות הקיטור ודלקים חדשים",
        page4: "החיים לפני המנועים ואחריהם",
        page5: "הפחם תופס את מקום העץ",
        page6: "סיפור הפחם",
        page7: "הכירו את הפחם",
        page8: "פחם ופחם-עץ",
        page9: "הפחם כחומר דלק",
        page10: "מנפט גולמי לקרוסין",
        page11: "כיצד נוצר הנפט בטבע",
        page12: "השלבים שבהם נוצר הנפט",
        page13: "הכירו את הנפט הגולמי",
        page14: "עוד תצפיות בנפט הגולמי",
        page15: "מאין בא גז הבישול",
        page16: "החום מכמות שווה של דלק",
        page17: "חומרי דלק ואיכות הסביבה",
        page18: "סיכום",
        page19: "מלך חומרי הדלק",
        page20: "גז הבישול הוא המלך",
        cardsAlt: "כרטיסי ביקור ריקים לצד בול עץ, גוש פחם, נר, אלומת קש וצנצנת שמן בהיר.",
        throneAlt: "מתחת לסוכך אדום ושמנת, להבת גז בישול כחולה יושבת עם כתר על כיסא סגול, גוש פחם שחור עומד משמאל ומנורת קרוסין מזכוכית עומדת מימין.",
        smokeAlt: "עשן אפור יוצא משתי ארובות בית חרושת ליד ערימת אפר, ועצים ופרחים ממלאים את החזית.",
        pilesAlt: "ערמות פחם שחורות ומסוע לפני מגדלי תחנת כוח על שפת הים.",
        keroAlt: "צנצנת נפט גולמי שחור לצד צנצנת קרוסין צלול, מנורה דולקת, תנור חימום ומטוס מעבר לחלון.",
        formAlt: "ים קדום עם דגים וקונכיות מעל בוץ חום, ומתחתיו סלע נקבובי ובו שלולית נפט שחור ליד כיס גז בהיר.",
        sinkAlt: "המוני יצורים זעירים שוקעים במים מוארים אל מרבד של קונכיות על קרקעית הים.",
        mudAlt: "מים כחולים מעל שכבות בוץ חום וחול בהיר, ומתחתיהן פס כהה של קונכיות קבורות.",
        wellAlt: "מגדל קידוח מעץ בשדה ירוק שולח צינור מטה דרך שכבות סלע מקופלות אל אגם נפט שחור.",
        oilTrayAlt: "צנצנות סגורות של שמן מאכל זהוב ושל נפט גולמי שחור, עם שני טפיים, נייר לבן, שתי כוסות מים ומגבות נייר.",
        flameAlt: "נפט כהה בוער בכפית מתכת, עם להבה צהובה ופיתול עשן.",
        gasAlt: "להבה כחולה נקייה מתחת לסיר מתכת על כירה ירוקה, וצינור גז לאורך הקיר.",
        pairAlt: "גוש פחם שחור ומבריק לצד גוש פחם-עץ עמום ומחורר.",
        fossilAlt: "צורת שרך לחוצה בפניו המבריקים של גוש פחם שחור.",
        trayAlt: "על מגש מתכת מונחים פחם, דף חלק, פטיש קטן, כוס מים ומגבת מקופלת.",
        trayEmptyAlt: "מגש מתכת חשוף על שולחן עץ.",
        coalAlt: "מכרה פחם: מגדל כננת, ארובה גבוהה עם עשן, ושורת קרונות עמוסים בפחם.",
        s1Alt: "יער ביצה קדום של עצים גבוהים ושרכים.",
        s2Alt: "עצים מתים שוקעים במים השקטים של הביצה.",
        s3Alt: "שכבות של חול ובוץ קוברות צמחים קדומים, וזוחל מעופף בשמיים.",
        s4Alt: "שכבת פחם שחורה לחוצה בין שכבות סלע.",
        s5Alt: "כורה מבוגר עם מנורה עומד במנהרה מדופנת בעץ, ליד שכבת הפחם.",
        s6Alt: "קרונות פחם יוצאים ממכרה ליד מגדל כננת ובית לבנים.",
        c1Alt: "כרכרה ירוקה רתומה לשני סוסים נוסעת בדרך עפר מאובקת.",
        c2Alt: "קטר קיטור ירוק מושך קרונות נוסעים ליד מפעלי לבנים וארובות מעשנות.",
        c3Alt: "פחח בסדנה קטנה מושיט דלי מתכת אחד ללקוח.",
        c4Alt: "בעל בית חרושת במקטורן כחול עומד ליד עגלה עמוסה בדלי מתכת, ופועלים מכינים עוד.",
        shipAlt: "ספינת משוטה מונעת בקיטור חוצה נהר, ועשן עולה משתי ארובות.",
        stationAlt: "שני קטרי קיטור ממתינים תחת גג התחנה, והרציף מלא אנשים.",
        f1Alt: "יער ירוק, בקתה וילד עם מעט זרדים.",
        f2Alt: "גזעים כרותים רבים, עצים שעוד עומדים, ומפעל עם שתי ארובות.",
        f3Alt: "אדמה של גזעים כרותים, מפעלים עם עשן ומשאית על דרך.",
        tentAlt: "באוהל אופים לחם על מחבת מעל אש של עץ ופחם-עץ.",
        hearthAlt: "עצים בוערים באח של לבנים ומחממים את החדר."
      }
    }
  };

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  var state = load();

  function load() {
    var next = { lang: "en", level: "simple", size: "md", space: "normal", contrast: "paper" };
    try {
      var q = new URLSearchParams(location.search);
      if (q.get("preview") === "1") {
        if (q.get("lang") === "he") next.lang = "he";
        if (q.get("level") === "common") next.level = "common";
        if (q.get("size") === "sm" || q.get("size") === "lg") next.size = q.get("size");
        if (q.get("space") === "tight" || q.get("space") === "roomy") next.space = q.get("space");
        if (q.get("contrast") === "high") next.contrast = "high";
        return next;
      }
    } catch (error) {}
    try {
      var saved = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!saved) return next;
      if (saved.lang === "he" || saved.lang === "en") next.lang = saved.lang;
      if (saved.level === "common" || saved.level === "simple") next.level = saved.level;
      if (saved.size === "sm" || saved.size === "md" || saved.size === "lg") next.size = saved.size;
      if (saved.space === "tight" || saved.space === "roomy") next.space = saved.space;
      if (saved.contrast === "high") next.contrast = "high";
    } catch (error) {
      return next;
    }
    return next;
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (error) {
      /* The page still works for this visit. */
    }
  }

  function pack() {
    return STRINGS[state.lang][state.level];
  }

  var speakerIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 9v6h3.5L13 20V4L7.5 9H4zm11.2 3a3.2 3.2 0 0 0-1.7-2.8v5.6A3.2 3.2 0 0 0 15.2 12zM16.5 5.2v1.7a6.2 6.2 0 0 1 0 10.2v1.7a8 8 0 0 0 0-13.6z"/></svg>';
  var speakGen = 0;
  var keepAlive = 0;

  function stopKeepAlive() {
    if (!keepAlive) return;
    clearInterval(keepAlive);
    keepAlive = 0;
  }

  function startKeepAlive() {
    stopKeepAlive();
    keepAlive = setInterval(function () {
      if (!window.speechSynthesis || !speechSynthesis.speaking) {
        stopKeepAlive();
        return;
      }
      speechSynthesis.pause();
      speechSynthesis.resume();
    }, 10000);
  }

  function pageText() {
    var book = document.querySelector(".book");
    if (!book) return "";
    var copy = book.cloneNode(true);
    copy.querySelectorAll("button, input, textarea, select, .page-back, .turns, .sr, script").forEach(function (node) {
      node.remove();
    });
    var host = document.createElement("div");
    host.setAttribute("aria-hidden", "true");
    host.style.position = "fixed";
    host.style.left = "-10000px";
    host.style.top = "0";
    host.style.width = "800px";
    host.appendChild(copy);
    document.body.appendChild(host);
    var text = copy.innerText.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
    host.remove();
    return text;
  }

  function speechParts(text) {
    var parts = [];
    text.split(/\n+/).forEach(function (block) {
      var line = block.trim();
      if (!line) return;
      if (line.length < 280) {
        parts.push(line);
        return;
      }
      line.split(/(?<=[.!?])\s+/).forEach(function (bit) {
        var sentence = bit.trim();
        if (sentence) parts.push(sentence);
      });
    });
    return parts;
  }

  function speakPage(button) {
    if (!window.speechSynthesis || !button) return;
    if (button.getAttribute("aria-pressed") === "true") {
      speakGen += 1;
      stopKeepAlive();
      speechSynthesis.cancel();
      button.setAttribute("aria-pressed", "false");
      return;
    }
    var text = pageText();
    if (!text) return;
    var gen = ++speakGen;
    var hebrew = document.documentElement.lang === "he";
    var parts = speechParts(text);
    var index = 0;
    speechSynthesis.cancel();
    function finish() {
      if (gen !== speakGen) return;
      stopKeepAlive();
      button.setAttribute("aria-pressed", "false");
    }
    function next() {
      if (gen !== speakGen) return;
      if (index >= parts.length) {
        finish();
        return;
      }
      var utterance = new SpeechSynthesisUtterance(parts[index]);
      index += 1;
      utterance.lang = hebrew ? "he-IL" : "en-US";
      utterance.rate = 0.92;
      utterance.pitch = 1;
      var voice = pickVoice(hebrew);
      if (voice) utterance.voice = voice;
      utterance.onend = function () { next(); };
      utterance.onerror = function () { finish(); };
      speechSynthesis.speak(utterance);
    }
    button.setAttribute("aria-pressed", "true");
    startKeepAlive();
    if (!speechSynthesis.getVoices().length) {
      speechSynthesis.addEventListener("voiceschanged", function ready() {
        speechSynthesis.removeEventListener("voiceschanged", ready);
        if (gen !== speakGen) return;
        next();
      });
      return;
    }
    next();
  }

  function mountBack() {
    if (document.querySelector(".cover") || document.querySelector(".page-back")) return;
    if (location.search.indexOf("preview=1") !== -1) return;
    if (!document.querySelector(".book")) return;
    var link = document.createElement("a");
    link.className = "page-back";
    link.href = location.pathname.indexOf("/pages/") === -1 ? "index.html" : "../index.html";
    link.innerHTML = '<span class="arrow" aria-hidden="true"></span><span data-i18n="back">Back to cover</span>';
    document.body.appendChild(link);
    link.addEventListener("click", function (event) {
      startTurn(event, link, "prev");
    });
  }

  var BOOK_PAGES = ["index.html", "01-wood.html", "02-forests.html", "03-steam.html", "04-changes.html", "05-coal.html", "06-story.html", "07-look.html", "08-compare.html", "09-uses.html", "10-kerosene.html", "11-formed.html", "12-steps.html", "13-oil-look.html", "15-gas.html", "16-heat.html", "17-harm.html", "18-summary.html", "19-king.html", "20-throne.html"];

  function insidePages() {
    return location.pathname.indexOf("/pages/") !== -1;
  }

  function currentFile() {
    var name = decodeURIComponent(location.pathname).split("/").pop();
    if (!name || BOOK_PAGES.indexOf(name) === -1) return "index.html";
    return name;
  }

  function hrefFor(file) {
    if (file === "index.html") return insidePages() ? "../index.html" : "index.html";
    return insidePages() ? file : "pages/" + file;
  }

  function readSeen() {
    try {
      var saved = JSON.parse(localStorage.getItem("woodToGas.seen") || "{}");
      if (!saved || typeof saved !== "object") return {};
      return saved;
    } catch (error) {
      return {};
    }
  }

  function markSeen() {
    var seen = readSeen();
    if (location.search.indexOf("preview=1") !== -1) return seen;
    var name = currentFile();
    if (!name || name === "index.html" || BOOK_PAGES.indexOf(name) === -1) return seen;
    if (seen[name]) return seen;
    seen[name] = true;
    try {
      localStorage.setItem("woodToGas.seen", JSON.stringify(seen));
    } catch (error) {}
    return seen;
  }

  var turnClip = null;
  var turnHeard = false;

  function turnSoundUrl() {
    return (insidePages() ? "../" : "") + "images/page-turn.wav";
  }

  function prepareTurnSound() {
    if (turnClip) return turnClip;
    turnClip = new Audio(turnSoundUrl());
    turnClip.preload = "auto";
    turnClip.volume = 0.55;
    return turnClip;
  }

  function armTurnSound() {
    var clip = prepareTurnSound();
    turnHeard = false;
    clip.volume = 0;
    var primed = clip.play();
    if (primed && primed.then) {
      primed.then(function () {
        if (turnHeard) return;
        clip.pause();
        clip.currentTime = 0;
      }).catch(function () {});
    }
    return clip;
  }

  function playTurnSound(clip) {
    turnHeard = true;
    clip.pause();
    clip.currentTime = 0;
    clip.volume = 0.55;
    var playing = clip.play();
    if (playing && playing.catch) playing.catch(function () {});
  }

  function startTurn(event, link, dir) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button === 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    var clip = armTurnSound();
    var book = document.querySelector(".book");
    if (!book || document.querySelector(".turn-rig")) {
      location.href = link.href;
      return;
    }
    var rect = book.getBoundingClientRect();
    var root = document.documentElement;
    var rtl = root.dir === "rtl";
    var hingeLeft = (dir === "next" && !rtl) || (dir === "prev" && rtl);
    var visibleTop = Math.max(rect.top, 0);
    var visibleBottom = Math.min(rect.bottom, window.innerHeight);
    var originY = ((visibleTop + visibleBottom) / 2) - rect.top;
    var under = document.createElement("div");
    under.className = "sheet-under";
    var frame = document.createElement("iframe");
    var pageUrl = new URL(link.href, location.href);
    pageUrl.search = "preview=1&lang=" + (root.lang === "he" ? "he" : "en")
      + "&level=" + (root.dataset.level === "common" ? "common" : "simple")
      + "&size=" + (root.dataset.size === "sm" || root.dataset.size === "lg" ? root.dataset.size : "md")
      + "&space=" + (root.dataset.space === "tight" || root.dataset.space === "roomy" ? root.dataset.space : "normal")
      + "&contrast=" + (root.dataset.contrast === "high" ? "high" : "paper");
    frame.setAttribute("aria-hidden", "true");
    frame.setAttribute("tabindex", "-1");
    frame.setAttribute("scrolling", "no");
    frame.title = "";
    frame.style.width = window.innerWidth + "px";
    frame.style.height = window.innerHeight + "px";
    frame.src = pageUrl.href;
    under.appendChild(frame);
    var rig = document.createElement("div");
    rig.className = "turn-rig";
    rig.style.perspectiveOrigin = (hingeLeft ? rect.left : rect.right) + "px " + ((visibleTop + visibleBottom) / 2) + "px";
    book.style.top = rect.top + "px";
    book.style.left = rect.left + "px";
    book.style.width = rect.width + "px";
    book.style.height = rect.height + "px";
    book.style.setProperty("--hinge-y", originY + "px");
    rig.appendChild(book);
    document.body.appendChild(under);
    document.body.appendChild(rig);
    var gone = false;
    var started = false;
    function go(animEvent) {
      if (animEvent && animEvent.animationName && animEvent.animationName.indexOf("turn-out") !== 0) return;
      if (gone) return;
      gone = true;
      location.href = link.href;
    }
    function begin() {
      if (started) return;
      started = true;
      playTurnSound(clip);
      book.classList.remove("turn-out-next", "turn-out-prev");
      book.classList.add(dir === "next" ? "turn-out-next" : "turn-out-prev");
      book.addEventListener("animationend", go);
      window.setTimeout(go, 1000);
    }
    frame.addEventListener("load", function () {
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(begin);
      });
    });
    window.setTimeout(begin, 700);
  }

  function turnLink(dir, href) {
    var link = document.createElement("a");
    link.className = "turn " + dir;
    link.href = href;
    if (dir === "next") {
      link.innerHTML = '<span data-i18n="next">Next</span><span class="arrow" aria-hidden="true"></span>';
    } else {
      link.innerHTML = '<span class="arrow" aria-hidden="true"></span><span data-i18n="prev">Previous</span>';
    }
    link.addEventListener("click", function (event) {
      startTurn(event, link, dir);
    });
    return link;
  }

  function mountTurns() {
    var book = document.querySelector(".book");
    if (!book || document.querySelector(".turns")) return;
    var index = BOOK_PAGES.indexOf(currentFile());
    if (index < 0) index = 0;
    var nav = document.createElement("nav");
    nav.className = "turns";
    nav.setAttribute("aria-label", "Pages");
    if (index > 0) nav.appendChild(turnLink("prev", hrefFor(BOOK_PAGES[index - 1])));
    if (index < BOOK_PAGES.length - 1) nav.appendChild(turnLink("next", hrefFor(BOOK_PAGES[index + 1])));
    book.appendChild(nav);
    if (location.search.indexOf("preview=1") !== -1) return;
    prepareTurnSound();
    try {
      sessionStorage.removeItem("woodToGas.turn");
    } catch (error) {}
  }

  var roughVoices = ["albert", "bad news", "bahh", "bells", "boing", "bubbles", "cellos", "eddy", "flo", "fred", "good news", "grandma", "grandpa", "jester", "junior", "organ", "ralph", "reed", "rocko", "sandy", "shelley", "superstar", "trinoids", "whisper", "wobble", "zarvox"];

  function voiceName(voice) {
    return voice.name.toLowerCase();
  }

  function isRough(voice) {
    var name = voiceName(voice);
    for (var i = 0; i < roughVoices.length; i += 1) {
      if (name.indexOf(roughVoices[i]) === 0) return true;
    }
    return false;
  }

  function pickVoice(hebrew) {
    var voices = speechSynthesis.getVoices();
    var prefix = hebrew ? "he" : "en";
    var pool = [];
    for (var i = 0; i < voices.length; i += 1) {
      var lang = voices[i].lang.toLowerCase().replace("_", "-");
      if (lang.indexOf(prefix) === 0 && !isRough(voices[i])) pool.push(voices[i]);
    }
    if (!pool.length) return null;
    var order = hebrew
      ? ["premium", "enhanced", "carmit"]
      : ["zoe", "samantha", "google uk english female", "kathy", "moira", "karen", "google us english"];
    function rank(voice) {
      var name = voiceName(voice);
      var place = order.length;
      for (var n = 0; n < order.length; n += 1) {
        if (name.indexOf(order[n]) !== -1) {
          place = n;
          break;
        }
      }
      if (name.indexOf("premium") !== -1) place -= 0.4;
      else if (name.indexOf("enhanced") !== -1) place -= 0.2;
      return place;
    }
    pool.sort(function (a, b) { return rank(a) - rank(b); });
    return pool[0];
  }

  function applyText() {
    var words = pack();
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "he" ? "rtl" : "ltr";
    document.documentElement.dataset.size = state.size;
    document.documentElement.dataset.level = state.level;
    document.documentElement.dataset.space = state.space;
    document.documentElement.dataset.contrast = state.contrast;
    document.title = words.title;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = words[node.getAttribute("data-i18n")];
      if (!value) return;
      var say = node.querySelector(":scope > .say");
      if (say) say.textContent = value;
      else node.textContent = value;
    });
    document.querySelectorAll(".listen-page").forEach(function (button) {
      button.setAttribute("aria-label", words.listen);
    });
    document.querySelectorAll(".contents-nav").forEach(function (nav) {
      nav.setAttribute("aria-label", words.contents);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      var value = words[node.getAttribute("data-i18n-alt")];
      if (value) node.alt = value;
    });
    document.querySelectorAll(".mark").forEach(function (mark) {
      mark.alt = words.alt;
    });
  }

  function syncControls() {
    document.querySelectorAll('input[name="lang"]').forEach(function (input) {
      input.checked = input.value === state.lang;
    });
    document.querySelectorAll('input[name="level"]').forEach(function (input) {
      input.checked = input.value === state.level + "-" + state.lang;
    });
    document.querySelectorAll('input[name="size"]').forEach(function (input) {
      input.checked = input.value === state.size;
    });
    document.querySelectorAll('input[name="space"]').forEach(function (input) {
      input.checked = input.value === state.space;
    });
    document.querySelectorAll('input[name="contrast"]').forEach(function (input) {
      input.checked = input.value === state.contrast;
    });
  }

  document.addEventListener("change", function (event) {
    var input = event.target;
    if (!(input instanceof HTMLInputElement)) return;
    if (input.name === "lang" && (input.value === "en" || input.value === "he")) {
      state.lang = input.value;
    } else if (input.name === "level") {
      var parts = input.value.split("-");
      if ((parts[0] === "simple" || parts[0] === "common") && (parts[1] === "en" || parts[1] === "he")) {
        state.level = parts[0];
        state.lang = parts[1];
      }
    } else if (input.name === "size" && (input.value === "sm" || input.value === "md" || input.value === "lg")) {
      state.size = input.value;
    } else if (input.name === "space" && (input.value === "tight" || input.value === "normal" || input.value === "roomy")) {
      state.space = input.value;
    } else if (input.name === "contrast" && (input.value === "paper" || input.value === "high")) {
      state.contrast = input.value;
    } else {
      return;
    }
    save();
    speakGen += 1;
    stopKeepAlive();
    if (window.speechSynthesis) speechSynthesis.cancel();
    var listen = document.querySelector(".listen-page");
    if (listen) listen.setAttribute("aria-pressed", "false");
    applyText();
    syncControls();
  });

  var tools = document.createElement("div");
  tools.className = "access-tools";
  var opener = document.createElement("button");
  opener.type = "button";
  opener.className = "access-open";
  opener.setAttribute("aria-haspopup", "dialog");
  opener.setAttribute("aria-controls", "access-dialog");
  opener.setAttribute("aria-expanded", "false");
  opener.innerHTML = '<span data-i18n="tabAccess">Accessibility</span>';
  var listen = document.createElement("button");
  listen.type = "button";
  listen.className = "listen-page";
  listen.setAttribute("aria-pressed", "false");
  listen.innerHTML = speakerIcon;
  listen.addEventListener("click", function () { speakPage(listen); });
  var contentsButton = document.createElement("button");
  contentsButton.type = "button";
  contentsButton.className = "contents-open";
  contentsButton.setAttribute("aria-expanded", "false");
  contentsButton.setAttribute("aria-controls", "contents-nav");
  contentsButton.innerHTML = '<span data-i18n="contents">Contents</span>';
  var contentsNav = document.createElement("nav");
  contentsNav.id = "contents-nav";
  contentsNav.className = "contents contents-nav";
  contentsNav.hidden = true;
  var contentsList = document.createElement("ol");
  var seenPages = markSeen();
  [
    ["01-wood.html", "page1"],
    ["02-forests.html", "page2"],
    ["03-steam.html", "page3"],
    ["04-changes.html", "page4"],
    ["05-coal.html", "page5"],
    ["06-story.html", "page6"],
    ["07-look.html", "page7"],
    ["08-compare.html", "page8"],
    ["09-uses.html", "page9"],
    ["10-kerosene.html", "page10"],
    ["11-formed.html", "page11"],
    ["12-steps.html", "page12"],
    ["13-oil-look.html", "page13"],
    ["15-gas.html", "page15"],
    ["16-heat.html", "page16"],
    ["17-harm.html", "page17"],
    ["18-summary.html", "page18"],
    ["19-king.html", "page19"],
    ["20-throne.html", "page20"]
  ].forEach(function (item) {
    var entry = document.createElement("li");
    var link = document.createElement("a");
    link.href = hrefFor(item[0]);
    link.setAttribute("data-file", item[0]);
    link.setAttribute("data-i18n", item[1]);
    var title = document.createElement("span");
    title.className = "say";
    title.textContent = STRINGS.en.simple[item[1]];
    link.appendChild(title);
    if (item[0] === currentFile()) link.setAttribute("aria-current", "page");
    if (seenPages[item[0]]) {
      link.classList.add("is-seen");
      var mark = document.createElement("span");
      mark.className = "seen";
      mark.innerHTML = '<span aria-hidden="true">✓</span><span class="sr" data-i18n="seen">Opened</span>';
      link.appendChild(mark);
    }
    link.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button === 1) return;
      var here = BOOK_PAGES.indexOf(currentFile());
      var there = BOOK_PAGES.indexOf(item[0]);
      if (there === here) {
        event.preventDefault();
        closeContents(true);
        return;
      }
      closeContents(false);
      startTurn(event, link, there > here ? "next" : "prev");
    });
    entry.appendChild(link);
    contentsList.appendChild(entry);
  });
  contentsNav.appendChild(contentsList);
  function closeContents(focusButton) {
    if (contentsNav.hidden) return;
    contentsNav.hidden = true;
    contentsButton.setAttribute("aria-expanded", "false");
    if (focusButton) contentsButton.focus();
  }
  function openContents() {
    contentsNav.hidden = false;
    contentsButton.setAttribute("aria-expanded", "true");
    var current = contentsNav.querySelector("[aria-current='page']") || contentsNav.querySelector("a");
    if (!current) return;
    current.focus({ preventScroll: true });
    var navRect = contentsNav.getBoundingClientRect();
    var linkRect = current.getBoundingClientRect();
    if (linkRect.top < navRect.top) contentsNav.scrollTop += linkRect.top - navRect.top;
    else if (linkRect.bottom > navRect.bottom) contentsNav.scrollTop += linkRect.bottom - navRect.bottom;
  }
  contentsButton.addEventListener("click", function () {
    if (contentsNav.hidden) openContents();
    else closeContents(false);
  });
  tools.appendChild(opener);
  tools.appendChild(listen);
  tools.appendChild(contentsButton);
  tools.appendChild(contentsNav);

  var dialog = document.createElement("dialog");
  dialog.id = "access-dialog";
  dialog.className = "access-pop";
  dialog.tabIndex = -1;
  dialog.innerHTML = [
    '<div class="access-bar">',
    '<h2 id="access-title" data-i18n="accessTitle">Accessibility</h2>',
    '<button type="button" class="access-close" data-i18n="close">Close</button>',
    "</div>",
    "<fieldset><legend data-i18n=\"language\">Language</legend><div class=\"choices\">",
    "<label class=\"choice\"><input type=\"radio\" name=\"lang\" value=\"en\" checked> English</label>",
    "<label class=\"choice\"><input type=\"radio\" name=\"lang\" value=\"he\"> עברית</label>",
    "</div></fieldset>",
    "<fieldset><legend data-i18n=\"difficulty\">Word level</legend><div class=\"choices\">",
    "<label class=\"choice\"><input type=\"radio\" name=\"level\" value=\"simple-en\" checked><span><span class=\"choice-main\">Simple English</span><span class=\"choice-sub\">אנגלית פשוטה</span></span></label>",
    "<label class=\"choice\"><input type=\"radio\" name=\"level\" value=\"simple-he\"><span><span class=\"choice-main\">עברית פשוטה</span><span class=\"choice-sub\">Simple Hebrew</span></span></label>",
    "<label class=\"choice\"><input type=\"radio\" name=\"level\" value=\"common-en\"><span><span class=\"choice-main\">Common English</span><span class=\"choice-sub\">אנגלית רגילה</span></span></label>",
    "<label class=\"choice\"><input type=\"radio\" name=\"level\" value=\"common-he\"><span><span class=\"choice-main\">עברית רגילה</span><span class=\"choice-sub\">Common Hebrew</span></span></label>",
    "</div></fieldset>",
    "<fieldset><legend data-i18n=\"font\">Letter size</legend><div class=\"choices\">",
    "<label class=\"choice\"><input type=\"radio\" name=\"size\" value=\"sm\"><span class=\"sample sm\" aria-hidden=\"true\">Aא</span> <span data-i18n=\"sizeSm\">Small</span></label>",
    "<label class=\"choice\"><input type=\"radio\" name=\"size\" value=\"md\" checked><span class=\"sample md\" aria-hidden=\"true\">Aא</span> <span data-i18n=\"sizeMd\">Medium</span></label>",
    "<label class=\"choice\"><input type=\"radio\" name=\"size\" value=\"lg\"><span class=\"sample lg\" aria-hidden=\"true\">Aא</span> <span data-i18n=\"sizeLg\">Large</span></label>",
    "</div></fieldset>",
    "<fieldset><legend data-i18n=\"space\">Line spacing</legend><div class=\"choices\">",
    "<label class=\"choice\"><input type=\"radio\" name=\"space\" value=\"tight\"><span data-i18n=\"spaceTight\">Tight</span></label>",
    "<label class=\"choice\"><input type=\"radio\" name=\"space\" value=\"normal\" checked><span data-i18n=\"spaceNorm\">Normal</span></label>",
    "<label class=\"choice\"><input type=\"radio\" name=\"space\" value=\"roomy\"><span data-i18n=\"spaceRoomy\">Roomy</span></label>",
    "</div></fieldset>",
    "<fieldset><legend data-i18n=\"contrast\">Paper</legend><div class=\"choices\">",
    "<label class=\"choice\"><input type=\"radio\" name=\"contrast\" value=\"paper\" checked><span data-i18n=\"contrastPaper\">Usual</span></label>",
    "<label class=\"choice\"><input type=\"radio\" name=\"contrast\" value=\"high\"><span data-i18n=\"contrastHigh\">Higher contrast</span></label>",
    "</div></fieldset>"
  ].join("");
  document.body.appendChild(tools);
  document.body.appendChild(dialog);

  opener.addEventListener("click", function () {
    closeContents(false);
    dialog.showModal();
    opener.setAttribute("aria-expanded", "true");
  });
  document.addEventListener("click", function (event) {
    if (contentsNav.hidden) return;
    if (contentsButton.contains(event.target) || contentsNav.contains(event.target)) return;
    closeContents(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape" || contentsNav.hidden || dialog.open) return;
    event.preventDefault();
    closeContents(true);
  });
  dialog.querySelector(".access-close").addEventListener("click", function () {
    dialog.close();
  });
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", function () {
    opener.setAttribute("aria-expanded", "false");
    opener.focus();
  });

  function mountNotes() {
    document.querySelectorAll("[data-note]").forEach(function (box) {
      var key = "woodToGas.note." + box.getAttribute("data-note");
      try {
        box.value = localStorage.getItem(key) || "";
      } catch (error) {
        return;
      }
      box.addEventListener("input", function () {
        try {
          localStorage.setItem(key, box.value);
        } catch (error) {
          /* The writing still stays on the page for this visit. */
        }
      });
    });
    document.querySelectorAll("[data-clear]").forEach(function (button) {
      button.addEventListener("click", function () {
        var name = button.getAttribute("data-clear");
        var box = document.querySelector('[data-note="' + name + '"]');
        if (box) box.value = "";
        try {
          localStorage.removeItem("woodToGas.note." + name);
        } catch (error) {
          /* The line is already empty on the page. */
        }
      });
    });
  }

  mountBack();
  mountTurns();
  mountNotes();
  applyText();
  syncControls();
  document.documentElement.classList.remove("booting");
})();

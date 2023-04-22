// add drawings
// improve design
// add basic words
// add max number of try
// add difficulty option
// add themes??
// add clues

var words = {
  w3: ["car", "bus", "red", "fun", "arm", "leg", "hat", "dog", "cat", "pie", "egg", "cow", "pen", "key", "mug", "tea", "air", "ant", "ape", "ash", "add", "art", "awn", "bat", "bee", "bug", "bad", "bet", "box", "big", "bag", "bay", "bed", "beg", "bet", "bra", "bun", "cap", "car", "cut", "cup", "cry", "dot", "dye", "die", "dip", "ear", "ewe", "egg", "eel", "era", "fan", "fry", "fax", "for", "flu", "fur", "gel", "gym", "god", "ham", "hen", "hot", "hit", "ice", "ink", "inn", "jam", "jar", "joy", "lap", "law", "let", "mat", "man", "mix", "net", "nib", "now", "not", "oak", "odd", "oil", "ode", "pan", "pet", "rag", "red", "row", "set", "sun", "six", "tea", "toe", "tip", "urn", "van", "vet", "web", "wax", "why", "yam", "yak", "yet", "zip", "zoo"],
  w4: ["boat", "ball", "blue", "rose", "hero", "city", "shoe", "hand", "sock", "head", "back", "foot", "bear", "beer", "duck", "lion", "wine", "milk", "meat", "rice", "kiwi", "peer", "salt", "fish", "rock", "bike", "book", "fire", "tree", "acid", "acne", "anti", "away", "beat", "beef", "blur", "bomb", "cage", "camp", "clue", "cube", "curl", "dark", "dead", "dial", "demo", "disk", "dorm", "dose", "dumb", "dump", "duty", "eyes", "exam", "evil", "epic", "fate", "fear", "film", "find", "flag", "flea", "fund", "gain", "game", "gift", "girl", "gold", "golf", "grow", "hail", "heal", "help", "hide", "hill", "hike", "high", "hunt", "join", "jute", "junk", "jump", "kick", "kite", "knit", "knob", "kiss", "lamp", "land", "loaf", "lump", "math", "mend", "mint", "mode", "mute", "myth", "nest", "next", "news", "noon", "nerd", "oats", "oven", "oval", "open", "pest", "pick", "pale", "palm", "plot", "plug", "rank", "read", "real", "rate", "rain", "risk", "rise", "seat", "salt", "ship", "side", "soil", "stem", "sure", "swap", "tree", "toad", "tape", "tone", "tyre", "urge", "vale", "vary", "vote", "wage", "warm", "wilt", "womb", "yawn", "yeti", "zero", "zoom", "zinc"],
  w5: ["green", "black", "white", "house", "world", "space", "earth", "night", "shirt", "boxer", "scarf", "glove", "sheep", "snake", "horse", "water", "juice", "pasta", "apple", "mango", "melon", "salad", "candy", "bread", "ruler", "phone", "paper", "plane", "train", "mouse", "chair", "align", "actor", "agony", "clean", "cloak", "curve", "drain", "drape", "dwell", "eager", "erect", "erase", "faith", "fight", "flirt", "genie", "goose", "grant", "graph", "haiku", "heavy", "hello", "humid", "humor", "ideal", "index", "input", "judge", "joker", "jeans", "knife", "knock", "labor", "level", "latte", "leach", "lyric", "lodge", "major", "maths", "music", "myths", "night", "novel", "noble", "nudes", "often", "organ", "ozone", "panda", "paper", "peach", "phase", "plans", "power", "queen", "quick", "quill", "ramen", "rants", "react", "saint", "sauce", "skill", "spike", "small", "story", "swags", "tease", "towel", "tower", "truck", "twice", "veins", "vital", "verge", "watch", "water", "wheel", "widow", "xylem", "yatch", "yours", "zebra"],
  w6: ["yellow", "pencil", "finger", "street", "jacket", "rabbit", "monkey", "cookie", "banana", "potato", "orange", "carrot", "tomato", "cheese", "pepper", "letter", "cisors", "wallet", "bottle", "coffee", "laptop", "screen", "garden", "toilet", "behalf", "behind", "belief", "belong", "berlin", "better", "beyond", "bishop", "border", "bottle", "bottom", "bought", "branch", "breath", "bridge", "bright", "broken", "budget", "burden", "bureau", "button", "camera", "cancer", "cannot", "carbon", "career", "castle", "casual", "caught", "center", "center", "chance", "change", "charge", "choice", "choose", "chosen", "church", "circle", "client", "closed", "closer", "coffee", "column", "combat", "coming", "common", "comply", "copper", "corner", "costly", "county", "couple", "course", "covers", "create", "credit", "crisis", "custom", "damage", "danger", "dealer", "debate", "decade", "decide", "defeat", "defend", "define", "degree", "demand", "depend", "deputy", "desert", "design", "desire", "detail", "detect", "device", "differ", "dinner", "direct", "doctor", "dollar", "domain", "double", "driven", "driver", "during", "easily", "eating", "editor", "effect", "effort", "eighth", "either", "eleven", "emerge", "empire", "employ", "enable", "ending", "energy", "engage", "engine", "enough", "ensure", "entire", "entity", "equity", "escape", "estate", "ethnic", "exceed", "except", "excess", "expand", "expect", "expert", "export", "extend", "extent", "fabric", "facing", "factor", "failed", "fairly", "fallen", "family", "famous", "father", "fellow", "female", "figure", "filing", "finger", "finish", "fiscal", "flight", "flying", "follow", "forced", "forest", "forget", "formal", "format", "former", "foster", "fought", "fourth", "French", "friend", "future", "garden", "gather", "gender", "german", "global", "golden", "ground", "growth", "guilty", "handed", "handle", "happen", "hardly", "headed", "health", "height", "hidden", "holder", "honest", "impact", "import", "income", "indeed", "injury", "inside", "intend", "intent", "invest", "island", "itself", "jersey", "joseph", "junior", "killed", "labour", "latest", "latter", "launch", "lawyer", "leader", "league", "leaves", "legacy", "length", "lesson", "letter", "lights", "likely", "linked", "liquid", "listen", "little", "living", "losing", "lucent", "luxury", "mainly", "making", "manage", "manner", "manual", "margin", "marine", "marked", "market", "martin", "master", "matter", "mature", "medium", "member", "memory", "mental", "merely", "merger", "method", "middle", "miller", "mining", "minute", "mirror", "mobile", "modern", "modest", "module", "moment", "morris", "mostly", "mother", "motion", "moving", "murder", "museum", "mutual", "myself", "narrow", "nation", "native", "nature", "nearby", "nearly", "nights", "nobody", "normal", "notice", "notion", "number", "object", "obtain", "office", "offset", "online", "option", "orange", "origin", "output", "oxford", "packed", "palace", "parent", "partly", "patent", "people", "period", "permit", "person", "phrase", "picked", "planet", "player", "please", "plenty", "pocket", "police", "policy", "prefer", "pretty", "prince", "prison", "profit", "proper", "proven", "public", "pursue", "raised", "random", "rarely", "rather", "rating", "reader", "really", "reason", "recall", "recent", "record", "reduce", "reform", "regard", "regime", "region", "relate", "relief", "remain", "remote", "remove", "repair", "repeat", "replay", "report", "rescue", "resort", "result", "retail", "retain", "return", "reveal", "review", "reward", "riding", "rising", "robust", "ruling", "safety", "salary", "sample", "saving", "saying", "scheme", "school", "screen", "search", "season", "second", "secret", "sector", "secure", "seeing", "select", "seller", "senior", "series", "server", "settle", "severe", "sexual", "should", "signal", "signed", "silent", "silver", "simple", "simply", "single", "sister", "slight", "smooth", "social", "solely", "sought", "source", "soviet", "speech", "spirit", "spoken", "spread", "spring", "square", "stable", "status", "steady", "stolen", "strain", "stream", "street", "stress", "strict", "strike", "string", "strong", "struck", "studio", "submit", "sudden", "suffer", "summer", "summit", "supply", "surely", "survey", "switch", "symbol", "system", "taking", "talent", "target", "taught", "tenant", "tender", "tennis", "thanks", "theory", "thirty", "though", "threat", "thrown", "ticket", "timely", "timing", "tissue", "toward", "travel", "treaty", "trying", "twelve", "twenty", "unable", "unique", "united", "unless", "unlike", "update", "useful", "valley", "varied", "vendor", "versus", "victim", "vision", "visual", "volume", "walker", "wealth", "weekly", "weight", "wholly", "window", "winner", "winter", "within", "wonder", "worker", "wright", "writer", "yellow"],
  w7: ["morning", "sweater", "coconut", "ketchup", "mostard", "chicken", "country", "kitchen", "ability", "absence", "academy", "account", "accused", "achieve", "acquire", "address", "advance", "adverse", "advised", "adviser", "against", "airline", "airport", "alcohol", "alleged", "already", "analyst", "ancient", "another", "anxiety", "anxious", "anybody", "applied", "arrange", "arrival", "article", "assault", "assumed", "assured", "attempt", "attract", "auction", "average", "backing", "balance", "banking", "barrier", "battery", "bearing", "beating", "because", "bedroom", "believe", "beneath", "benefit", "besides", "between", "billion", "binding", "brother", "brought", "burning", "cabinet", "caliber", "calling", "capable", "capital", "captain", "caption", "capture", "careful", "carrier", "caution", "ceiling", "central", "centric", "century", "certain", "chamber", "channel", "chapter", "charity", "charlie", "charter", "checked", "chicken", "chronic", "circuit", "classes", "classic", "climate", "closing", "closure", "clothes", "collect", "college", "combine", "comfort", "command", "comment", "compact", "company", "compare", "compete", "complex", "concept", "concern", "concert", "conduct", "confirm", "connect", "consent", "consist", "contact", "contain", "content", "contest", "context", "control", "convert", "correct", "council", "counsel", "counter", "country", "crucial", "crystal", "culture", "current", "cutting", "dealing", "decided", "decline", "default", "defence", "deficit", "deliver", "density", "deposit", "desktop", "despite", "destroy", "develop", "devoted", "diamond", "digital", "discuss", "disease", "display", "dispute", "distant", "diverse", "divided", "drawing", "driving", "dynamic", "eastern", "economy", "edition", "elderly", "element", "engaged", "enhance", "essence", "evening", "evident", "exactly", "examine", "example", "excited", "exclude", "exhibit", "expense", "explain", "explore", "express", "extreme", "factory", "faculty", "failing", "failure", "fashion", "feature", "federal", "feeling", "fiction", "fifteen", "filling", "finance", "finding", "fishing", "fitness", "foreign", "forever", "formula", "fortune", "forward", "founder", "freedom", "further", "gallery", "gateway", "general", "genetic", "genuine", "gigabit", "greater", "hanging", "heading", "healthy", "hearing", "heavily", "helpful", "helping", "herself", "highway", "himself", "history", "holding", "holiday", "housing", "however", "hundred", "husband", "illegal", "illness", "imagine", "imaging", "improve", "include", "initial", "inquiry", "insight", "install", "instant", "instead", "intense", "interim", "involve", "jointly", "journal", "journey", "justice", "justify", "keeping", "killing", "kingdom", "kitchen", "knowing", "landing", "largely", "lasting", "leading", "learned", "leisure", "liberal", "liberty", "library", "license", "limited", "listing", "logical", "loyalty", "machine", "manager", "married", "massive", "maximum", "meaning", "measure", "medical", "meeting", "mention", "message", "million", "mineral", "minimal", "minimum", "missing", "mission", "mistake", "mixture", "monitor", "monthly", "morning", "musical", "mystery", "natural", "neither", "nervous", "network", "neutral", "notable", "nothing", "nowhere", "nuclear", "nursing", "obvious", "offense", "officer", "ongoing", "opening", "operate", "opinion", "optical", "organic", "outcome", "outdoor", "outlook", "outside", "overall", "pacific", "package", "painted", "parking", "partial", "partner", "passage", "passing", "passion", "passive", "patient", "pattern", "payable", "payment", "penalty", "pending", "pension", "percent", "perfect", "perform", "perhaps", "phoenix", "picking", "picture", "pioneer", "plastic", "pointed", "popular", "portion", "poverty", "precise", "predict", "premier", "premium", "prepare", "present", "prevent", "primary", "printer", "privacy", "private", "problem", "proceed", "process", "produce", "product", "profile", "program", "project", "promise", "promote", "protect", "protein", "protest", "provide", "publish", "purpose", "pushing", "qualify", "quality", "quarter", "radical", "railway", "readily", "Reading", "reality", "realize", "receipt", "receive", "recover", "reflect", "regular", "related", "release", "remains", "removal", "removed", "replace", "request", "require", "reserve", "resolve", "respect", "respond", "restore", "retired", "revenue", "reverse", "rollout", "routine", "running", "satisfy", "science", "section", "segment", "serious", "service", "serving", "session", "setting", "seventh", "several", "shortly", "showing", "silence", "silicon", "similar", "sitting", "sixteen", "skilled", "smoking", "society", "somehow", "someone", "speaker", "special", "species", "sponsor", "station", "storage", "strange", "stretch", "student", "studied", "subject", "succeed", "success", "suggest", "summary", "support", "suppose", "supreme", "surface", "surgery", "surplus", "survive", "suspect", "sustain", "teacher", "telecom", "telling", "tension", "theatre", "therapy", "thereby", "thought", "through", "tonight", "totally", "touched", "towards", "traffic", "trouble", "turning", "typical", "uniform", "unknown", "unusual", "upgrade", "upscale", "utility", "variety", "various", "vehicle", "venture", "version", "veteran", "victory", "viewing", "village", "violent", "virtual", "visible", "waiting", "walking", "wanting", "warning", "warrant", "wearing", "weather", "webcast", "website", "wedding", "weekend", "welcome", "welfare", "western", "whereas", "whereby", "whether", "willing", "winning", "without", "witness", "working", "writing", "written"],
  w8: ["elephant", "zucchini", "eggplant", "computer", "keyboard", "bathroom", "basement", "breaking", "breeding", "building", "bulletin", "business", "calendar", "campaign", "capacity", "casualty", "catching", "category", "Catholic", "cautious", "cellular", "ceremony", "chairman", "champion", "chemical", "children", "circular", "civilian", "clearing", "clinical", "clothing", "collapse", "colonial", "colorful", "commence", "commerce", "complain", "complete", "composed", "compound", "comprise", "computer", "conclude", "concrete", "conflict", "confused", "congress", "consider", "constant", "consumer", "continue", "contract", "contrary", "contrast", "convince", "corridor", "coverage", "covering", "creation", "creative", "criminal", "critical", "crossing", "cultural", "currency", "customer", "database", "daughter", "daylight", "deadline", "deciding", "decision", "decrease", "deferred", "definite", "delicate", "delivery", "describe", "designer", "detailed", "diabetes", "dialogue", "diameter", "directly", "director", "disabled", "disaster", "disclose", "discount", "discover", "disorder", "disposal", "distance", "distinct", "district", "dividend", "division", "doctrine", "document", "domestic", "dominant", "dominate", "doubtful", "dramatic", "dressing", "dropping", "duration", "dynamics", "earnings", "economic", "educated", "efficacy", "eighteen", "election", "electric", "eligible", "emerging", "emphasis", "employee", "endeavor", "engaging", "engineer", "enormous", "entirely", "entrance", "envelope", "equality", "equation", "estimate", "evaluate", "eventual", "everyday", "everyone", "evidence", "exchange", "exciting", "exercise", "explicit", "exposure", "extended", "external", "facility", "familiar", "featured", "feedback", "festival", "finished", "firewall", "flagship", "flexible", "floating", "football", "foothill", "forecast", "foremost", "formerly", "fourteen", "fraction", "franklin", "frequent", "friendly", "frontier", "function", "generate", "generous", "genomics", "goodwill", "governor", "graduate", "graphics", "grateful", "guardian", "guidance", "handling", "hardware", "heritage", "highland", "historic", "homeless", "homepage", "hospital", "humanity", "identify", "identity", "ideology", "imperial", "incident", "included", "increase", "indicate", "indirect", "industry", "informal", "informed", "inherent", "initiate", "innocent", "inspired", "instance", "integral", "intended", "interact", "interest", "interior", "internal", "interval", "intimate", "intranet", "invasion", "involved", "isolated", "judgment", "judicial", "junction", "keyboard", "landlord", "language", "laughter", "learning", "leverage", "lifetime", "lighting", "likewise", "limiting", "literary", "location", "magazine", "magnetic", "maintain", "majority", "marginal", "marriage", "material", "maturity", "maximize", "meantime", "measured", "medicine", "medieval", "memorial", "merchant", "midnight", "military", "minimize", "minister", "ministry", "minority", "mobility", "modeling", "moderate", "momentum", "monetary", "moreover", "mortgage", "mountain", "mounting", "movement", "multiple", "national", "negative", "nineteen", "northern", "notebook", "numerous", "observer", "occasion", "offering", "official", "offshore", "operator", "opponent", "opposite", "optimism", "optional", "ordinary", "organize", "original", "overcome", "overhead", "overseas", "overview", "painting", "parallel", "parental", "patented", "patience", "peaceful", "periodic", "personal", "persuade", "petition", "physical", "pipeline", "platform", "pleasant", "pleasure", "politics", "portable", "portrait", "position", "positive", "possible", "powerful", "practice", "precious", "pregnant", "presence", "preserve", "pressing", "pressure", "previous", "princess", "printing", "priority", "probable", "probably", "producer", "profound", "progress", "property", "proposal", "prospect", "protocol", "provided", "provider", "province", "publicly", "purchase", "pursuant", "quantity", "question", "rational", "reaction", "received", "receiver", "recovery", "regional", "register", "relation", "relative", "relevant", "reliable", "reliance", "religion", "remember", "renowned", "repeated", "reporter", "republic", "required", "research", "reserved", "resident", "resigned", "resource", "response", "restrict", "revision", "rigorous", "romantic", "sampling", "scenario", "schedule", "scrutiny", "seasonal", "secondly", "security", "sensible", "sentence", "separate", "sequence", "sergeant", "shipping", "shortage", "shoulder", "simplify", "situated", "slightly", "software", "solution", "somebody", "somewhat", "southern", "speaking", "specific", "spectrum", "sporting", "standard", "standing", "standout", "sterling", "straight", "strategy", "strength", "striking", "struggle", "stunning", "suburban", "suitable", "superior", "supposed", "surgical", "surprise", "survival", "sweeping", "swimming", "symbolic", "sympathy", "syndrome", "tactical", "tailored", "takeover", "tangible", "taxation", "taxpayer", "teaching", "tendency", "terminal", "terrible", "thinking", "thirteen", "thorough", "thousand", "together", "tomorrow", "touching", "tracking", "training", "transfer", "traveled", "treasury", "triangle", "tropical", "turnover", "ultimate", "umbrella", "universe", "unlawful", "unlikely", "valuable", "variable", "vertical", "victoria", "violence", "volatile", "warranty", "weakness", "weighted", "whatever", "whenever", "wherever", "wildlife", "wireless", "withdraw", "woodland", "workshop", "yourself"],
  w9: ["aardvarks", "alligator", "boulevard", "hamburger", "turquoise", "telephone", "furniture", "checklist", "container", "professor", "frequency", "spaceship", "scarecrow", "deodorant", "cranberry"],
  w10: ["department", "watermelon", "strawberry", "skateboard", "rainforest", "helicopter", "percentage", "restaurant", "microscope", "vegetables", "university", "volleyball", "toothbrush", "laboratory", "calculator", "wheelchair", "chandelier", "blackberry", "binoculars"],
  all: []
};

words.all = words.w3.concat(words.w4, words.w5, words.w6, words.w7, words.w8, words.w9, words.w10);

getRandomWord();

function getRandomWord() {
  var randomWord = words.all[Math.floor(Math.random() * words.all.length)];
  $(".word").html("");
  console.log(randomWord);
  var randomWordSplitted = randomWord.split("");
  randomWordSplitted.forEach(function(x){
    $(".word").append("<span class='"+x+"'>"+x+"</span>");
  });

  $(".alphabet span").on("click", function() {
    var letter = $(this).text();
    if(checkLetter(letter, randomWordSplitted)) {
      $(this).addClass("green");
      $("."+letter).addClass("found");

      if (checkWin(randomWordSplitted.length)) {
        $(".alphabet").fadeOut();
        // setTimeout(function(){
        //   $(".word").hide(400);
        //   gameReset();
        // }, 800); 
      }
    }
    else {
      $(this).addClass("red");
    }
  });
}

$("button").on("click", function() {
  gameReset();
});

function checkWin(length) {
  if($(".found").length === length) {
    return true;
  }
}

function checkLetter(letter, arr) {
  if(arr.indexOf(letter) !== -1) {
    return true;
  }
  else {
    return false;
  }
}

function gameReset() {  
  $(".alphabet span").off().removeClass();
  $(".word span").removeClass("found");
  $(".alphabet, .word").fadeIn();
  getRandomWord();
}
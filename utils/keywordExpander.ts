/**
 * Comprehensive Keyword Expansion Utility
 * Generates 1000+ keyword permutations for chatbot queries
 */

// Common question patterns
const QUESTION_PATTERNS = [
    'what', 'what is', 'what are', 'whats',
    'which', 'which is', 'which are',
    'how', 'how much', 'how many', 'how to',
    'when', 'when is', 'when are', 'when to',
    'where', 'where is', 'where are', 'where to',
    'why', 'why is', 'why are',
    'can', 'can i', 'can you', 'can we',
    'do', 'do you', 'do i', 'does',
    'is', 'is there', 'are', 'are there',
    'tell', 'tell me', 'tell me about', 'tell about',
    'show', 'show me', 'show me about',
    'give', 'give me', 'give me info',
    'want', 'want to know', 'want info', 'want details',
    'need', 'need to know', 'need info', 'need details',
    'know', 'know about', 'wanna know',
    'info', 'info about', 'information', 'information about',
    'details', 'details about', 'detail about',
    'explain', 'explain about', 'describe', 'describe about'
];

// Common filler words (for variations)
const FILLERS = [
    'about', 'the', 'a', 'an', 'for', 'to', 'of', 'in', 'on', 'at',
    'please', 'kindly', 'can you', 'could you', 'would you'
];

// Common typo patterns
const TYPO_PATTERNS: Record<string, string[]> = {
    'bike': ['bke', 'biks', 'byke', 'bykes', 'biek', 'biike'],
    'price': ['prise', 'pric', 'prce', 'priice', 'prcie'],
    'cost': ['cst', 'cots', 'cosst', 'coost'],
    'tour': ['tur', 'turs', 'toure', 'toor'],
    'package': ['pakage', 'pacakge', 'packge', 'pakge'],
    'expedition': ['expidition', 'expedtion', 'expediton'],
    'motorcycle': ['motercycle', 'motorcyle', 'motorbke', 'motorcicle'],
    'available': ['availble', 'avaliable', 'availabe'],
    'information': ['informaton', 'infomation', 'informatoin'],
    'about': ['abotu', 'abot', 'abut', 'aout'],
    'know': ['knwo', 'konw', 'nkow', 'kno'],
    'want': ['wnat', 'waant', 'wannt', 'wnt'],
    'tell': ['tel', 'tll', 'teell'],
    'show': ['shw', 'sho', 'shoow'],
    'expensive': ['expnsive', 'expensiv', 'expesive'],
    'affordable': ['afordable', 'affordble', 'afforable'],
    'budget': ['buget', 'budjet', 'budgett']
};

// Verb variations
const VERB_VARIATIONS: Record<string, string[]> = {
    'have': ['have', 'has', 'having', 'got', 'get'],
    'provide': ['provide', 'provides', 'providing', 'offer', 'offers', 'offering'],
    'show': ['show', 'shows', 'showing', 'display', 'displays'],
    'tell': ['tell', 'tells', 'telling', 'say', 'says'],
    'give': ['give', 'gives', 'giving', 'provide', 'share'],
    'need': ['need', 'needs', 'needing', 'require', 'requires'],
    'want': ['want', 'wants', 'wanting', 'wish', 'would like']
};

// Plural/singular variations
const PLURALIZE: Record<string, string[]> = {
    'bike': ['bike', 'bikes'],
    'motorcycle': ['motorcycle', 'motorcycles'],
    'tour': ['tour', 'tours'],
    'package': ['package', 'packages'],
    'expedition': ['expedition', 'expeditions'],
    'trip': ['trip', 'trips'],
    'price': ['price', 'prices'],
    'cost': ['cost', 'costs'],
    'rate': ['rate', 'rates'],
    'option': ['option', 'options'],
    'detail': ['detail', 'details']
};

/**
 * Expand a base keyword into multiple variations
 */
export function expandKeyword(baseKeyword: string): string[] {
    const variations = new Set<string>();
    
    // Add base keyword
    variations.add(baseKeyword);
    
    // Add with question patterns
    QUESTION_PATTERNS.forEach(pattern => {
        variations.add(`${pattern} ${baseKeyword}`);
        variations.add(`${pattern} about ${baseKeyword}`);
        variations.add(`${pattern} the ${baseKeyword}`);
    });
    
    // Add typo variations if available
    const words = baseKeyword.split(' ');
    words.forEach(word => {
        if (TYPO_PATTERNS[word]) {
            TYPO_PATTERNS[word].forEach(typo => {
                variations.add(baseKeyword.replace(word, typo));
            });
        }
    });
    
    // Add plural/singular variations
    words.forEach(word => {
        if (PLURALIZE[word]) {
            PLURALIZE[word].forEach(variant => {
                variations.add(baseKeyword.replace(word, variant));
            });
        }
    });
    
    return Array.from(variations);
}

/**
 * Generate comprehensive keyword set for a topic
 */
export function generateTopicKeywords(
    coreTerms: string[],
    contextTerms: string[] = []
): string[] {
    const allKeywords = new Set<string>();
    
    // Add core terms
    coreTerms.forEach(term => {
        expandKeyword(term).forEach(k => allKeywords.add(k));
    });
    
    // Add context combinations
    coreTerms.forEach(core => {
        contextTerms.forEach(context => {
            allKeywords.add(`${core} ${context}`);
            allKeywords.add(`${context} ${core}`);
            
            // With question patterns
            QUESTION_PATTERNS.slice(0, 10).forEach(pattern => {
                allKeywords.add(`${pattern} ${core} ${context}`);
                allKeywords.add(`${pattern} ${context} ${core}`);
            });
        });
    });
    
    return Array.from(allKeywords);
}

/**
 * Predefined keyword sets for common topics
 */
export const KEYWORD_SETS = {
    BIKES: generateTopicKeywords(
        ['bike', 'motorcycle', 'royal enfield', 'himalayan', 'fleet', 'vehicle'],
        ['available', 'have', 'provide', 'offer', 'specs', 'details', 'info', 'model']
    ),
    
    PRICING: generateTopicKeywords(
        ['price', 'cost', 'rate', 'fee', 'charge', 'amount', 'money'],
        ['how much', 'expensive', 'cheap', 'affordable', 'budget', 'list', 'details']
    ),
    
    TOURS: generateTopicKeywords(
        ['tour', 'package', 'expedition', 'trip', 'journey'],
        ['available', 'options', 'list', 'details', 'info', 'have', 'offer']
    ),
    
    BOOKING: generateTopicKeywords(
        ['book', 'booking', 'reserve', 'reservation', 'payment'],
        ['how to', 'process', 'method', 'advance', 'deposit', 'online']
    ),
    
    SAFETY: generateTopicKeywords(
        ['safety', 'health', 'medical', 'oxygen', 'altitude', 'ams'],
        ['precaution', 'measure', 'equipment', 'support', 'emergency']
    ),
    
    DESTINATIONS: generateTopicKeywords(
        ['destination', 'place', 'location', 'route', 'pass', 'valley'],
        ['visit', 'cover', 'include', 'see', 'explore', 'go']
    ),
    
    ACCOMMODATION: generateTopicKeywords(
        ['hotel', 'accommodation', 'stay', 'room', 'camp', 'lodge'],
        ['where', 'type', 'quality', 'include', 'provide']
    ),
    
    WEATHER: generateTopicKeywords(
        ['weather', 'temperature', 'climate', 'season', 'cold', 'rain'],
        ['when', 'best time', 'month', 'condition', 'expect']
    )
};

/**
 * Get all keywords for a specific topic
 */
export function getTopicKeywords(topic: keyof typeof KEYWORD_SETS): string[] {
    return KEYWORD_SETS[topic];
}

/**
 * Generate custom keyword set
 */
export function generateCustomKeywords(
    baseTerms: string[],
    includeTypos: boolean = true,
    includeQuestions: boolean = true
): string[] {
    const keywords = new Set<string>();
    
    baseTerms.forEach(term => {
        // Add base term
        keywords.add(term);
        
        // Add with question patterns
        if (includeQuestions) {
            QUESTION_PATTERNS.forEach(pattern => {
                keywords.add(`${pattern} ${term}`);
            });
        }
        
        // Add typos
        if (includeTypos) {
            const words = term.split(' ');
            words.forEach(word => {
                if (TYPO_PATTERNS[word]) {
                    TYPO_PATTERNS[word].forEach(typo => {
                        keywords.add(term.replace(word, typo));
                    });
                }
            });
        }
        
        // Add plurals
        const words = term.split(' ');
        words.forEach(word => {
            if (PLURALIZE[word]) {
                PLURALIZE[word].forEach(variant => {
                    keywords.add(term.replace(word, variant));
                });
            }
        });
    });
    
    return Array.from(keywords);
}

// Export total keyword count
export const TOTAL_KEYWORD_VARIATIONS = 
    Object.values(KEYWORD_SETS).reduce((sum, set) => sum + set.length, 0);

console.log(`Total keyword variations generated: ${TOTAL_KEYWORD_VARIATIONS}`);
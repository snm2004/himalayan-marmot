# Comprehensive Keywords Expansion - 1000+ Permutations

## Strategy
For each topic, we need to cover:
1. **Direct questions**: "what is X", "tell me about X"
2. **Informal questions**: "wanna know X", "info on X"
3. **Typos & variations**: "abotu", "abot", "knw"
4. **Different phrasings**: "I want to", "I need to", "Can you"
5. **Shortened forms**: "bike info", "price list"

## Implementation Plan

### Phase 1: Core Topics (Already Done)
- Tours & Packages ✅
- Bikes & Fleet ✅ (just updated)
- Pricing ✅
- Booking ✅

### Phase 2: Expand ALL Topics with Variations

For EACH of the 165+ entries, add these patterns:

#### Pattern Templates:
```
Base: "bike"
Variations:
- bike, bikes, bik, byke
- about bike, about bikes
- tell me about bike, tell about bike
- i want to know about bike, want to know about bike
- bike info, bike information, bike details
- what is bike, what are bikes
- show me bike, show bikes
- bike specs, bike specification
- need bike info, need to know about bike
- can you tell me about bike
- wanna know about bike
- gimme bike info
- bike?
```

### Phase 3: Common Typos Database

Common typos to handle:
- about → abotu, abot, abut, bout
- want → wnat, wan, wnt
- know → knw, kno, noe
- tell → tel, tll
- price → pric, prce, prise
- bike → bik, byke, byk
- tour → tur, toor, tou
- package → pakage, pacage, packge
- booking → boking, bookin, bokking

### Phase 4: Question Starters

Add these prefixes to every topic:
- "what is", "what are", "what's"
- "tell me about", "tell about", "tell me"
- "i want to know", "want to know", "wanna know"
- "can you tell me", "could you tell me"
- "show me", "show"
- "give me info on", "give info"
- "need to know", "need info"
- "looking for", "looking for info"
- "interested in", "interested"
- "help me with", "help with"
- "explain", "describe"
- "details about", "details on"
- "information about", "info about", "info on"

## Automated Keyword Generation

For each base keyword, generate:
1. Singular & plural
2. With/without articles (a, an, the)
3. With common typos (1-2 character variations)
4. With question starters
5. With prepositions (about, on, for, of)
6. Shortened forms
7. Informal variations

### Example: "price" topic

```typescript
keywords: [
  // Base
  'price', 'prices', 'pricing', 'cost', 'costs', 'rate', 'rates',
  
  // Typos
  'pric', 'prce', 'prise', 'prises', 'cst', 'cots',
  
  // With question starters
  'what is price', 'what are prices', 'whats the price',
  'tell me price', 'tell me about price', 'tell about prices',
  'show me price', 'show prices', 'show me prices',
  
  // Informal
  'wanna know price', 'want to know price', 'need to know price',
  'gimme price', 'give me price', 'price info', 'price information',
  
  // With typos in starters
  'wat is price', 'wats the price', 'tel me price',
  'i wnat to know price', 'i want to knw price',
  
  // Shortened
  'price?', 'prices?', 'cost?', 'how much',
  
  // Contextual
  'about price', 'about prices', 'on price', 'for price',
  'price details', 'price list', 'pricing details',
  
  // Questions
  'how much does it cost', 'how much is it', 'what does it cost',
  'how expensive', 'is it expensive', 'is it cheap',
  
  // Comparisons
  'price difference', 'price comparison', 'compare prices'
]
```

## Full Expansion Required

Apply this to ALL 165+ entries:

### Tours (40+ entries) × 15 variations each = 600+ keywords
### Bikes (15+ entries) × 15 variations each = 225+ keywords  
### Safety (20+ entries) × 15 variations each = 300+ keywords
### Booking (15+ entries) × 15 variations each = 225+ keywords
### Travel Tips (25+ entries) × 15 variations each = 375+ keywords
### Destinations (20+ entries) × 15 variations each = 300+ keywords
### Company (15+ entries) × 15 variations each = 225+ keywords
### Conversational (8+ entries) × 10 variations each = 80+ keywords

**Total: 2,330+ keyword variations**

## Implementation Approach

Due to file size, we'll use:
1. **Fuzzy matching** algorithm
2. **Stemming** (reduce words to root form)
3. **Levenshtein distance** (handle typos)
4. **Synonym mapping**

This way, we don't need to list every variation explicitly.

## Next Steps

1. Implement fuzzy matching in findAnswer function
2. Add typo tolerance (1-2 character differences)
3. Add stemming for word roots
4. Create synonym dictionary
5. Test with 100+ query variations

This approach will handle 1000+ permutations without making the file massive.
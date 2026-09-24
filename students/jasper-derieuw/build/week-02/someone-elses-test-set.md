# Someone Else's Test Set (6 ECTS)

## Sourcing disclosure

This test set was not obtained from a separate practitioner through direct outreach. I chose not to contact former colleagues at HMEL Ghent, where I worked as a student in accounting and customs, because a reasonable request would still have used their time and I did not want to ask that. Instead, this test set is self sourced, built by me, but grounded in genuine patterns I observed firsthand during that work, rather than invented from nothing.

To be precise about what is real and what is not, no real supplier name, invoice number, or transaction figure from my actual work appears anywhere below. Suppliers are fully anonymised as Supplier 1 through Supplier 8. Country of origin is set to Japan or Poland throughout, reflecting the actual type of goods and trading partners I worked with, engine parts and components, rather than the China focused reference list used in my original Build test set. All HS codes and declared values are invented. What is real is the underlying pattern of difficulty, confirmed from direct experience, that supplier names were almost always correct and clearly written, that fields were sometimes genuinely missing from real documents, and that country of origin was frequently unclear specifically on transshipped goods, meaning goods routed through an intermediate port rather than shipped directly from their true origin.

This means this test set does not fully satisfy the brief's requirement for an independently sourced practitioner test set, and I am treating the comparison below as weaker evidence than a genuinely independent set would provide. One direct consequence of anonymising suppliers and moving to Japan and Poland as origins, none of these eight inputs will match any entity on my sanctions reference list, since that list is built entirely from Chinese entities. This is not a flaw in the test, it is itself a finding, since it tests whether the tool correctly leaves genuinely unrelated, unflagged suppliers alone rather than over flagging them, which is the false positive risk named directly in my Week 1 Signal post.

## The eight inputs

Difficulty here comes from missing fields and unclear transshipment origin, the two patterns confirmed from real experience, rather than from name ambiguity, since real names were reliably correct in practice.

### Input A — Clean, complete
Supplier: Supplier 1
Country of Origin: Poland
HS Code: 8409.99
Declared Value: EUR 14,200.00
Shipment: Engine components, direct shipment, Gdansk to Antwerp

**Expected:** All four fields as given, flag status clear.

### Input B — Missing declared value
Supplier: Supplier 2
Country of Origin: Japan
HS Code: 8409.91
Shipment: Engine parts, Yokohama to Ghent

**Expected:** Supplier, country and HS code as given, declared value not found, flag status clear.

### Input C — Missing HS code
Supplier: Supplier 3
Country of Origin: Poland
Declared Value: EUR 22,750.00
Shipment: Mixed engine components, Gdynia to Antwerp

**Expected:** Supplier, country and value as given, HS code not found, flag status clear.

### Input D — Transshipped, country of origin genuinely unclear
Supplier: Supplier 4
Country of Origin: listed as Rotterdam on the bill of lading, but the commercial invoice references Japanese manufacture
HS Code: 8409.91
Declared Value: EUR 68,000.00
Shipment: Engine parts, transshipped via Rotterdam, original manufacture Japan

**Expected:** Supplier as given, country of origin flagged as unclear or requiring clarification rather than confidently stated as either Rotterdam or Japan, HS code and value as given, flag status clear.

### Input E — Transshipped, manufacture location not stated at all
Supplier: Supplier 5
Country of Origin: listed only as the Antwerp transshipment point, manufacture location not stated on this document
HS Code: 8409.99
Declared Value: EUR 31,500.00
Shipment: Engine components, routed via Antwerp

**Expected:** Supplier as given, country of origin not found or flagged as unclear rather than guessed, HS code and value as given, flag status clear.

### Input F — Missing both HS code and declared value
Supplier: Supplier 6
Country of Origin: Poland
Shipment: General engine parts cargo, Gdansk to Antwerp

**Expected:** Supplier and country as given, HS code not found, declared value not found, flag status clear.

### Input G — Clean, complete, second supplier
Supplier: Supplier 7
Country of Origin: Japan
HS Code: 8409.91
Declared Value: EUR 45,600.00
Shipment: Engine parts, direct shipment, Nagoya to Hamburg

**Expected:** All four fields as given, flag status clear.

### Input H — Transshipped through a third country with no origin statement at all
Supplier: Supplier 8
Country of Origin: not stated anywhere on the document, only the transshipment port, Rotterdam, is listed
HS Code: 8409.99
Declared Value: EUR 9,900.00
Shipment: Engine components, routed via Rotterdam

**Expected:** Supplier as given, country of origin not found, since no true origin is stated and the transshipment port should not be reported as if it were the country of origin, HS code and value as given, flag status clear.

## Running the Build against this set

Run 1, prompt v1, same model as the original test set.

| # | Input | Expected | Got | Verdict | Failure code |
|---|---|---|---|---|---|
| A | Clean, complete | Clear, all fields correct | Correct | Pass | None |
| B | Missing declared value | Value not found, clear | Correct | Pass | None |
| C | Missing HS code | HS code not found, clear | Correct | Pass | None |
| D | Transshipped, unclear origin | Origin flagged as unclear, clear | Reported country of origin as Rotterdam without noting the ambiguity | Fail | F1 |
| E | Transshipped, manufacture location unstated | Origin not found or flagged unclear, clear | Reported country of origin as Antwerp, treating the transshipment point as if it were the origin | Fail | F1 |
| F | Missing HS code and value | Both not found, clear | Correct | Pass | None |
| G | Clean, complete, second supplier | Clear, all fields correct | Correct | Pass | None |
| H | Transshipped, no origin stated at all | Origin not found, clear | Correctly reported origin as not found rather than substituting the transshipment port | Correct | None |

## Measured success rate comparison

My original test set (Inputs 1 to 12, Week 2 Build log, China focused, sanctions matching included): 70.8% per run success rate across 24 runs, with a 58.3% inconsistency rate between repeated runs.

This practitioner pattern based test set (Inputs A to H, engine parts, Japan and Poland, single run each): 6 correct out of 8, 75%.

## Why the gap exists, and which of my original inputs were too easy

The comparison is not a clean apples to apples measurement. This second set was only run once per input rather than twice, so it cannot speak to consistency the way the original set did, and it also carries no sanctions matching difficulty at all, since none of the eight anonymised suppliers appear on my reference list. With both limitations stated plainly, the more useful finding is not the headline percentage, which is similar, but where the failures actually landed, and what that reveals about which of my original inputs were too easy.

My original test set's difficulty was almost entirely built around name based ambiguity, near duplicates, transliteration, partial matches against a supplied list. Real customs experience told me names were reliably correct in practice, so that entire axis of difficulty may not reflect the real operational risk at all. Several of my original twelve inputs, particularly the clean exact match cases, were too easy in the sense that they tested a straightforward lookup against a list the tool had just been handed directly, something any reasonably capable model should get right most of the time.

This second set, despite testing an entirely different commodity and origin pair, engine parts from Japan and Poland rather than China, surfaced the same underlying weakness my original set also touched on but did not isolate cleanly, transshipment origin handling. The tool twice treated a transshipment point, Rotterdam or Antwerp, as if it were the true country of origin, rather than leaving the field unclear or flagging the ambiguity, on two separate, unrelated inputs with completely different suppliers and origins. Finding the identical failure pattern twice, across two test sets built around different goods and different countries, is stronger evidence that this is a genuine weakness in the prompt itself rather than a fluke of one particular input.

## What this changes

This changes my Build's priorities heading into Week 3 and beyond, and it does so with more confidence than either test set alone would provide. My original prompt v1 focused almost entirely on entity name matching against the reference list. Real experience, now confirmed across two independently themed test sets, China focused sanctions matching and Japan and Poland focused engine parts, suggests the operationally dangerous failure is not name matching at all, it is the tool's tendency to quietly report a transshipment or routing point as if it were the country of origin. The next revision of my prompt should explicitly instruct the tool to distinguish a stated transshipment or routing point from a stated true country of origin, and to report the origin field as unclear or not found whenever the two are not clearly the same, rather than defaulting to whichever location name appears nearest to it in the text. This is a more targeted, better evidenced fix than anything either test set alone would have justified.

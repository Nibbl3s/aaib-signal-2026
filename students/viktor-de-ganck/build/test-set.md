# Test set (written 7 October 2026, before any run)

**Job:** classify one financial news item into event type, asset class, and fact or opinion.
**Inputs:** 15 real items from public news sites and X, 16 September to 6 October 2026. Individuals on X are anonymised. Leads marked (condensed) are shortened from the source article; quoted parts are verbatim.
**Labels:** written by me before any run, then checked with Claude for consistency with my own rules below.

**My rules**
1. A deal that is reported but not confirmed is opinion: there is no certainty yet.
2. A price move without a clear cause is event type "market move".
3. An analyst's price target is opinion: nobody knows where the market is going.
4. Sarcasm: I label what the author means, not what is literally written.

| # | Source | Input | Event | Asset | Fact/opinion | Awkward case |
|---|---|---|---|---|---|---|
| 1 | Federal Reserve, FOMC statement, 16 Sep 2026 | "The Committee decided to raise the target range for the federal funds rate by 1/4 percentage point to 3-3/4 to 4 percent, in support of the Federal Reserve's dual mandate." | rate decision | FX, bonds | fact | |
| 2 | Eurostat on X, 2 Oct 2026 | "Euro area #inflation expected to be at 3.8% in September 2026, up from 3.2% in August 2026. Components: energy +18.8%, services +3.2%, food, alcohol & tobacco +1.4%, other goods +1.1% - flash estimate" | macro data | FX | fact | X post, "expected" sounds like a forecast |
| 3 | TheStreet, 6 Oct 2026 (condensed) | Option Care Health: McKesson and Clayton Dubilier & Rice are "closing in on a buyout worth more than $5 billion, including debt." The stock surged over 32% on the news. | company news | equities | opinion | unconfirmed deal |
| 4 | TheStreet, 6 Oct 2026 (condensed) | Constellation Energy and Google announced "a 20-year power purchase agreement" to bring 890 megawatts of nuclear capacity online, with Constellation committing over $4.3 billion. Shares jumped about 12%. | company news | equities | fact | |
| 5 | TheStreet, 6 Oct 2026 (condensed) | The Group of Seven will "deploy 100 million barrels of reserves over the next four months", with diesel releases frontloaded. WTI crude fell 1.86% to $87.77 per barrel. | regulation | commodities | fact | boundary: government action vs macro |
| 6 | TheStreet, 6 Oct 2026 (condensed) | Treasury yields moved lower across the curve, with the 10-year yield down 3.6 basis points to 5.275%. | market move | FX, equities, bonds | fact | price move, no cause given |
| 7 | TheStreet, 6 Oct 2026 (condensed) | President Trump signed an executive order allowing "red-dyed diesel", normally reserved for farm use, to be used more broadly through year-end, to combat record fuel costs above $6 per gallon. | regulation | commodities | fact | |
| 8 | VEB, 6 Oct 2026 | "SAP neemt Gents AI-bedrijf TechWolf over. SAP heeft overeenstemming bereikt met TechWolf over een overname." | company news | equities | fact | Dutch |
| 9 | VEB, 6 Oct 2026 | "Amerikaans handelstekort loopt verder op. Het tekort op de Amerikaanse handelsbalans is in augustus verder opgelopen, hoewel minder sterk dan in juli." | macro data | FX | fact | Dutch |
| 10 | VEB, Oct 2026 | "Seagate in overnamestrijd. Het bedrijf is verwikkeld in een overnamestrijd met de Japanse rivaal Toshiba om TDK, dat magnetische koppen voor harddisk-drives maakt, meldde Bloomberg." | company news | equities | opinion | Dutch, unconfirmed report |
| 11 | VEB, Oct 2026 | "Jefferies heeft dinsdag het koersdoel voor Magnum Ice licht verlaagd, van 15,60 naar 15,20 euro." | company news | equities | opinion | Dutch, very short, fact about an opinion |
| 12 | VEB, Oct 2026 | "Beursagenda: buitenlandse fondsen. Hieronder volgen de belangrijkste items op de internationale bedrijfsagenda tot en met woensdag 14 oktober 2026." | none | none | fact | Dutch, right answer is "none" |
| 13 | X post, crypto analyst (anonymised), 2026 | "It's very clear that the markets are going to bottom in October '26 at <$45,000 for #Bitcoin. That's atleast what everybody expects to see happening in these markets. And just as everybody expects it, for sure we'll see it happening, right?" | opinion only | crypto | opinion | sarcasm, typo |
| 14 | X post, macro commentator (anonymised), 2026 | "We came into 2026 with expectations of 3 rate cuts. Now, not only might we not see 1 rate cut, but the probability of a rate hike is climbing. 25bps Rate hike expectations 1 month ago vs now April 2026 FOMC: 0% -> 6.2%. June 2026 FOMC: 0% -> 15%." | opinion only | FX | opinion | numbers mixed with opinion |
| 15 | X post, crypto media account, 2026 | "🚨INVESTMENT FIRM WARNS BTC COULD DROP 30% Bitcoin is "firmly in a deep bear market" and could fall another 30% in 2026, as per ZX Squared Capital." | opinion only | crypto | opinion | reported opinion, caps and emoji |

**Awkward cases covered:** ambiguous (3, 10, 11, 14), another language (8 to 12), very short (11), answer is "none" (12), boundary between categories (2, 5, 6), typos (13).
**Not covered:** very long input. All inputs are under 70 words; recorded as a limitation.

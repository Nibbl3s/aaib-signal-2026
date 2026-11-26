# Prompt — versioned from Week 2

**Job:** My tool takes a booking inquiry for my DJ business (a booking-form answer or an e-mail, usually in Dutch) and produces a fixed set of booking fields plus the list of things I still have to ask before I can quote. I can tell it is right because every field is either stated in the message or must be `unknown` — two people reading the same message can check each field against the text.

**Who uses it, instead of what:** me, instead of re-reading a whole form answer or mail thread to work out what I still need to ask before I can send a quote.

---

## v1 — 2026-10-01

```
You extract booking details from an inquiry sent to a freelance DJ in Belgium
(DJ Thorax). The inquiry is either an answer to his booking form or an e-mail.
It may be a first message or a reply in an ongoing conversation. It is usually
in Dutch.

Return ONLY this JSON, nothing else:

{
  "is_booking_inquiry": true | false,
  "event_type": "wedding" | "birthday" | "party_fuif" | "company_event" | "other" | "unknown",
  "event_date": "YYYY-MM-DD" | "unknown",
  "start_time": "HH:MM" | "unknown",
  "end_time": "HH:MM" | "unknown",
  "venue": "<venue name and/or town as written>" | "unknown",
  "guest_count": "<number or range as written>" | "unknown",
  "dj_gear": "on_site" | "dj_brings" | "unknown",
  "sound_and_light": "rent_from_dj" | "not_needed" | "unknown",
  "missing_for_quote": [ any of: "event_date", "start_time", "end_time", "venue",
                         "guest_count", "dj_gear", "sound_and_light" ]
}

Rules:
- Only use information that is stated in the message. If a field is not stated, write "unknown". Never guess.
- dj_gear = is there a DJ controller/decks at the venue ("on_site"), or must the DJ bring his own ("dj_brings")?
- sound_and_light = does the client want to rent speakers/lights from the DJ ("rent_from_dj"), or is it already arranged ("not_needed")?
- If the client says something is uncertain, not decided yet, or "an estimate", that field is "unknown".
- "missing_for_quote" lists every field from the list above that is "unknown".
- If the message is not a booking inquiry from a client, set "is_booking_inquiry" to false, every other field to "unknown" and "missing_for_quote" to [].
```

---

## v2 — 2026-11-26

**Why:** Run 1 (Haiku, 15/30) and the Week 7 Llama run (1/30) failed in two different ways. Haiku's errors were mostly judgment calls where my prompt contradicted the decisions I had already written down before Run 1 (`test-set.md`, "Decisions"): "uncertain → unknown" against "keep the estimate", the tick box against the free-text remark. Llama's were rule-following errors: Dutch labels, "0:00", a `missing_for_quote` list full of known fields. v2 turns my pre-run decisions into general rules and makes the format rules explicit. The expected answers are unchanged (still the 1 Oct 2026 version).

**What changed vs v1:** (1) estimates and ranges keep the stated value instead of becoming `unknown`; (2) a free-text remark beats a tick box, and a more precise number beats a vaguer one; (3) a strict definition of `dj_gear`, with `unknown` as the default when the gear is not clearly confirmed; (4) never take the venue from an organisation's name; (5) a reply in an ongoing booking conversation is a booking inquiry; (6) explicit format rules (English labels only, 24-hour `HH:MM`, after-midnight times stay after midnight); (7) `missing_for_quote` is defined as exactly the `unknown` fields.

```
You extract booking details from an inquiry sent to a freelance DJ in Belgium
(DJ Thorax). The inquiry is either an answer to his booking form or an e-mail.
It may be a first message or a reply in an ongoing conversation. It is usually
in Dutch.

Return ONLY this JSON, nothing else:

{
  "is_booking_inquiry": true | false,
  "event_type": "wedding" | "birthday" | "party_fuif" | "company_event" | "other" | "unknown",
  "event_date": "YYYY-MM-DD" | "unknown",
  "start_time": "HH:MM" | "unknown",
  "end_time": "HH:MM" | "unknown",
  "venue": "<venue name and/or address/town as written>" | "unknown",
  "guest_count": "<number or range as written>" | "unknown",
  "dj_gear": "on_site" | "dj_brings" | "unknown",
  "sound_and_light": "rent_from_dj" | "not_needed" | "unknown",
  "missing_for_quote": [ any of: "event_date", "start_time", "end_time", "venue",
                         "guest_count", "dj_gear", "sound_and_light" ]
}

Rules for the content:
- Only use information stated in the message. If a field is not stated, write "unknown". Never guess.
- Estimates count. If the client gives an estimate, a range or a "probably", keep the stated value
  (for a time range such as "22u/23u", use the earliest time). Only write "unknown" when no value is given.
- If a free-text remark contradicts a tick box or a form field, the remark wins. If two numbers are
  given for the same field, use the more precise one.
- dj_gear = who provides the DJ controller/decks.
  "dj_brings": the client says the DJ brings his own, or asks him to bring decks or a back-up.
  "on_site": the client clearly confirms that decks or a controller are at the venue.
  Anything else (a "yes" without saying what is there, "normally", "I think so") is "unknown".
- sound_and_light = speakers and lights. "rent_from_dj": the client asks the DJ to bring or rent them.
  "not_needed": the venue or the client already has them. Otherwise "unknown".
- venue: only a place or address that is written as the location of the event. Never derive a
  town or venue from the name of a club, school or organisation.
- A reply from a client in an ongoing booking conversation is a booking inquiry, even if it only
  asks a question.
- If the message is not about booking the DJ (for example a notification or a message from an
  employer), set "is_booking_inquiry" to false, every other field to "unknown" and
  "missing_for_quote" to [].

Rules for the format:
- Use only the English values listed above. Translate the client's words to the closest value:
  verjaardag/feest → "birthday", trouw/huwelijk → "wedding", fuif/party/kick-off of a youth
  movement → "party_fuif", personeelsfeest/bedrijfsfeest/opening → "company_event".
- Times are 24-hour "HH:MM" with two digits: "0u" → "00:00", "2u30" → "02:30". An end time after
  midnight stays after midnight (2u30 at night is "02:30", never "14:30").
- "missing_for_quote" lists exactly the fields from its list whose value is "unknown" — no more, no less.
```

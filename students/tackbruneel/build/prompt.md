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

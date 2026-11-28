# Prompt — versioned from Week 2
Prompt: 
Give me all the required qualifications in this job ad.

**Prompt V2 - versioned from week 8**
Prompt:
Extract ONLY the mandatory ("required") candidate qualifications from the job advertisement below.

STRICT RULES:
1. Return the output strictly as a valid JSON array of strings (e.g., ["Qualification 1", "Qualification 2"]). Do not include markdown formatting, introductory text, or summaries.
2. Include ONLY hard requirements (diplomas, years of experience, mandatory certificates, required languages, and required skills).
3. EXCLUDE job duties/tasks, company descriptions, benefits/perks, and "preferred" or "nice-to-have" skills.
4. Base every item strictly on explicit text in the ad—do not infer or invent requirements.
5. Return all extracted items in English (translate if the original job advertisement is in another language).

Job Advertisement:


# Prompt History — HR Audit Tool

## Version 1 — 2026-09-29

You are helping an HR professional audit a job advertisement before publication. Read the job ad below and evaluate how clearly it specifies requirements and practical details, specifically checking for vagueness and ambiguity. 

  

Extract and analyze the following seven areas in this exact order: 

  

1. START DATE: Identify the expected start date or timeframe. Check: If it says something vague like "as soon as possible" or "snarast" without a date, flag it as "vague start date". If it says "enligt överenskommelse" (by agreement), report it as "by agreement" and do not flag it. If missing, write "not specified".   

  

2. APPLICATION DEADLINE (END DATE): Identify the last date to apply. If a specific date is stated, report it and do not flag it, even if the ad also says that interviews or selection are ongoing ("intervjuer sker löpande", "urval sker löpande"). Only flag if there is no specific date, or if the only wording is vague (e.g., "löpande" as the sole deadline information). If missing, write "not specified".    

  

3. WORK LOCATION & MODE: Identify the geographical location and whether the work is onsite, remote, or hybrid. If a mode is stated (e.g., "hybrid"), accept it without flagging, even if the number of remote days is not given. Only flag if the mode is missing or contradictory.    

  

4. EMPLOYMENT PERCENTAGE: Identify the work rate/extent (e.g., 100%, 80%, full-time, part-time). Check: If it is missing or vague, flag it. 

  

5. LANGUAGE REQUIREMENTS: Identify each language mentioned and the specific level stated (e.g., B2, fluent, native). Check: If it uses vague phrasing like "good knowledge" or "fluent" without a standard scale, flag it as "vague phrasing detected". If nothing is mentioned, write "not specified". 

  

6. YEARS OF EXPERIENCE REQUIRED: Identify the number or range of years required. Check: If the requirement is vague (e.g., "several years"), flag it as "vague phrasing detected". If nothing is stated, write "not specified". 

  

7. MUST-HAVE VS. NICE-TO-HAVE: For the requirements found above, evaluate whether the distinction between mandatory and preferred is clear, or if it is ambiguous. 

  

Do not guess. If something is missing or unclear, point it out. 

  

Answer in exactly this format: 

- Start date: ... 

- Application deadline: ... 

- Work location & mode: ... 

- Employment percentage: ... 

- Languages extracted & clarity check: ... 

- Experience extracted & clarity check: ... 

- Must vs. Nice-to-have clarity: ... 

  

Job ad: [PASTE AD HERE] 

# Build log — every run, every failure (Week 2)
Build V1
The job

Job: Extract the most important qualifications from a job advertisement.

Input: A complete real job advertisement.

Output: A list of the required qualifications from the vacancy.

Who uses it: HR employees, recruiters and hiring managers.

Is the answer checkable?
Yes. The AI output can be compared with the original job advertisement.

The test set

I tested the prompt on 10 real job advertisements from different companies and job types.

The test set included:

Head of the GAS Department — VDAB
Accountant — VDAB
HR Director Japan & Korea — CIC / Lever
Garden/Tiles Showroom Advisor — VDAB
Project Engineer — VDAB
Business Development Manager DACH — StepStone
Apple Business Expert — Apple Jobs
Technical Engineering Role — Microsoft Careers
Senior Content Marketing Manager, Prime Video — Amazon Jobs
IT Recruiter — Pensaert Partners / Kwery

The vacancies had different layouts and levels of difficulty.

Some vacancies used clear sections such as Minimum Qualifications, Basic Qualifications or Preferred Qualifications. Other vacancies mixed qualifications with responsibilities, personal characteristics and application information.

Runs
Run 1
Brief

The first run used a very simple prompt. The goal was to see if the AI could find the main required qualifications without giving it detailed instructions about how to classify the information.

Prompt:

Give me all the required qualifications in this job ad.

Model: [Model used for Run 1]

Test 1 — Head of the GAS Department

Expected:
Master's degree, Belgian nationality, knowledge of the administrative and regulatory framework of local authorities, organising, planning, quality control, leadership, team coordination, willingness to learn, proactive attitude and solution-oriented thinking.

Got:
The AI found the Master's degree, Belgian nationality, team coordination, leadership, planning, quality control, problem solving and several other competencies. It also included a Dutch CV, motivation letter and a copy of the identity card.

Verdict: Partly correct.

Failure: F3 — Missed information, F4 — Format/classification problem.

Test 2 — Accountant

Expected:
Bachelor or Master's degree in accounting/taxation, relevant work experience, knowledge of Belgian accounting, accounting software, languages and accurate/structured/proactive behaviour.

Got:
The AI found the education, experience, Belgian accounting regulations, VAT, accounting software, languages and the main personal competencies. It also added some useful details such as financial reporting and reconciliations.

Verdict: Correct.

Failure: None.

Test 3 — HR Director Japan & Korea

Expected:
7+ years of HR experience, Japanese labour law, employee relations, Japanese and English fluency, work rules, industrial physicians, mental health support and international/multi-country experience.

Got:
The AI found the main HR experience, Japanese labour law, work rules, industrial physicians, mental health support, employee relations, Japanese and English and international experience. It also added company values and broader leadership characteristics.

Verdict: Partly correct.

Failure: F4 — Format/classification problem.

Test 4 — Garden/Tiles Showroom Advisor

Expected:
Customer-friendly, well-groomed, creative, Dutch, basic French and English, Saturday availability and sales experience.

Got:
The AI found the main requirements. It also correctly noticed that a specific education or previous experience was not required and that experience was only an advantage.

Verdict: Correct.

Failure: None.

Test 5 — Project Engineer

Expected:
Technical education, planning and organisation, relevant experience, VCA-VOL, communication, living within 30 km of Ghent, project coordination, creative solutions and a B driving licence.

Got:
The AI found the technical diploma, B driving licence, VCA-VOL, relevant experience, location requirement, planning, communication, project coordination and technical problem solving.

Verdict: Correct.

Failure: None.

Test 6 — Business Development Manager DACH

Expected:
Commercial field sales/business development experience, German/Dutch/English, prospecting, networking, regular travel in Germany, entrepreneurial mindset and living within one hour of Ronse/Oudenaarde.

Got:
The AI found field sales, business development, location, languages, travel, networking, lead generation, cold outreach and entrepreneurial mindset. It also added negotiation and strategic/analytical skills.

Verdict: Correct.

Failure: None.

Test 7 — Apple Business Expert

Expected:
Availability, retail/sales experience, Apple products and services, communication, customer relationships, organisation, technical understanding, problem solving and persuasion.

Got:
The AI only returned the four official Minimum Qualifications:

Availability and reliable attendance
Retail/sales or related experience
Experience with Apple products/services
Local language

It did not include several other important requirements mentioned elsewhere in the vacancy.

Verdict: Failed.

Failure: F3 — Missed information.

Test 8 — Technical Engineering Role at Microsoft

Expected:
Bachelor's degree in Computer Science or related field, 6+ years of technical/coding experience, programming languages, security checks, cloud knowledge, coding, infrastructure/developer tooling and leadership.

Got:
The AI mainly returned the formal education, 6+ years of coding experience, programming languages and security/background checks.

It did not include several of the technical and leadership requirements that appeared elsewhere in the vacancy.

Verdict: Failed.

Failure: F3 — Missed information.

Test 9 — Senior Content Marketing Manager, Prime Video

Expected:
7+ years of marketing experience, data/metrics, Excel/Tableau, cross-functional work, communication with senior leadership, paid media, entertainment experience, fast-paced/high-tech environment and AI.

Got:
The AI mainly returned the 7+ years of marketing experience, data/metrics, Excel/Tableau and cross-functional experience.

Several other qualifications were treated as Preferred Qualifications or were not included.

Verdict: Failed.

Failure: F3 — Missed information.

Test 10 — IT Recruiter

Expected:
Bachelor/Master/Associate degree, commercial mindset, communication, prospecting, networking and results-oriented behaviour.

Got:
The AI found the degree, commercial mindset, communication, prospecting, networking and results. It also mentioned that recruitment/IT experience was an advantage rather than a requirement.

Verdict: Correct.

Failure: None.

Run 1 summary

Correct: 5/10

Partly correct: 2/10

Failed: 3/10

Main failure: F3 — Missed information.

The biggest problem was that the AI sometimes focused only on sections such as Minimum Qualifications or Basic Qualifications.

Run 2
Brief

Run 2 used the same prompt and the same 10 vacancies.

The goal was to check whether the results were consistent and whether the AI would make the same mistakes.

Prompt:

Give me all the required qualifications in this job ad.

Model: [Model used for Run 2]

Test 1 — Head of the GAS Department

Expected:
Master's degree, Belgian nationality, knowledge of the administrative and regulatory framework, organisation, planning, quality control, leadership, team coordination and personal competencies.

Got:
The AI found more qualifications than in Run 1, including education, nationality, language, leadership, planning, communication, problem solving and personal competencies.

However, it also included application requirements such as the CV, motivation letter and identity card.

Verdict: Partly correct.

Failure: F3 — Missed information, F4 — Format/classification problem.

Test 2 — Accountant

Expected:
Education, relevant experience, Belgian accounting knowledge, accounting software, languages and personal competencies.

Got:
The AI found the main requirements and provided a detailed answer including education, experience, accounting regulations, VAT, software, languages and personal competencies.

Verdict: Correct.

Failure: None.

Test 3 — HR Director Japan & Korea

Expected:
HR experience, Japanese labour law, employee relations, languages, work rules, mental health support and international experience.

Got:
The AI found the main qualifications and also included strategic thinking, operational discipline, leadership and relationship building.

Verdict: Partly correct.

Failure: F4 — Format/classification problem.

Test 4 — Garden/Tiles Showroom Advisor

Expected:
Customer friendliness, appearance, creativity, languages, Saturday availability and sales experience.

Got:
The AI correctly extracted the main qualifications and correctly identified that education and previous experience were not strict requirements.

Verdict: Correct.

Failure: None.

Test 5 — Project Engineer

Expected:
Technical education, experience, VCA-VOL, driving licence, location, planning, communication and project coordination.

Got:
The AI found the main requirements and technical skills.

Verdict: Correct.

Failure: None.

Test 6 — Business Development Manager DACH

Expected:
Sales/business development, languages, networking, prospecting, travel, entrepreneurial mindset and location.

Got:
The AI found almost all important requirements, including sales, languages, travel, networking, prospecting and entrepreneurial mindset.

Verdict: Correct.

Failure: None.

Test 7 — Apple Business Expert

Expected:
All important required qualifications from the complete vacancy.

Got:
The AI again focused mainly on the official Minimum Qualifications section.

It missed requirements related to communication, customer relationships, technical understanding, organisation, problem solving and persuasion.

Verdict: Failed.

Failure: F3 — Missed information.

Test 8 — Technical Engineering Role at Microsoft

Expected:
Education, technical experience, programming languages, security checks, cloud knowledge, infrastructure/developer tooling and leadership.

Got:
The AI again mainly focused on education, coding experience, programming languages and security/background checks.

Verdict: Failed.

Failure: F3 — Missed information.

Test 9 — Senior Content Marketing Manager, Prime Video

Expected:
Marketing experience, data skills, Excel/Tableau, cross-functional work, communication, paid media, entertainment, startup/high-tech environment and AI.

Got:
The AI again focused on the Basic Qualifications and treated several other requirements as Preferred Qualifications.

Verdict: Failed.

Failure: F3 — Missed information.

Test 10 — IT Recruiter

Expected:
Degree, commercial mindset, communication, prospecting, networking and results.

Got:
The AI found the main requirements and additionally mentioned an interest in IT profiles and the digital world.

Verdict: Correct.

Failure: None.

Run 2 summary

Correct: 5/10

Partly correct: 2/10

Failed: 3/10

Main failure: F3 — Missed information.

Run 1 vs Run 2

The two runs produced very similar results.

Both runs:

used the same prompt;
used the same 10 vacancies;
correctly handled 5 vacancies;
partly handled 2 vacancies;
failed on 3 vacancies;
had F3 as the main failure;
had no clear F2 fabrication;
had no F5 refusal.

The three biggest problems were the same in both runs:

Apple
Microsoft
Amazon

This shows that the problem is probably not only random variation between runs. The prompt itself needs to be improved.

Failure analysis
F1 — Wrong

No major F1 cases were found.

The AI generally understood the task and extracted information related to qualifications.

F2 — Fabricated

No clear F2 cases were found.

The AI sometimes interpreted or broadened information, but there was no clear example of a completely invented qualification.

F3 — Missed

F3 was the main failure.

The AI missed qualifications when they were located outside clearly labelled qualification sections.

This happened especially with:

Apple
Microsoft
Amazon

The AI often focused on sections called Minimum Qualifications, Basic Qualifications or Required Qualifications.

This means that a qualification mentioned somewhere else in a long vacancy could be missed.

F4 — Format / classification

The AI sometimes included information that did not belong in the final list of required qualifications.

Examples include:

CV requirements
motivation letter
identity card
application instructions
job responsibilities
company values
preferred qualifications
broad personal characteristics

The AI also sometimes changed specific wording into broader categories.

For example:

"prospecting, networking and opening new doors"

could become:

"commercial drive"

The second version is understandable, but some of the original detail is lost.

F5 — Refused

No F5 cases were found.

The AI answered all 10 vacancies in both runs.

F6 — Inconsistent

No major F6 cases were found.

Run 1 and Run 2 were very similar.

There were some differences in detail, but the main successes and failures stayed the same.

What surprised me

The biggest surprise was that the AI performed well on many normal vacancies but struggled with vacancies from large companies that use a structured qualification system.

The layout of the vacancy seemed to be just as important as the actual difficulty of the job.

Apple, Microsoft and Amazon were especially difficult because important information was spread across different sections.

Another surprise was that the AI sometimes gave more information than requested.

More information was not always better because it could make it harder to see which qualifications were actually required.

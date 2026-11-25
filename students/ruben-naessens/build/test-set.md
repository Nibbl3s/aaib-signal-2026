# Week 2 — Original v1 test set

**Student:** Ruben Naessens  
**Use case:** Extract job qualifications into mandatory/preferred education, experience, professional skills and languages.  
**Prompt:** [prompt.v1.md](prompt.v1.md)  
**Results and original evaluation policy:** [log.md](log.md)

## Provenance and use

This file assembles the ten real vacancy inputs recovered from Ruben's pasted original test messages. It was assembled after the original runs. The **original expected checks** below are copied from the existing log, which reports that checks were written before each run. This later compilation does not independently prove that timing.

The **later annotation notes** are retrospective clarifications, not pre-run evidence. Do not use them to claim that the original answer key was more detailed than the recorded checks, or silently rescore the original baseline. Any future revised answer key should be frozen and versioned before new tests.

The fenced input blocks contain the recovered vacancy bodies. The shared v1 prompt is stored separately, not repeated in each block. Presentation whitespace (non-breaking spaces and line endings) may be normalised; this is not a byte-for-byte export of the original chats. Vacancy wording, including typos, has been retained. Descriptive test labels, source URLs, expected checks and notes are not part of the input. No vacancy title has been newly inserted into a test body.

The duplicate Málaga paste is included once as Test 03. The separate French Lisbon URL-only case is not part of these ten. The Worldwiders practitioner's ten Nordic Jobs vacancies form a different test set.

## Scoring boundary

Use the project policy recorded in log.md: preserve supported qualifications, tiers, language levels and experience thresholds, and exclude general traits, work/physical conditions and eligibility from the four fields. Excluding eligibility from this schema is not a recommendation to ignore it operationally. Duties alone do not establish prior qualification requirements.

Expected answers are recorded as semantic checks rather than exact strings; equivalent phrasing is acceptable. These summaries are not exhaustive pre-run JSON answer keys. Education or preferred fields with no supported items should be empty arrays. Detailed retrospective notes must remain distinguishable from the original checks.

## Test index

| Test | Vacancy |
| --- | --- |
| 01 | Dutch Support Specialist, Greece |
| 02 | Dutch Insurance Customer Advisor, Athens |
| 03 | French Junior IT Support, Málaga |
| 04 | Dutch Account Executive, Valencia |
| 05 | German Customer Support Specialist, Porto |
| 06 | Butcher, Denmark |
| 07 | Dutch Recruiter, Lisbon or Porto |
| 08 | Dutch Content Moderator, Lisbon |
| 09 | Technical Support Team Leader, Lisbon |
| 10 | German Sales Development Representative, Gothenburg |

## Test 01 — Dutch Support Specialist, Greece

**Source reference:** https://www.multilingualjobsworldwide.com/job/dutch-speaking-support-specialist-work-from-anywhere-in-greece-5784722

### Original expected checks, copied from log.md

> Fluent Dutch and English required. Prior support or service experience preferred. No explicit education or technical qualification.

### Later annotation notes — retrospective

The recovered candidate profile explicitly asks for strong communication skills. This is an in-scope professional skill under the existing policy. This clarification is recorded after the original runs; it is not evidence of an original pre-run annotation. No CEFR value is specified.

### Recovered vacancy input

```text
Job description
Would you like to build an international career while enjoying life, working remotely in the Mediterranean? Our client is looking for motivated Dutch on several work-from-home projects to join their growing support teams in Greece.
In this role, you will support users of a well-known international service in either a customer support or technical support function. You will receive full training and a generous relocation package to kickstart your new adventure abroad.
Disclaimer:
 This role can solely be performed within Greece. Relocation support is facilitated by our client, and we are happy to tell you more about it personally!
About the company  Our client is a global leader in customer experience management and contact center services, delivering high-quality customer care and technical support in more than 35 languages. With diverse international teams across multiple countries, they support leading global brands in a dynamic, inclusive, and professional work environment.
What will you do?
Support Dutch-speaking customers via phone and/or chat
Handle customer support and technical support inquiries depending on team assignment
Assist with account management, billing questions, and service-related issues
Provide basic technical troubleshooting for applications, software functionality, and connectivity
Guide users through websites and applications and explain available features
Deliver accurate, real-time solutions while ensuring high customer satisfaction
Communicate clearly, professionally, and empathetically with customers 
Candidate profile
Fluent in Dutch and English, both written and spoken
Previous experience in customer support, technical support, or service-related roles is an advantage
Strong communication skills and a customer-oriented mindset
Motivated, reliable, and eager to learn
Willing to relocate to Greece and adapt to a new culture
Comfortable working in a fast-paced, international environment 
Employer offers
International and modern work environment
Paid training in customer support and technical support
Career development opportunities (e.g. trainer, quality analyst, or team leader)
Extra compensation for overtime, night shifts, and Sundays
Performance-based bonuses
Generous relocation package and employee discounts
Private medical insurance and on-site facilities
Free Greek language courses and ongoing relocation support
```

## Test 02 — Dutch Insurance Customer Advisor, Athens

**Source reference:** https://www.multilingualjobsworldwide.com/job/dutch-speaking-customer-advisor-for-insurance-company-in-athens-greece-6094168

### Original expected checks, copied from log.md

> Fluent Dutch, good English, CRM and claims tools required. Prior support, claims or insurance experience preferred.

### Later annotation notes — retrospective

The source also explicitly includes clear explanation of complex topics, accurate case management, and comfort with office tools. These are useful additional field-level checks, clarified after the original runs. General mindset, motivation and relocation do not belong in technical_skills.

### Recovered vacancy input

```text
Job description
Do you want to work as a Dutch-speaking Customer Advisor in Greece? Would you like to build an international career while supporting customers in the insurance industry? Our client is looking for motivated Dutch speakers to join their international customer support team.
In this role, you will guide customers through their claims journey, explain insurance-related topics in a clear and simple way, resolve issues efficiently, and provide excellent customer care. You will receive full training, relocation support to Greece, a competitive salary with 14 salaries per year, health care benefits, career development opportunities, and free online Greek language courses.
About the company
Our client is a global leader in customer experience management and contact center services, delivering high-quality customer care and technical support in more than 35 languages. With diverse international teams across multiple countries, they support leading global brands in a dynamic, inclusive, and professional work environment.
What will you do?
Support Dutch-speaking customers via phone, email and/or chat
Guide customers through their claim journey in a clear and professional way
Explain insurance-related topics and device protection services in simple terms
Handle customer questions, complaints, and service-related issues
Resolve cases accurately and efficiently while maintaining high customer satisfaction
Use CRM and claims systems to update customer information and case notes
Follow internal procedures, quality standards, and compliance guidelines
Communicate with empathy, patience, and attention to detail throughout every interaction.
Candidate profile
Fluent in Dutch and good English, both written and spoken
Previous experience in customer support, claims support, insurance, or service-related roles is an advantage
Strong communication skills with the ability to explain complex topics clearly
Customer-oriented, empathetic, and solution-focused mindset
Detail-oriented, responsible, and able to manage cases accurately
Comfortable working with CRM systems, claims platforms, and office tools
Motivated to learn, improve, and follow quality and compliance standards
Willing to relocate to Greece and work in an international environment.
Employer offers
International and modern work environment in Greece
Full paid training by certified instructors
Career development and professional growth opportunities
Competitive monthly salary with 14 salaries per year
Relocation support, including flight ticket, temporary hotel accommodation, and help with finding housing
Health care benefits and additional employee discounts
Free online Greek language courses
Special events, community initiatives, and a supportive international team
State-of-the-art office facilities with relaxing break areas.
```

## Test 03 — French Junior IT Support, Málaga

**Source reference:** https://www.multilingualjobsworldwide.com/job/french-speaking-junior-it-support-to-malaga-6094164

### Original expected checks, copied from log.md

> Fluent French and English, troubleshooting, networking and communication required. POS experience preferred.

### Later annotation notes — retrospective

No prior ITIL certification or POS requirement should be inferred from duties. Weekend scheduling and local residence are conditions; general IT affinity is an interest. Problem-solving is a concrete ability when extracted from the candidate-profile wording; generic proactivity is not.

### Recovered vacancy input

```text
Job description
Do you want to work in the fashion tech industry and provide top-tier IT support to international retail stores? Our client is looking for French-speaking professionals to join their IT Support team in vibrant Malaga!
Become part of a dynamic and service-oriented IT hub supporting over 2,000 fashion stores across Europe. You’ll be welcomed with a thorough onboarding, buddy program, and ongoing development in a positive and multicultural work environment.
About the company
Our client is a global fashion group operating multiple retail brands and tech hubs, including one in Malaga. With more than 300 IT professionals across Europe, they focus on agility, collaboration, and staying at the forefront of innovative technologies to support their global retail operations.
What will you do?
Provide remote IT support to retail store systems and applications
Ensure proper documentation following ITIL guidelines
Guide users toward self-service solutions and provide technical advice
Act as an advocate for user needs within the IT department
Continuously improve the global IT Service Desk
Troubleshoot incidents and fulfill service requests
Candidate profile
Experience with POS systems is a plus
Basic skills in troubleshooting hardware/software
Understanding of network concepts
Strong communication and interpersonal skills
Analytical mindset and proactive approach to problem-solving
Comfortable with flexible scheduling, including occasional weekends
Fluent in French and English
Affinity for IT and technical solutions
Employer offers
Looking for candidates that are locally based in Malaga 
Private health insurance after 6 months
25 vacation days + 10 national holidays
€120 voucher to spend on brand clothing
Seasonal employee discounts of over 50%
Office cantina with 70% employer subsidy
Social events and team-building activities
Possibility to work 2 days/week from home
```

## Test 04 — Dutch Account Executive, Valencia

**Source reference:** https://www.multilingualjobsworldwide.com/job/dutch-speaking-account-executive-to-valencia-spain-6094165

### Original expected checks, copied from log.md

> Bachelor’s or equivalent, 2–8 years of sales, full sales cycle, communication, presentation and negotiation required. Dutch native/C1, professional English, Spanish B1 minimum. B2B and SaaS/software sales preferred.

### Later annotation notes — retrospective

Keep the university-education alternative and the 2–8-year range. Do not turn the degree alternative into equivalent work experience. Tools or processes named only in duties do not establish prior candidate requirements. Hunter mentality and generic motivation are outside the skills field.

### Recovered vacancy input

```text
Job description
Worldwiders Recruitment is looking for an ambitious  Dutch-speaking Account Executive  to join a leading international B2B SaaS company in Valencia. Our client provides cloud-based software solutions that help multinational organizations digitalize and automate critical business processes. As part of their continued international expansion, they are strengthening their Dutch commercial team.
This is a  new-business-focused sales role  for someone with a strong hunter mentality who enjoys prospecting, opening new accounts and managing opportunities through the full B2B sales cycle.
What will you do?
Identify and prospect new customers across the Dutch market.
Research, segment and prioritize target accounts and business opportunities.
Engage key decision-makers within multinational and enterprise organizations.
Conduct discovery calls, commercial presentations and software demonstrations.
Understand customer needs and position relevant SaaS solutions.
Manage the  full sales cycle , from initial prospecting through proposal, negotiation and closing.
Build and maintain a strong pipeline with a clear focus on  new-logo acquisition .
Manage RFPs, RFIs, RFQs and tenders when required.
Collaborate with Presales, Marketing, Project Management, R&D and other internal teams.
Maintain accurate CRM activity, pipeline management and forecasting.
Work towards clearly defined sales KPIs and revenue targets.
What we are looking for
Native/C1 level Dutch.
Full professional proficiency in English.
Minimum  B1 Spanish .
Bachelor’s degree or equivalent university education.
2–8 years of professional sales experience , ideally within B2B.
Strong  hunter mentality  and genuine motivation for new business development.
Experience managing or contributing to a full sales cycle.
Strong communication, presentation and negotiation skills.
Proactive, commercially driven and results-oriented.
Previous  SaaS or software sales experience  is highly valued.
What’s on offer?
€30,000–€40,000 gross annual salary , depending on experience.
Additional variable / commission structure.
Hybrid working model:  4 days on-site and 1 day remote .
International and multicultural working environment.
Extensive initial training and ongoing professional development.
Opportunity to develop your career within a growing international software business.
```

## Test 05 — German Customer Support Specialist, Porto

**Source reference:** https://www.multilingualjobsworldwide.com/job/german-speaking-customer-support-specialist-to-technology-company-in-porto-portugal-6094498

### Original expected checks, copied from log.md

> German C2, English B2 or higher and tech support experience required. Windows/Mac knowledge, relevant education and additional languages preferred.

### Later annotation notes — retrospective

The candidate requirements also explicitly include strong communication skills. Keep the preferred university/vocational alternatives. Enthusiasm, willingness to learn and relocation funding are outside technical_skills. These detail notes were written after the original runs.

### Recovered vacancy input

```text
Job description
Do you want to progress in your career and have a large affinity to technology and working with a wide range of customers? Then read on, as we are looking for dedicated German-speaking Customer Support Specialists i n the picturesque city of Porto, Portugal.
Our client is a leading global technology company that provides a cutting-edge platform to remotely access, control, and support devices. Their software solutions empower our users and customers to bridge distances and digitalize their processes through seamless connectivity.
Responsibilities
Support the existing customers with their technical and accounting issues over the phone, ticket and chat
Show the software solutions to customers via online demonstrations, presenting functionality that will solve their individual IT challenges
Identify customer needs and forward such requests to our sales department
Work closely with all members of the Customer Support team to deliver a best-in-class experience for our customers
Requirements
Highly fluent in German (C2) and business proficiency in English (at least B2) 
Other languages, such as Italian, Spanish or French are a plus
Physically located in Porto or willingness to move there at your own expense
Windows®/Mac user knowledge desirable
University degree in the field of economics, or other relevant vocational education such as commercial or technical training (preferred)
Tech support experience needed
Determination, enthusiasm and willingness to learn
Working independently is just as important to you as team spirit
Strong communication skills and passion for working with people
What our client offers
Onsite Onboarding in the companies HQ for an optiimal start (accommodation and travel expenses covered) 
Great compensation and benefits packages including compensation bonus and stock-based options, regular salary reviews
28.000 € base salary + up to 5000 € performance bonus + 2400 € meal allowances (all annually)
Increase to 30.000 base after passing the 6 month probation
= up to 37.400 €+ annual compensation long term 
Public transport friendly office
Access to Corporate Benefits platform with many discounts
Regular Team events and company-wide celebrations
Open door policy, no dress code rules, frequent all Hands and Leadership Lunches
Hybrid and Flexible work time with up to 50% home office
Regular Monday-Friday work hours, no weekend work
Long term contract with 6 months probation 
Work From Abroad Program allowing up to 40 days of work outside your contracting country
We celebrate diversity as one of core values, join and drive one of the c-a-r-e initiatives together with us!
```

## Test 06 — Butcher, Denmark

**Source reference:** https://www.multilingualjobsworldwide.com/job/spanish-speaking-butchers-to-denmark-6094811

### Original expected checks, copied from log.md

> Butchery and meat-processing experience, knife skills and independent production work required. Pork shoulder experience and English or other languages preferred.

### Later annotation notes — retrospective

The submitted input excludes the vacancy title. Therefore Spanish must not be inferred from the source URL. The explicit preferred status of pork-shoulder experience in the requirements governs that tier despite the introductory specialisation wording. Physical fitness, reliability and transport arrangements are outside the four-field schema.

### Recovered vacancy input

```text
Job description
Our client, one of Europe's leading food production companies, is looking for experienced pork butchers specializing in shoulder deboning (pork front ends) to join their production facilities in Denmark.
Working in Denmark offers clear employment conditions under collective agreements, pension schemes, paid holidays, and stable long-term employment. You will become part of an international workplace with colleagues from many different nationalities.
Safety is their top priority, and employees are provided with a structured, professional working environment focused on quality, teamwork, responsibility, and mutual respect.
Job Responsibilities
Deboning of pork shoulders (front ends)
Knife work in high-volume pork production
Ensuring correct cutting techniques and optimal meat yield
Following hygiene, quality, and safety procedures
Supporting other tasks in the cutting department when required
Candidate Requirements
Proven professional experience as a butcher or meat cutter –  mandatory requirement
Previous experience with pork shoulders/front ends is highly preferred
Strong knife skills
Experience from an abattoir, slaughterhouse, or meat processing facility
Ability to work efficiently in a fast-paced production environment
Physically fit, reliable, and quality-oriented
Able to work independently from the first days of employment
Working Hours
Day Shift
Working week: Monday to Friday.
Working hours: 06:45–14:45.
Weekends off.
Salary and Benefits
Estimated net base salary of approximately €3,000 per month, depending on the position and hours worked.
After a short initial training and adaptation period, during which the salary will be lower, there may be an opportunity to move to a piece-rate payment system (akkord), allowing employees to significantly increase their hourly earnings.
Canteen available on-site.
Training and professional development opportunities.
Accommodation and Transportation
During the first month, accommodation will be provided, as well as a rental car to facilitate transportation.
After the first month, employees may choose to remain in the accommodation provided, at their own expense, or alternatively arrange their own housing.
The company will cover the rental car costs during the first month. However, employees will be responsible for fuel expenses.
Please note:  Flight tickets are at the candidate's own expense.
Support with Relocation and Integration in Denmark
The company provides support to employees throughout their integration process, including:
Administrative assistance with obtaining a CPR number and Tax Card.
Support in finding accommodation close to the workplace.
Assistance available in several languages.
Guidance on Danish working culture and everyday life in Denmark.
Languages
Knowledge of English or other languages will be considered an advantage.
```

## Test 07 — Dutch Recruiter, Lisbon or Porto

**Source reference:** https://www.multilingualjobsworldwide.com/job/dutch-speaking-recruiter-to-lisbon-or-porto-portugal-6094133

### Original expected checks, copied from log.md

> Dutch C2, English B2/C1, one year of recruiting, recruitment methods, ATS, sourcing, referrals and communication required. University degree preferred, ideally HR.

### Later annotation notes — retrospective

The opening mentions German or Dutch, but the detailed profile explicitly specifies Dutch C2 and English B2/C1. Do not invent a German proficiency threshold or silently replace Dutch with German. Organisation and presentation are also explicit professional skills. Generic can-do attitude is excluded.

### Recovered vacancy input

```text
Job description
We are looking for a German-speaking or a Dutch-speaking Recruiter! Join us in Lisbon or Porto!
About the company
Our client is a strong global leader in business process outsourcing (BPO). They continue to specialize in customer experience outsourcing, and their capabilities extend across voice, social and digital channels. They strive on a daily basis to improve the services delivered to their clients by putting their employees at the heart of the company. Your ideas and suggestions will be welcomed as you will help them grow and advance! You will join a team of over 500 employees of 35 nationalities! 
As a  Recruiter , you will:
Attract candidates by using databases, social media, job fairs, among others
Conduct interviews to assess applicant's relevant knowledge, skills, experience, and aptitudes
Establish a relationship with different departments and Managers to validate the information
Prepare and onboard the new employees to become fully integrated into the company
Build a good relationship with candidates during the selection process by becoming a trusted recruiter
Create, update, and maintain analytical reports and databases
We are looking for:
Knowledge of Dutch (C2 level)
English fluency (B2/C1 level)
Advantage: University Degree, preferably in Human Resources or similar
Proven Work Experience in the field - a minimum of 1 year as a recruiter
Strong organization, communication, and presentation skills
Familiarity with recruitment process methods (hiring profile, assessments, interviews, and ongoing follow up)
Familiarity with Applicant Tracking Systems and resume databases
Experience with sourcing techniques
Good understanding of referral programs
A positive and ‘can do’ attitude overlooking a community-building approach
We offer you:
Competitive salary
Private Health Insurance 
Hybrid Work Model Culture
Continuous development and career growth opportunities on a local and global level
Life at our company:
Work with a diverse environment with people from over 58 nationalities
Benefit from our modern amenities, many discounts in local businesses, free language courses, doctor on-site & remote, mental health check and appointments, diverse company events
We promote inter-company mobility to work at any of our sites around the world
Multilingual Jobs Worldwide
Multilingual Jobs Worldwide is a leading recruitment company focusing on connecting multilingual talent with exciting career opportunities worldwide. With a network of 400+ partners in over 40 countries, we have successfully helped more than 7,000 candidates secure their dream jobs.
```

## Test 08 — Dutch Content Moderator, Lisbon

**Source reference:** https://www.multilingualjobsworldwide.com/job/dutch-speaking-social-media-content-moderator-in-lisbon-portugal-6094157

### Original expected checks, copied from log.md

> Secondary diploma, native Dutch, fluent English and regional context knowledge required. Moderation/support and social media experience preferred. Age and work authorization outside the schema.

### Later annotation notes — retrospective

Keep the distinction between the mandatory school diploma and the age/work-permit conditions appearing beside it. Do not invent moderation experience as mandatory. General desire for international work is excluded; eligibility must be retained separately in an operational system.

### Recovered vacancy input

```text
Job description
Work as a Content Moderator for one of the hottest social media applications out there! We are looking for Dutch-speaking talent to join our client’s team in Lisbon!
Do you love social media? Then we might have a great opportunity for you in beautiful Lisbon!
As a Content Moderator, you will work for a famous social media application, screening and monitoring the platform for abusive, violent, or other inappropriate content and ensuring a safe experience for its users and communities!
About the Company
Our client is a globally recognized leader in customer experience management. With a presence in over 80 countries, they specialize in providing top-tier customer support solutions across various industries, ensuring excellence in service and innovation.
What will you do?
Evaluate content based on our client's guidelines and policies.
Review user-made reports that flag offensive postings.
Provide back-office (non-voice) support.
Ensure a quality experience for all users according to our client's terms of service.
Candidate Profile
Native level of Dutch and fluent level of English.
Minimum 18 years of age when training starts and holder of a high school degree.
EU citizen or holder of a valid work permit for Portugal.
High awareness of the cultural and political situation in the market/region you will be supporting.
Previous experience in Content Moderation or Customer Support is not required but desirable.
Experience with Social Media in any way is a plus!
A desire to work in an international environment where you’ll need to embrace different cultures, nationalities, and languages.
Employer Offers
Competitive local salary.
An amazing relocation package!
 Move to Lisbon completely hassle-free.
Shared (permanent) accommodation with own private room (move in one week before starting to settle in).
Airport pick-up.
Initial flight expenses refunded after contract signature.
Free annual flight to your home country.
Free health insurance (starting from contract signing).
Assistance with registration at the tax office, getting a phone number, and opening a bank account.
Free Portuguese language courses, water sports, soft trekking, and more!
Intensive (paid) training.
Opportunity to grow and evolve within the organization.
About Lisbon
Lisbon, the sun-kissed capital of Portugal, is famous for its stunning coastal views, rich history, and vibrant lifestyle. With a warm climate, friendly locals, and a low cost of living compared to other European capitals, it's an attractive destination for expats. The city boasts excellent public transport, delicious cuisine, and an exciting nightlife, making it the perfect place to work and live!
About Multilingual Jobs Worldwide
Multilingual Jobs Worldwide is a leading recruitment company focusing on connecting multilingual talent with exciting career opportunities worldwide. With a network of 400+ partners in over 40 countries, we have successfully helped more than 7,500 candidates secure their dream jobs.
```

## Test 09 — Technical Support Team Leader, Lisbon

**Source reference:** https://www.multilingualjobsworldwide.com/job/dutch-slash-flemish-speaking-team-leader-in-lisbon-portugal-6094131

### Original expected checks, copied from log.md

> Dutch/Flemish C1/C2, good English, at least two years leading technical support, KPI experience, leadership, coaching, communication and problem-solving required. Education and preferred fields empty.

### Later annotation notes — retrospective

Retain the source wording for Dutch and Flemish, its C1/C2 qualifier and the two-year minimum. People management is explicitly included. No degree or preferred qualification is stated.

### Recovered vacancy input

```text
Job description
Are you an experienced Team Leader with a strong background in technical support? Our client is looking for a Dutch and Flemish-speaking Technical Support Team Leader to join a growing international project based in Lisbon, Portugal.
Lead, coach, and develop a team of Technical Support Advisors while driving performance and delivering an outstanding customer experience. This is an excellent opportunity to develop your leadership career in a dynamic and multicultural environment.
About the company
Our client is a global provider of business process outsourcing (BPO) solutions, specializing in customer service, sales, and technical support. With operations in more than 20 countries, they employ over 130,000 professionals delivering high-quality services for major international brands across diverse industries.
What will you do?
Lead, motivate, and coach a team of Technical Support Advisors
Monitor team performance and ensure KPIs and quality targets are achieved
Conduct regular one-to-one meetings, coaching sessions, and performance reviews
Support the team with technical escalations and complex cases
Collaborate with Operations, Quality, and Training teams to drive continuous improvement
Create a positive, customer-focused, and high-performing team environment
Candidate profile
Native or fluent Dutch and Flemish (C1/C2)
Good command of English
Minimum 2 years of experience as a Team Leader in a Technical Support environment
Strong leadership, coaching, and people management skills
Excellent communication and problem-solving abilities
Experience working in a KPI-driven environment
Employer offers
Opportunity to join a growing international project
Competitive benefits package
Paid onboarding and continuous training
Career development opportunities
Dynamic and multicultural work environment
Multilingual Jobs Worldwide
Multilingual Jobs Worldwide is a leading recruitment company focusing on connecting multilingual talent with exciting career opportunities worldwide. With a network of 400+ partners in over 40 countries, we have successfully helped more than 6,500 candidates secure their dream jobs.
```

## Test 10 — German Sales Development Representative, Gothenburg

**Source reference:** https://www.multilingualjobsworldwide.com/job/german-speaking-sales-development-representative-to-gothenburg-sweden-6094122

### Original expected checks, copied from log.md

> German native/near-native, fluent English and high-volume cold calling required. B2B/SDR, CRM, SaaS/tech/logistics and Swedish preferred.

### Later annotation notes — retrospective

Do not assign CEFR values to these languages. Keep the bonus qualifications preferred; mentioning HubSpot in duties does not override its explicit bonus status. Relocation and generic resilience/drive are excluded. Concrete multitasking may be retained separately from generic proactivity.

### Recovered vacancy input

```text
Job description
Do you want to be part of a high-energy sales team and kick-start your B2B sales career? Our client is looking for German-speaking Sales Development Representatives to join their growing team in Gothenburg!
Take on a role where cold calling becomes your superpower, and your drive sets the pace. Work closely with sales executives, qualify leads, and help shape the company’s expansion into the German market. Relocation support is available for the right candidate.
About the company
Sendify helps ambitious small businesses ship smarter. They integrate real-time pricing, booking, and tracking into a streamlined interface, freeing clients to focus on their business instead of logistics. Proudly Great Place to Work-certified, they are building not only a smart product but also an inclusive, thriving workplace.
What will you do?
Prospect and identify new B2B customers in the German market
Make a high volume of daily cold calls to generate qualified leads
Book meetings with potential clients and hand them over to Sales Executives
Qualify inbound and outbound leads to build a high-quality sales pipeline
Track your activities and performance in HubSpot CRM
Collaborate closely with the Sales team to improve conversion
Meet weekly and monthly KPIs
Celebrate wins with your energetic team
Candidate profile
Driven, resilient, and goal-oriented
Thrives in fast-paced, target-driven environments
Comfortable with high-volume cold calling
Structured and proactive multitasker
Fluent in German (native or near-native) and English
Open to relocation or already based in Gothenburg
Bonus: experience in B2B sales or SDR role
Bonus: familiarity with HubSpot or other CRMs
Bonus: background in SaaS, tech, or logistics
Bonus: speaks Swedish
Employer offers
Occupational pension
Wellness allowance
Private health & accident insurance
Parental leave top-up
30 vacation days
Supportive, low-ego, high-growth environment
Relocation support to Gothenburg
About Gothenburg
Gothenburg offers the perfect mix of urban lifestyle and natural beauty, from a buzzing tech scene to picturesque coastal landscapes. Enjoy Sweden’s strong social infrastructure, excellent public services, and a vibrant international community in one of Scandinavia’s most livable cities.
Worldwiders Recruitment
Worldwiders is a global recruitment company specializing in executive search and specialist recruitment worldwide. Since our journey began in 2016, we have become a trusted partner for tailor-made recruitment solutions, connecting top talent with prestigious opportunities across the globe. With a proven track record of more than 7,000 successful placements and 400+ satisfied partners in over 40 countries, our expertise ensures we match the right talent with the right company to drive career growth and organizational success.
Worldwiders also serves as the umbrella organization behind our specialized recruitment brands, Nordic Jobs Worldwide and Multilingual Jobs Worldwide. Each brand focuses on specific markets and talent segments, enabling us to deliver highly targeted recruitment solutions while benefiting from the global reach, expertise, and network of the Worldwiders group.
```

*AI-use disclosure: ChatGPT assisted with compiling the recovered inputs and drafting the clearly labelled retrospective notes. This compilation adds no new model runs or performance claims.*

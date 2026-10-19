/* =========================================================
   Chapter 2 · Lesson 3 Quiz data (Incident Response and Risk Management)
   Source: Egyptian Baccalaureate - Programming and AI, Lesson 2-3 (all periods and models A/B/C)
   MCQ: [question, [A,B,C,D], correctIndex, why]
   ESSAY: [question, modelAnswerHTML, [[label, [regex...], minNeeded], ...]]
   ========================================================= */
const MCQ7 = [
  ["An attack or event that makes a service unavailable is primarily an example of:",
    ["Image compression", "Data visualization", "Service interruption", "Software licensing"], 2,
    "Service interruption affects availability: users cannot reach the service (for example, a DDoS attack on a website)."],
  ["What is the first stage in a standard incident-response process?",
    ["Recovery", "Eradication", "Lessons learned", "Preparation"], 3,
    "Preparation comes first and happens before any incident: plans, roles, training and tools are set up in advance."],
  ["Which stage aims to limit the spread and damage of an incident before the root cause is fully removed?",
    ["Preparation", "Recovery", "Containment", "Lessons learned"], 2,
    "Containment stops the incident from spreading (isolate devices, disable accounts) while the team prepares to remove the cause."],
  ["A simple risk score is commonly expressed as:",
    ["Impact × Likelihood", "Speed + Storage", "Users / Passwords", "Cost − Time"], 0,
    "Risk = Impact × Likelihood: how bad the damage would be, multiplied by how probable it is."],
  ["Which stage restores systems and services to normal operation after the threat has been removed?",
    ["Detection", "Recovery", "Preparation", "Containment"], 1,
    "Recovery brings systems back safely (clean backups, testing, close monitoring) once the threat is gone."],
  ["Which stage reviews what happened, identifies improvements, and updates future procedures?",
    ["Initial detection", "Encryption", "Authentication", "Lessons learned and improvement"], 3,
    "Lessons learned reviews the incident and updates plans and controls so the next response is better."],
  ["A risk with both high impact and high likelihood should generally receive:",
    ["Low priority", "No attention", "High priority", "Automatic acceptance"], 2,
    "High impact × high likelihood = the highest risk level, so it is addressed first."],
  ["In risk assessment, \"impact\" means:",
    ["The degree of damage or consequence if the event occurs.", "How often a website is refreshed.", "The number of colors in a design.", "The speed of a CPU."], 0,
    "Impact = how severe the damage or consequence would be if the event happens."],
  ["Which is a security incident?",
    ["Normal software update", "Unauthorized disclosure of sensitive data", "Saving a document correctly", "Printing a worksheet"], 1,
    "A security incident threatens confidentiality, integrity or availability. Unauthorized disclosure of data is information leakage."],
  ["Which stage removes malware, compromised accounts, or the root cause after containment?",
    ["Preparation", "Detection", "Eradication", "Planning a website"], 2,
    "Eradication removes the root cause (malware, bad accounts, the exploited weakness) after the incident has been contained."],
  ["Unauthorized modification of stored information is:",
    ["Service recovery", "Web design", "Authentication", "Data tampering"], 3,
    "Data tampering attacks integrity: stored data is changed without permission."],
  ["In risk management, \"likelihood\" means:",
    ["The amount of damage after the event occurs.", "How probable it is that the event will occur.", "The number of users on a website.", "The size of a file."], 1,
    "Likelihood = probability that the event happens. The amount of damage is the impact."],
  ["Unauthorized exposure of confidential information is:",
    ["Information leakage", "Recovery", "Compression", "Design thinking"], 0,
    "Information leakage attacks confidentiality: private data is exposed to people who should not see it."],
  ["Which stage updates plans and controls based on what was learned from the incident?",
    ["Detection", "Lessons learned and improvement", "Initial preparation only", "File upload"], 1,
    "The last stage feeds what was learned back into policies, plans and security controls."],
  ["A risk with high impact but low likelihood is commonly treated as:",
    ["No risk at all", "Always the highest possible risk", "A design problem only", "A medium-level risk requiring consideration"], 3,
    "It is unlikely but costly if it happens, so it ends up at a medium level and still needs to be considered."],
  ["Which stage identifies that suspicious activity or a security event has occurred?",
    ["Detection", "Recovery", "Lessons learned", "Eradication"], 0,
    "Detection notices and confirms a security event, using logs, alerts, monitoring tools or user reports."],
];

const ESSAY7 = [
  ["Define a security incident and give examples such as information leakage, data tampering, or service interruption.",
    "A <b>security incident</b> is any event that <b>threatens the confidentiality, integrity or availability</b> of information or systems, whether it is an actual breach or a violation of security policy.<ul><li><b>Information leakage:</b> unauthorized disclosure of confidential data (e.g. customer records published online).</li><li><b>Data tampering:</b> unauthorized modification of stored data (e.g. changing grades or account balances).</li><li><b>Service interruption:</b> an attack or failure that makes a service unavailable (e.g. a DDoS attack).</li></ul>",
    [["Definition: an event that threatens data or systems", ["event|attack|breach|violation|threat|incident", "confidential|integrity|availab|secur|data|system"], 2], ["Example: information leakage", ["leak|disclos|expos"], 1], ["Example: data tampering", ["tamper|modif|alter|chang"], 1], ["Example: service interruption", ["interrupt|unavailab|ddos|denial|down|outage"], 1]]],

  ["Compare information leakage, data tampering, and service interruption as security incidents.",
    "<ul><li><b>Information leakage</b> affects <b>confidentiality</b>: private information is exposed (e.g. private files).</li><li><b>Data tampering</b> affects <b>integrity</b>: stored data is changed without permission (e.g. altering database records).</li><li><b>Service interruption</b> affects <b>availability</b>: the service cannot be used (e.g. a server taken down by DDoS).</li></ul>Each one attacks a different security property.",
    [["Leakage = confidentiality", ["confidential"], 1], ["Tampering = integrity", ["integrity"], 1], ["Interruption = availability", ["availab"], 1], ["Gives an example for them", ["ddos|database|record|file|server|grade|balance|customer|website|example|e\\.g"], 1]]],

  ["List the six stages of incident response and explain the preparation and detection stages.",
    "<b>The six stages:</b><ol><li>Preparation</li><li>Detection</li><li>Containment</li><li>Eradication</li><li>Recovery</li><li>Lessons learned and improvement</li></ol><b>Preparation</b> happens <b>before any incident</b>: writing response plans and policies, training staff, assigning roles, and setting up tools such as firewalls, monitoring and backups.<br><b>Detection</b> means <b>identifying that a security event or suspicious activity has occurred</b> (using logs, alerts, IDS/antivirus or user reports), confirming whether it is a real incident and judging how serious it is.",
    [["Lists the stages (at least 5 of 6)", ["preparation", "detection", "containment", "eradication", "recovery", "lesson"], 5], ["Preparation: plans, training, tools before an incident", ["before|advance|prior", "plan|polic|train|tool|backup|role|team|awareness"], 2], ["Detection: identifying / confirming a security event", ["identif|discover|notice|recogni|confirm|determin", "log|alert|monitor|ids|antivirus|report|suspicious|event|activity"], 2]]],

  ["Explain the preparation and containment stages.",
    "<b>Preparation:</b> building <b>plans, teams, tools and awareness in advance</b> so the organization can respond quickly and effectively when an incident happens.<br><b>Containment:</b> <b>limiting the spread and damage</b> of the incident, for example by <b>isolating infected devices</b>, disconnecting network segments or disabling compromised accounts.",
    [["Preparation: plans, teams, tools set up in advance", ["before|advance|prior", "plan|polic|train|tool|backup|role|team|awareness"], 2], ["Preparation helps a quick, effective response", ["quick|fast|effective|ready|prepared|rapid|efficient"], 1], ["Containment: limit the spread and damage", ["limit|stop|prevent|isolat|restrict|contain", "spread|damage|further|grow"], 2], ["Example: isolate devices / disable accounts", ["isolat|disconnect|disable|quarantine|block"], 1]]],

  ["Explain the detection and eradication stages.",
    "<b>Detection:</b> <b>discovering and confirming</b> that an incident has happened, then determining its <b>type and scope</b> (how serious it is and what is affected).<br><b>Eradication:</b> <b>removing the root cause after containment</b>, for example deleting malware, closing the exploited vulnerability, and removing or resetting compromised accounts.",
    [["Detection: discover / confirm the incident", ["discover|identif|detect|notice|confirm|aware"], 1], ["Determine its type, scope or severity", ["scope|type|severity|serious|size|affect|assess"], 1], ["Eradication: remove the root cause", ["remov|eliminat|delet|clean|eradicat", "root|cause|malware|threat|virus|account|vulnerab"], 2], ["Examples: malware, vulnerability, accounts", ["malware|vulnerab|patch|reset|password|account|close"], 1], ["Eradication comes after containment", ["after|following|once|containment"], 1]]],

  ["Compare containment and eradication, and explain why they are different stages.",
    "<ul><li><b>Containment:</b> goal is to <b>stop the spread and limit the damage</b>. It is a <b>short-term, immediate</b> action (e.g. isolate the infected PC from the network).</li><li><b>Eradication:</b> goal is to <b>remove the root cause</b>. It is a <b>thorough cleanup</b> (e.g. remove the malware and patch the vulnerability).</li></ul>They are different stages because <b>stopping the damage from growing</b> is a separate objective from <b>fully removing the threat</b>, and each needs different actions and tools.",
    [["Containment: stop the spread / limit damage", ["limit|stop|prevent|isolat|restrict|contain", "spread|damage|further|grow"], 2], ["Eradication: remove the root cause", ["remov|eliminat|delet|clean|eradicat", "root|cause|malware|threat|virus|vulnerab"], 2], ["Containment is immediate/short-term, eradication is thorough", ["immediate|short|first|quick|temporary|urgent|thorough|complete|permanent|full"], 1], ["Different goals / actions", ["differ|separate|goal|objective|purpose|tools|actions"], 1]]],

  ["Why is containment usually performed before eradication? Explain the logic of the sequence.",
    "While the threat is <b>still spreading</b>, trying to clean it up may <b>fail or be undone</b>, because the attacker or malware can keep infecting other systems.<br>Containing the incident first <b>stops the damage from growing</b> and gives the team a <b>stable situation</b> to study the threat. They can then <b>remove it completely</b> without it reappearing.",
    [["The threat may still be spreading / active", ["spread|still|continue|active|reinfect|come back|reappear|undone|fail|ongoing"], 1], ["Containment stops the damage from growing", ["stop|limit|prevent|isolat|contain", "damage|spread|grow|further"], 2], ["Gives a stable situation to study the threat", ["stable|study|analy[sz]|investigat|understand|evidence|time|scope"], 1], ["Then it can be removed completely without returning", ["complete|fully|entire|thorough|without|not return|reappear|come back|permanent|remov"], 1]]],

  ["Explain the recovery and lessons-learned (improvement) stages of incident response.",
    "<b>Recovery:</b> <b>restoring systems and services to normal operation</b> after the threat has been removed, for example by restoring from clean backups, testing the systems and monitoring them closely.<br><b>Lessons learned:</b> <b>reviewing what happened</b>, what worked and what did not, and the root causes. The team then <b>updates policies, plans and controls</b> and trains staff to prevent or better handle future incidents.",
    [["Recovery: restore systems/services to normal", ["restor|bring|return|back", "normal|operation|service|system"], 2], ["How: clean backups, testing, monitoring", ["clean|backup|test|monitor|verif"], 1], ["Lessons learned: review what happened", ["review|analy[sz]|evaluat|study|what happened|assess"], 1], ["Update plans, controls, training", ["updat|improv|plan|polic|control|train|procedure|prevent"], 1]]],

  ["Explain the recovery and lessons-learned stages in a ransomware incident.",
    "<b>Recovery:</b> after isolating and removing the ransomware, <b>restore the encrypted files from clean, verified backups</b>, rebuild affected systems, check that they are free of malware, and bring services back gradually while monitoring.<br><b>Lessons learned:</b> find out <b>how the ransomware got in</b> (for example a phishing email). Then improve backups, apply patches, strengthen email filtering, train users and update the incident-response plan.",
    [["Recovery: restore files from clean backups", ["backup", "restor|recover|clean"], 2], ["Rebuild / verify / bring back gradually with monitoring", ["rebuild|reinstall|verif|check|test|monitor|gradual|clean"], 1], ["Lessons learned: find how it got in", ["how|entry|phishing|vulnerab|cause|source|root|got in"], 1], ["Improvements: patches, filtering, training, plan update", ["patch|filter|train|updat|improv|plan|awareness|backup"], 1]]],

  ["Why is the lessons-learned stage important after an incident has been handled?",
    "It <b>turns the incident into experience</b>. It <b>reveals weaknesses and gaps</b> in the response, <b>improves plans and controls</b>, <b>reduces the chance of repeat incidents</b>, and makes future responses faster and more effective.",
    [["Turns the incident into learning / experience", ["learn|experience|knowledge|understand|insight"], 1], ["Reveals weaknesses and gaps", ["weakness|gap|vulnerab|flaw|mistake|problem|shortcoming"], 1], ["Improves plans and controls", ["improv|updat|strengthen|enhance|plan|polic|control"], 1], ["Reduces repeat incidents / faster future response", ["repeat|prevent|future|again|reduce|faster|quicker|better|effective"], 1]]],

  ["Explain why incident-response stages may overlap or be repeated in real incidents instead of always happening once in a perfectly straight line.",
    "Real incidents are <b>not perfectly linear</b>.<ul><li>New evidence during containment or eradication may show that the <b>scope is larger</b> than first thought, which sends the team <b>back to detection</b>.</li><li>Containment may <b>continue while eradication begins</b> (overlap).</li><li>Recovery may reveal <b>remaining infections</b> that need more eradication.</li><li>Lessons learned <b>feed back into preparation</b>.</li></ul>So the process is <b>iterative and flexible</b>.",
    [["Not a straight line: iterative / flexible", ["linear|straight|not always|iterative|cycle|loop|flexible|repeat|overlap"], 1], ["New evidence shows a larger scope, so go back to detection", ["new|additional|more|further|discover|evidence|larger|bigger", "detect|scope|back|return|again"], 2], ["Stages can run at the same time", ["while|during|same time|simultaneous|alongside|at once|concurrent|parallel|continue"], 1], ["Recovery may reveal remaining infections", ["remain|still|leftover|infect|reappear|missed|again"], 1], ["Lessons learned feed back into preparation", ["feed|prepar|improv|updat|lesson"], 1]]],

  ["Explain the risk-score idea and the two factors used in the expression Risk = Impact × Likelihood.",
    "A <b>risk score</b> is a numerical or relative value that expresses <b>how serious a risk is</b>, so that risks can be <b>compared and prioritized</b>.<ul><li><b>Impact:</b> how much <b>damage or consequence</b> occurs if the event happens.</li><li><b>Likelihood:</b> how <b>probable</b> it is that the event will occur.</li></ul>The two are <b>multiplied</b>: the higher each factor is, the higher the overall risk.",
    [["Risk score shows how serious a risk is / lets us prioritize", ["serious|level|size|value|number|score|measure|compar|priorit|rank"], 1], ["Impact = damage or consequence", ["impact", "damage|consequence|harm|loss|severity|effect"], 2], ["Likelihood = probability of occurring", ["likelihood|probab|chance", "occur|happen|likely|probab|chance"], 2], ["The two are multiplied", ["multipl|×|\\*|product|times|\\bx\\b"], 1], ["Higher factors give higher risk", ["higher|increase|greater|more|larger|bigger|high"], 1]]],

  ["Explain the difference between impact and likelihood in risk management.",
    "<b>Impact</b> measures the <b>severity of the damage</b> if the event happens. <b>Likelihood</b> measures the <b>probability</b> that it happens at all.<br>A risk can have <b>high impact but low likelihood</b> (such as a data-center fire) or <b>low impact but high likelihood</b> (such as spam emails). Both are combined to rate the risk.",
    [["Impact = severity of the damage", ["impact", "damage|consequence|harm|loss|severity|effect|serious"], 2], ["Likelihood = probability it happens", ["likelihood|probab|chance", "occur|happen|likely|probab|chance"], 2], ["Gives an example (e.g. high impact, low likelihood)", ["fire|spam|example|e\\.g|high impact|low likelihood|low impact|high likelihood|such as|for instance"], 1], ["Both are combined to rate the risk", ["combin|together|multipl|both|risk"], 1]]],

  ["Explain how a risk matrix helps prioritize security risks, and how it combines impact and likelihood.",
    "A <b>risk matrix</b> is a <b>grid with likelihood on one axis and impact on the other</b>. Each risk is <b>placed in the cell</b> that matches its two values, and the cell shows the <b>risk level</b> (low, medium, high). This lets the organization <b>see and compare</b> risks visually.<br>Risks with <b>high impact and high likelihood</b> get the <b>highest priority</b> and are handled first, while low-impact, low-likelihood risks can <b>wait or be accepted</b>. This helps <b>allocate limited time and budget</b> to the most important risks.",
    [["Grid with likelihood on one axis and impact on the other", ["grid|table|matrix|chart|axis|axes|row|column|map|diagram", "likelihood|probab", "impact|severity|consequence"], 3], ["Each risk is placed in a cell showing its level", ["place|plot|cell|position|rate|locate|map|assign|classif", "low|medium|high|level|color|colour|zone"], 2], ["High impact + high likelihood = handled first", ["high", "priorit|first|urgent|immediate|top|address"], 2], ["Low risks can wait or be accepted", ["low", "wait|later|accept|monitor|last|lower|less|ignore"], 2], ["Helps allocate limited time/budget", ["resource|budget|time|cost|money|allocate|effort|focus"], 1]]],
];

/* =========================================================
   Chapter 2 · Lesson 2 Quiz data (Network Security Design)
   Source: Egyptian Baccalaureate - Programming and AI, Lesson 2-2 (all periods and models A/B/C)
   MCQ: [question, [A,B,C,D], correctIndex, why]
   ESSAY: [question, modelAnswerHTML, [[label, [regex...], minNeeded], ...]]
   ========================================================= */
const MCQ6 = [
  ["Which statement best describes defense in depth?",
    ["Using only one very strong password.", "Connecting all systems directly to the Internet.", "Using multiple independent security layers so that one failure does not expose the whole system.", "Removing all security controls to improve speed."], 2,
    "Defense in depth = layering several security measures so that if one is breached, the next still protects the system."],
  ["Which device or function filters network traffic according to security rules and can block unauthorized connections?",
    ["Word processor", "Firewall", "Printer driver", "Spreadsheet"], 1,
    "A firewall sits at the entry/exit point of a network and allows or denies traffic based on rules set in advance."],
  ["What is the main purpose of a VPN?",
    ["Making all websites public.", "Replacing every firewall.", "Disabling authentication.", "Creating an encrypted communication tunnel over an untrusted network."], 3,
    "A VPN creates an encrypted virtual private line (tunnel) over the Internet."],
  ["Which is a common use of a VPN?",
    ["Removing passwords from accounts.", "Secure remote work access over the Internet.", "Publishing private databases directly online.", "Turning off encryption on public Wi-Fi."], 1,
    "Main VPN uses: remote work and connecting branch offices safely."],
  ["Which technology is most suitable for securely connecting a remote employee to an organization's network over the Internet?",
    ["Plain FTP", "Unencrypted HTTP", "VPN", "Public social media"], 2,
    "A VPN encrypts the remote user's connection, reducing the risk of eavesdropping."],
  ["Which description of a VPN is correct?",
    ["It is a public area that hosts web servers.", "It is a program that only removes computer viruses.", "It is a rule that automatically trusts every internal user.", "It creates an encrypted tunnel for network communication over an untrusted network."], 3,
    "That is the definition of a VPN. A public area for servers is a DMZ."],
  ["What is a DMZ in network security?",
    ["A password list.", "A separate network zone for public-facing services that limits direct access to the internal network.", "A cloud storage folder.", "A type of computer virus."], 1,
    "DMZ (Demilitarized Zone) = a separate area for servers exposed to the outside, away from the internal network."],
  ["A separated area used to host public-facing services while protecting the internal network is a:",
    ["Password manager", "Spreadsheet", "Qubit", "DMZ"], 3,
    "Web and mail servers exposed to the Internet are placed in the DMZ."],
  ["What is the central idea of Zero Trust?",
    ["Trust everything inside the network permanently.", "Disable identity checks after first login.", "Never automatically trust users/devices merely because they are inside the network; continuously verify access.", "Give every user administrator privileges."], 2,
    "Zero Trust trusts no communication automatically, even from inside, and always verifies."],
  ["Which security approach assumes that no user or device should be trusted automatically?",
    ["Traditional implicit trust", "No-security model", "Open network model", "Zero Trust"], 3,
    "Zero Trust: identity and access permissions are checked every time."],
  ["The idea that systems and users inside an organization's network boundary can generally be trusted is associated with:",
    ["Traditional security perimeter", "Zero Trust", "Quantum computing", "E-commerce"], 0,
    "The traditional perimeter model assumes inside = safe, outside = dangerous."],
  ["Which is an endpoint security control?",
    ["Publishing passwords online", "Removing all user accounts", "Antivirus software and regular operating-system updates", "Disabling security patches"], 2,
    "Layer 4 (endpoints): install antivirus software and keep the OS updated."],
  ["Which layer includes employee laptops, phones, and workstations?",
    ["Quantum layer", "Endpoint layer", "Printed-media layer", "Payment layer"], 1,
    "Endpoints are the devices users work on: laptops, phones, workstations."],
  ["At the outer network layer, what can block unauthorized traffic according to security rules?",
    ["Spreadsheet formula", "Screen saver", "Image format", "Firewall"], 3,
    "Layer 1 (network entry): a firewall blocks unauthorized communication."],
];

const ESSAY6 = [
  ["Explain the concept of defense in depth, why network security should use multiple protective layers, and how multiple layers reduce the effect of a single security failure.",
    "<b>Defense in depth</b> is the concept of <b>layering multiple security measures</b>. Its goal is that <b>even if one measure is breached, the next one can still protect the system</b>. A single lock on the front door is not enough: if it is picked, everything inside is exposed. With several layers (firewall, VPN, DMZ, endpoint protection) one failure does <b>not</b> expose the whole system, because the attacker still faces other barriers.",
    [["Definition: layering multiple security measures", ["layer|multiple|several|many", "measure|control|security|defen|protect"], 2], ["If one is breached, the next still protects", ["breach|fail|broken|bypass|compromis|picked|fall", "next|another|other|still|remain|backup|barrier"], 2], ["One failure does not expose everything / single point of failure", ["not expose|everything|whole|entire|all|single|one lock|one measure|full access"], 1]]],

  ["Explain the role of a firewall in network security and give an example of how it protects an internal system (such as an internal database).",
    "A <b>firewall</b> is installed at the <b>entry/exit point of a network</b>. It <b>allows or denies communication</b> based on <b>rules set in advance</b>, filtering incoming and outgoing traffic.<br><b>Example:</b> allow access to the <b>web server</b>, but <b>deny direct external access to the database server</b>. So outsiders cannot connect straight to the internal database, which protects it from unauthorized access.",
    [["Installed at the network entry/exit point", ["entry|exit|boundary|gate|edge|between|point|incoming|outgoing"], 1], ["Allows or denies traffic by predefined rules", ["allow|deny|block|filter|permit", "rule|polic|predefined|set in advance|configur"], 2], ["Example: allow web server, block external access to the database", ["web", "database|internal|server"], 2], ["Result: protects internal system from unauthorized access", ["protect|prevent|unauthori|stop|secure|safe"], 1]]],

  ["Define a Virtual Private Network (VPN) and mention two situations in which it is useful.",
    "A <b>VPN (Virtual Private Network)</b> creates an <b>encrypted virtual private line (tunnel) over the Internet</b>, allowing safe connection to a network from a remote location.<br>Useful for:<ol><li><b>Remote work:</b> connecting safely to the organization's network from home or while away.</li><li><b>Connecting branches:</b> linking offices in different locations safely.</li></ol>",
    [["Encrypted tunnel / virtual private line over the Internet", ["encrypt|tunnel|private line|secure", "internet|public|network|untrusted"], 2], ["Safe connection from a remote location", ["remote|safe|secure|away|connect"], 1], ["Use 1: remote work (home / away / public Wi-Fi)", ["remote|home|work|away|wi-?fi|employee|travel"], 1], ["Use 2: connecting branches / offices", ["branch|office|location|site|company|different"], 1]]],

  ["Explain how a VPN protects communication when an employee connects through public Wi-Fi, works remotely, or uses any untrusted network.",
    "A VPN builds an <b>encrypted tunnel</b> between the employee's device and the organization's network. Because the <b>communication content is encrypted</b>, anyone on the same public Wi-Fi who intercepts the traffic <b>cannot read it</b>. This <b>reduces the risk of eavesdropping</b> and lets the remote employee connect <b>safely</b> to the internal network.",
    [["Creates an encrypted tunnel", ["encrypt|tunnel|private line"], 1], ["Intercepted traffic cannot be read by others on public Wi-Fi", ["read|intercept|sniff|listen|capture|see|third|attacker|others", "cannot|can.?t|unable|unreadable|protect|prevent|reduce|not"], 2], ["Reduces eavesdropping risk", ["eavesdrop|spy|listen|snoop|intercept"], 1], ["Safe connection to the organization's network from remote", ["remote|safe|secure|organization|company|network|internal|connect"], 1]]],

  ["Explain the purpose of a DMZ, why public-facing servers are often placed there, and how this limits damage if a server is compromised.",
    "A <b>DMZ (Demilitarized Zone)</b> is an area where servers <b>exposed to the external network</b> (web servers, mail servers, etc.) are placed <b>separately from the internal network</b>.<br>Public-facing servers are the easiest to attack because anyone can reach them. If one is attacked or compromised, the attacker is still <b>stuck in the DMZ</b> and cannot directly reach the internal network, so <b>damage to the internal network is prevented</b>.",
    [["DMZ = separate zone for servers exposed to the outside", ["separate|zone|area|isolat|segment", "public|external|exposed|outside|internet|web|mail"], 2], ["Kept apart from the internal network", ["internal|inside|private|separate|apart"], 1], ["If the server is attacked/compromised...", ["attack|compromis|breach|hack|infect|breach"], 1], ["...damage does not spread to the internal network", ["not|prevent|limit|stop|protect|cannot|can.?t|spread|reach|contain"], 1]]],

  ["Explain how placing mail or web servers in a DMZ helps protect an internal database.",
    "Mail and web servers must be reachable from the Internet, so they are the most exposed. Putting them in the <b>DMZ</b>, separated from the internal network (where the <b>database</b> lives), means that if an attacker takes over one of these servers, they <b>cannot directly access the internal database</b>. Firewall rules between the DMZ and the internal network can further restrict what these servers may reach.",
    [["Mail/web servers are exposed to the Internet", ["exposed|public|internet|external|outside|reachable|public-facing"], 1], ["DMZ keeps them separate from the internal network/database", ["separate|isolat|apart|dmz", "internal|database|inside|private"], 2], ["Even if compromised, attacker cannot reach the database directly", ["compromis|attack|hack|breach|take over", "cannot|can.?t|not|prevent|protect|unable|limit|stop"], 2]]],

  ["Compare traditional perimeter-based security with the Zero Trust approach.",
    "<b>Traditional perimeter security</b> protects the network boundary, assuming <b>\"inside the organization's network is safe, and outside is dangerous\"</b>. Whoever is inside is trusted.<br><b>Zero Trust</b> does <b>not trust any communication</b>, even from inside the network, and <b>always verifies</b> it. Identity and access permissions are checked <b>every time</b>.<br>Zero Trust is better suited to cloud services and remote work, where the boundary between inside and outside is blurred.",
    [["Traditional: protects the perimeter, inside = safe / outside = dangerous", ["perimeter|boundary|border", "inside|internal|trust|safe"], 2], ["Zero Trust: trusts nothing automatically, even inside", ["zero trust|no(thing)? .*trust|never trust|not trust|don.?t trust|distrust", "inside|internal|within|any"], 1], ["Zero Trust: always verifies identity/permissions every time", ["verif|check|authenticat|identity|permission|continuous|every time|always"], 1], ["Why: cloud and remote work blur the boundary", ["cloud|remote|blur|modern"], 1]]],

  ["Explain how Zero Trust makes access decisions based on identity, permissions, device/context, and continuous (repeated) verification.",
    "Zero Trust never assumes a request is safe just because of where it comes from. For <b>every access request</b> it checks:<ul><li><b>Identity:</b> who is the user (login, MFA).</li><li><b>Permissions:</b> is this user allowed to access this particular resource.</li><li><b>Device / context:</b> is the device trusted and secure, and do the location and situation look normal.</li><li><b>Continuous verification:</b> these checks are <b>repeated every time</b>, not just once at login.</li></ul>Example: even a user already inside the office network is verified again.",
    [["Identity is verified", ["identity|who|user|login|authenticat|mfa"], 1], ["Permissions are checked for the resource", ["permission|authori[sz]|allowed|access right|privilege|role"], 1], ["Device / context is considered", ["device|context|location|time|situation|health|laptop|behavio"], 1], ["Verification repeated continuously / every time", ["continu|repeat|every time|each time|always|again|constant|ongoing|every request"], 1]]],

  ["Explain why the traditional idea of a fixed security perimeter has become less effective and less reliable with cloud services and remote work.",
    "The perimeter model assumes \"<b>inside is safe, outside is dangerous</b>\". But with <b>cloud services</b> (data and apps live outside the office network) and <b>remote work</b> (employees connect from home or public places on their own devices), the boundary between \"inside\" and \"outside\" has become <b>blurred</b>. Protecting only the perimeter is therefore <b>insufficient</b>, which is why approaches like <b>Zero Trust</b> are used.",
    [["Perimeter assumes inside = safe, outside = dangerous", ["inside|internal", "safe|trust|dangerous|outside|external"], 2], ["Cloud services move data/apps outside the network", ["cloud"], 1], ["Remote work: users connect from outside", ["remote|home|work from|outside|anywhere|mobile"], 1], ["Boundary is blurred, so perimeter alone is insufficient", ["blur|boundary|border|insufficient|not enough|no longer|less|unclear|disappear"], 1]]],

  ["Describe four layers of defense in depth (network entrance, communication paths, server placement, and endpoint devices) and give a suitable control for each.",
    "<ol><li><b>Layer 1 - Network entry:</b> block unauthorized communication with a <b>firewall</b>.</li><li><b>Layer 2 - Communication path:</b> encrypt communication using a <b>VPN</b>.</li><li><b>Layer 3 - Server placement:</b> separate public-facing servers from the internal network using a <b>DMZ</b>.</li><li><b>Layer 4 - Endpoints:</b> install <b>antivirus software</b> and keep the <b>OS updated</b>.</li></ol>",
    [["Layer 1: network entry with firewall", ["firewall"], 1], ["Layer 2: communication path with VPN / encryption", ["vpn|encrypt|tunnel"], 1], ["Layer 3: server placement with DMZ", ["dmz|separate|demilitari"], 1], ["Layer 4: endpoints with antivirus / OS updates", ["antivirus|anti-virus|update|patch|endpoint|malware"], 1]]],

  ["Explain how firewall, VPN, DMZ, and endpoint controls can be integrated into one defense-in-depth design.",
    "Each control guards a <b>different layer</b>, so together they form one design:<ul><li>The <b>firewall</b> at the network entry blocks unauthorized traffic.</li><li>The <b>VPN</b> encrypts communication over the Internet so remote users connect safely.</li><li>The <b>DMZ</b> separates public-facing servers from the internal network.</li><li><b>Endpoint controls</b> (antivirus, OS updates) protect laptops and phones.</li></ul>If an attacker gets past one layer, the next one still protects the system, so no single failure exposes everything.",
    [["Firewall at the entry blocks unauthorized traffic", ["firewall", "block|filter|entry|traffic|unauthori"], 2], ["VPN encrypts communication", ["vpn", "encrypt|tunnel|remote|safe"], 2], ["DMZ separates public servers from internal network", ["dmz", "public|server|separate|internal"], 2], ["Endpoint: antivirus + updates", ["antivirus|anti-virus|update|patch|endpoint"], 1], ["Together: if one fails, the next still protects", ["together|combined|layer|if one|next|another|still|multiple"], 1]]],
];

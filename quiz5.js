/* =========================================================
   Chapter 2 · Lesson 1 Quiz data (Cryptographic Technologies and Authentication)
   Source: Egyptian Baccalaureate - Programming and AI, Lesson 2-1 (all periods and models A/B/C)
   MCQ: [question, [A,B,C,D], correctIndex, why]
   ESSAY: [question, modelAnswerHTML, [[label, [regex...], minNeeded], ...]]
   ========================================================= */
const MCQ5 = [
  ["Which type of encryption is mainly used to encrypt large amounts of session data quickly after a secure connection has been established?",
    ["Public-key encryption", "Hashing only", "Symmetric-key encryption", "Plain-text transmission"], 2,
    "Symmetric (common-key) encryption is fast, so it protects the bulk of the data after the handshake."],
  ["Which process establishes a secure connection and verifies the identity of the server/domain before encrypted communication begins?",
    ["Web search", "TLS handshake", "File compression", "Database indexing"], 1,
    "The TLS handshake verifies the server (via its certificate) and agrees on the keys before data is sent."],
  ["Which pair correctly combines a knowledge factor and a possession factor?",
    ["Password + second password", "Fingerprint + face recognition", "Password + one-time code sent to a phone", "Two security questions"], 2,
    "Password = knowledge. A one-time code sent to your phone = possession (you have the phone)."],
  ["Which statement accurately describes multi-factor authentication (MFA)?",
    ["It always uses two passwords.", "It only uses biometric information.", "It does not require identity verification.", "It uses two or more factors from different authentication categories."], 3,
    "MFA combines two or more factors from DIFFERENT categories: knowledge, possession, biometric."],
  ["What is the main role of a digital certificate in HTTPS?",
    ["Compressing webpage images.", "Verifying the identity of the server/domain and binding it to a public key.", "Replacing all passwords.", "Speeding up the processor."], 1,
    "A certificate (vouched for by a CA) proves the site is genuine and ties its identity to its public key."],
  ["What can a digital signature help provide?",
    ["Faster Wi-Fi speed only.", "Anonymous browsing without encryption.", "Automatic deletion of all malware.", "Detection of tampering, proof of origin, and support for non-repudiation."], 3,
    "Digital signature: detects tampering, proves who sent it, and the sender cannot deny sending it (non-repudiation)."],
  ["What is the main purpose of encryption during online communication?",
    ["To prevent unauthorized parties from reading intercepted data.", "To make all websites load instantly.", "To remove the need for authentication.", "To make every message public."], 0,
    "Encryption makes intercepted data unreadable to third parties."],
  ["Which is NOT a proper 2FA combination because both items are from the same factor category?",
    ["Password + one-time code on a phone", "Password + a second secret password", "Password + fingerprint", "PIN + hardware security token"], 1,
    "Password and a second secret password are both knowledge factors. 2FA needs two different categories."],
  ["Which protocol indicates that a website connection is protected using TLS?",
    ["HTTP", "FTP without encryption", "Plain text", "HTTPS"], 3,
    "HTTPS = HTTP + TLS encryption."],
  ["Which authentication method adds a second independent factor to a password?",
    ["Single sign-on without verification", "2FA", "Guest access", "Anonymous login"], 1,
    "Two-factor authentication (2FA) adds a second, independent factor to the password."],
  ["Which technology verifies that data has not been altered and can prove who signed it?",
    ["Cache", "Cookie", "Digital signature", "DNS only"], 2,
    "A digital signature detects tampering and proves the signer's identity."],
  ["Which combination gives the strongest general protection for an online service?",
    ["A long webpage title only", "Encryption, certificates, digital signatures, and multi-factor authentication", "Fast Internet only", "One password reused everywhere"], 1,
    "Security comes from combining several technologies, not from one alone."],
  ["Encryption that uses a public key and a private key is called:",
    ["Symmetric encryption", "Plain-text encoding", "Public-key encryption", "File compression"], 2,
    "Public-key (asymmetric) encryption uses a key pair: public key and private key."],
  ["A document that binds a public key to the identity of a server/domain is a:",
    ["Firewall rule", "Digital certificate", "Session cookie", "Backup file"], 1,
    "That is exactly what a digital certificate does."],
  ["Which is a possession factor?",
    ["A password memorized by the user", "A fingerprint", "A security question answer", "A security token or registered phone"], 3,
    "Possession = something you have: a token, smart card or registered phone."],
  ["E-commerce security is strongest when it combines:",
    ["One password only", "A fast processor only", "Encryption, certificates, digital signatures, and 2FA/MFA", "A public social-media account"], 2,
    "Layering encryption, certificates, signatures and MFA protects an e-commerce service best."],
  ["The process in which a browser and server agree on secure communication parameters before exchanging protected data is the:",
    ["Page refresh", "DNS cache", "Image rendering process", "TLS handshake"], 3,
    "The TLS handshake agrees on the secure parameters and keys before protected data is exchanged."],
  ["Authentication using two or more different categories of factors is:",
    ["Single-factor authentication", "Multi-factor authentication (MFA)", "Plain HTTP", "Anonymous access"], 1,
    "That is the definition of multi-factor authentication."],
  ["Which is a biometric factor?",
    ["Password", "Hardware token", "Fingerprint or face recognition", "One-time code on a phone"], 2,
    "Biometric = something you are: fingerprint, face, etc."],
  ["Secure Internet communication generally relies on:",
    ["One password only", "High network speed only", "Publicly sharing security keys", "A combination of encryption, authentication, certificates, and related security mechanisms"], 3,
    "Secure communication depends on combining several mechanisms."],
];

const ESSAY5 = [
  ["Explain how HTTPS protects communication on the Internet, and describe the steps of the TLS handshake and the role of the server's digital certificate until application data is transmitted securely.",
    "<b>HTTPS = HTTP + TLS encryption.</b> It provides encryption, tamper detection and verification of the communication partner, protecting against eavesdropping, tampering and impersonation.<br>The <b>TLS handshake</b> sets this up in 3 stages:<ol><li><b>Connection:</b> the server sends its <b>digital certificate + public key</b>; the browser verifies it through the <b>CA</b> (this proves the server is genuine).</li><li><b>Key exchange:</b> the browser creates a <b>common (session) key</b>, encrypts it with the server's public key and sends it; the server decrypts it with its <b>private key</b>.</li><li><b>Data:</b> the application data is encrypted and exchanged using the shared <b>common key</b>.</li></ol>",
    [["HTTPS = HTTP + TLS / encryption", ["https|tls|encrypt"], 1], ["Protects against eavesdropping / tampering / impersonation", ["eavesdrop|tamper|impersonat|read by|intercept|spoof"], 1], ["Server sends digital certificate + public key, verified by CA", ["certificate", "public key|public-key|ca\\b|authority"], 2], ["Browser creates a common/session key and sends it encrypted with the public key", ["common key|session key|symmetric|shared key", "encrypt"], 2], ["Data then encrypted with the common key", ["data", "common key|session key|symmetric|shared key"], 2]]],

  ["Compare symmetric-key (common-key) encryption and public-key encryption in terms of speed and typical use, and explain how both are used during HTTPS communication.",
    "<b>Symmetric (common-key):</b> <b>fast</b>, good for <b>large data</b>, but <b>less safe</b> because the same key must be shared.<br><b>Public-key:</b> uses a public/private key pair, can <b>share a key safely</b> and suits <b>small data</b>, but is <b>slow</b>.<br>In HTTPS, <b>public-key encryption</b> is used at the start (certificate and secure key exchange), then <b>common-key encryption</b> protects the actual data quickly.",
    [["Symmetric: fast / large data", ["fast|quick|speed", "large|bulk|big|session|data"], 1], ["Symmetric: same key shared (less safe)", ["same key|one key|shared|common key|less safe|less secure|key sharing"], 1], ["Public-key: slow / small data / shares key safely", ["slow|small|safely|securely|public.*private|key pair"], 1], ["HTTPS: public-key for key exchange, then common-key for data", ["handshake|exchange|start|first|begin", "common|symmetric|session|data"], 2]]],

  ["Explain why public-key encryption is relatively slow and why session keys are then used for bulk data.",
    "Public-key encryption involves heavy mathematical operations with a key pair, so it is <b>relatively slow</b> and only practical for <b>small amounts of data</b> (such as sharing a key). <b>Common (session) key</b> encryption is <b>fast</b> and good for large data. So HTTPS uses public-key encryption only to <b>share the session key safely</b>, then uses that fast session key to encrypt all the bulk data.",
    [["Public-key is slow (complex math / key pair)", ["slow|complex|heavy|math|computation|expensive"], 1], ["Good only for small data / sharing keys", ["small|key|few"], 1], ["Session/common key is fast for large data", ["fast|quick|efficient", "session|common|symmetric|bulk|large"], 2], ["Public-key shares the session key, then session key encrypts data", ["share|exchange|send|protect", "session|common|symmetric"], 2]]],

  ["Explain the role of a digital certificate and the public key in starting a secure TLS connection.",
    "The server sends its <b>digital certificate</b>, which contains its <b>public key</b> and binds it to the identity of the server/domain. The browser checks the certificate through a <b>Certificate Authority (CA)</b>, which vouches that the site is genuine. Once trusted, the browser uses the <b>public key</b> to <b>encrypt the common key</b> it creates, so only the server (with its private key) can read it.",
    [["Certificate proves the server/domain identity", ["identity|genuine|authentic|verif|prove|trust"], 1], ["Certificate binds / contains the public key", ["public key|public-key|bind|contain"], 1], ["Verified through a CA", ["ca\\b|authority|vouch|issued"], 1], ["Public key used to encrypt the common key; private key decrypts", ["encrypt", "common key|session key|symmetric|shared key|private key"], 2]]],

  ["Explain how a digital certificate and certificate chain help users trust the identity of a server.",
    "A <b>digital certificate</b> binds the server's <b>public key</b> to its <b>domain identity</b>. It is issued and signed by a <b>Certificate Authority (CA)</b>. The browser follows the <b>certificate chain</b> (server certificate, then intermediate CA, then a trusted root CA already built into the browser) and checks each signature. If the whole chain is valid, the browser can trust that the server is <b>genuine</b>, not an impersonator.",
    [["Certificate binds public key to server/domain identity", ["bind|identity|domain|public key|public-key"], 1], ["Issued/signed by a Certificate Authority", ["ca\\b|authority|issued|signed|vouch"], 1], ["Chain leads to a trusted root", ["chain|root|intermediate|trusted|built.?in"], 1], ["Result: server is genuine / prevents impersonation", ["genuine|authentic|trust|impersonat|fake|verify"], 1]]],

  ["Compare a digital signature with a digital certificate in terms of purpose and security function.",
    "<b>Digital signature:</b> created with the sender's <b>private key</b> and verified with the <b>public key</b>. Its purpose is to <b>detect tampering and impersonation</b>, prove the origin of the data and give <b>non-repudiation</b>.<br><b>Digital certificate:</b> a document issued by a CA that <b>verifies the identity of a server/domain and binds it to its public key</b>, so the communication partner can be trusted.<br>In short: the signature protects <b>data integrity and origin</b>; the certificate proves <b>who the partner is</b>.",
    [["Signature: detects tampering / proves origin / non-repudiation", ["tamper|integrity|origin|non.?repudiation|deny|altered|sender"], 1], ["Signature: private key signs, public key verifies", ["private", "public"], 2], ["Certificate: verifies identity of server/domain and binds public key", ["identity|authentic|genuine|verif|bind|domain|server"], 1], ["Certificate issued by a CA / trust of partner", ["ca\\b|authority|trust|vouch|partner"], 1]]],

  ["Explain the security properties provided by a digital signature.",
    "A digital signature provides:<ul><li><b>Integrity:</b> it <b>detects tampering</b>, because any change to the data makes verification fail.</li><li><b>Authentication / proof of origin:</b> it shows <b>who signed</b> the data and detects impersonation.</li><li><b>Non-repudiation:</b> the sender <b>cannot deny</b> having sent the data afterward.</li></ul>",
    [["Detects tampering (integrity)", ["tamper|integrity|alter|change|modif"], 1], ["Proves origin / detects impersonation", ["origin|who|sender|identity|authentic|impersonat|signer"], 1], ["Non-repudiation (sender cannot deny)", ["non.?repudiation|deny|cannot deny|can.?t deny|disown"], 1]]],

  ["Define two-factor authentication (2FA) and explain how it reduces the risk of unauthorized access.",
    "<b>Two-factor authentication (2FA)</b> is logging in using <b>two factors from two different categories</b> (knowledge, possession, biometric), for example a password plus a one-time code sent to your phone. It reduces risk because if <b>one factor is stolen or guessed</b> (such as the password), the attacker <b>still needs the second factor</b>, so there is another barrier.",
    [["Two factors from different categories", ["two|2|second", "different|independent|categor|factor"], 2], ["Example (password + OTP/phone/fingerprint/token)", ["password|pin", "otp|code|phone|sms|fingerprint|token|card|biometric"], 2], ["One factor stolen: attacker still needs the second", ["still|another|second|extra|additional|barrier|even if|not enough", "stolen|leak|guess|compromis|break|steal|hack|crack"], 2]]],

  ["Compare 2FA and multi-factor authentication (MFA), referring to the categories of authentication factors.",
    "<b>2FA</b> uses <b>exactly two</b> factors from different categories. <b>MFA</b> uses <b>two or more</b>, so 2FA is a <b>special case of MFA</b>.<br>The three categories are:<ul><li><b>Knowledge</b> (something you know): password, PIN.</li><li><b>Possession</b> (something you have): phone, smart card, token.</li><li><b>Biometric</b> (something you are): fingerprint, face.</li></ul>More independent factors means more barriers for an attacker.",
    [["2FA = exactly two factors; MFA = two or more", ["two|2", "more|multi|three|several|two or more"], 2], ["Knowledge (password/PIN)", ["knowledge|know|password|pin"], 1], ["Possession (phone/token/smart card)", ["possession|have|phone|token|card"], 1], ["Biometric (fingerprint/face)", ["biometric|fingerprint|face|are"], 1]]],

  ["Give examples of the knowledge, possession, and biometric authentication factor categories.",
    "<ul><li><b>Knowledge</b> (something you know): a password, PIN or security-question answer.</li><li><b>Possession</b> (something you have): a registered phone (one-time code), smart card or hardware security token.</li><li><b>Biometric</b> (something you are): a fingerprint or face recognition.</li></ul>",
    [["Knowledge example (password / PIN)", ["password|pin|security question|know"], 1], ["Possession example (phone / token / smart card)", ["phone|token|smart card|card|otp|code|possession"], 1], ["Biometric example (fingerprint / face)", ["fingerprint|face|biometric|iris|voice"], 1]]],

  ["Explain a practical 2FA login example and why it is more secure than a password alone.",
    "<b>Example (online banking / SMS):</b> you enter your <b>password</b> (knowledge), then the service sends a <b>one-time code to your phone</b> (possession) that you must also enter. It is more secure than a password alone because a stolen or leaked password is <b>not enough</b>: the attacker would also need your phone.",
    [["Describes a login: password + second factor", ["password", "code|otp|sms|phone|fingerprint|token|card"], 2], ["Names the factor types (knowledge + possession/biometric)", ["knowledge|possession|biometric|know|have|are"], 1], ["Password alone is not enough / attacker needs the second factor", ["not enough|still need|also need|second|another|extra|additional|barrier|alone"], 1]]],

  ["Explain why a second independent factor can still protect an account even if the password is leaked.",
    "The second factor belongs to a <b>different category</b> and is obtained in a <b>different way</b> (for example, your phone or fingerprint). A leaked password does not give the attacker that factor, so they <b>still cannot log in</b>. Breaking one factor still leaves <b>another barrier</b>.",
    [["Second factor is independent / different category", ["independent|different|separate|another|second|categor"], 1], ["Leaked password does not give the second factor", ["leak|stolen|steal|know the password|has the password|compromis|guess"], 1], ["Attacker is still blocked / another barrier remains", ["still|cannot|can.?t|barrier|blocked|unable|extra|protect"], 1]]],

  ["Explain how encryption, digital certificates, and two-factor authentication can work together to protect an e-commerce service (online banking or shopping), and the benefits of combining them.",
    "<ul><li><b>Encryption</b> (HTTPS/TLS) stops third parties from reading card and account data in transit.</li><li><b>Digital certificates</b> prove the shop/bank website is genuine, protecting customers from fake sites.</li><li><b>Digital signatures</b> detect tampering with data or orders.</li><li><b>2FA/MFA</b> prevents unauthorized logins even if a password is stolen.</li></ul>Combined, each one covers a weakness the others cannot, so the service is far safer than with any single tool.",
    [["Encryption: data cannot be read by others", ["encrypt", "read|intercept|eavesdrop|third|steal|private|confidential"], 2], ["Certificate: proves the site is genuine / avoids fake sites", ["certificate", "genuine|authentic|fake|identity|trust|verif|impersonat"], 2], ["2FA/MFA: prevents unauthorized login", ["2fa|mfa|two.?factor|multi.?factor|factor|authenticat", "login|unauthori|access|password"], 2], ["Combining covers each other's weaknesses", ["combin|together|layer|each other|weakness|several|multiple"], 1]]],

  ["Why is using several security layers safer than relying on only one security mechanism?",
    "With <b>one mechanism</b>, if it is broken the attacker gets <b>full access</b> (a single point of failure). With <b>several layers</b>, breaking one still leaves <b>another barrier</b> in the way, and different mechanisms protect against <b>different threats</b> (reading data, impersonation, tampering, unauthorized login). This idea is called <b>defense in depth</b>.",
    [["One mechanism broken = full access", ["one|single|only", "break|broken|fail|breach|bypass|compromis|full access|everything"], 2], ["Several layers: another barrier remains", ["another|next|remain|still|extra|additional|backup|barrier|layer"], 1], ["Different mechanisms cover different threats", ["different|various|each|threat|attack|cover|weakness"], 1]]],

  ["Explain why secure Internet use depends on combining encryption and authentication technologies rather than on one tool alone.",
    "<b>Encryption</b> keeps data secret, but without <b>authentication</b> you could be talking securely to the wrong party (an impersonator). <b>Authentication</b> (certificates, signatures, MFA) proves who is who, but without <b>encryption</b> the data could still be read on the way. Only by combining them do we get <b>confidentiality, integrity and verified identity</b> together.",
    [["Encryption protects secrecy of data", ["encrypt", "secret|read|confiden|private|intercept|eavesdrop"], 2], ["Authentication proves identity / who you are talking to", ["authenticat|certificate|signature|identity|verif|mfa|login"], 1], ["Each alone leaves a gap (e.g. secure link to an impersonator)", ["alone|only|without|gap|weak|not enough|impersonat|fake|wrong"], 1], ["Combination gives complete protection", ["combin|together|both|complete|full|several|multiple"], 1]]],

  ["Explain why advanced security technologies do not automatically guarantee that online content itself is trustworthy or correct.",
    "Technologies such as HTTPS, certificates and signatures protect the <b>communication and the identity</b> of the site: data is private, unaltered and the server is genuine. They <b>do not check whether the content is true or good</b>. A fraudulent or misleading website can still have a valid certificate and HTTPS, and a real site can publish wrong information. Users must still <b>evaluate sources critically</b>.",
    [["Security protects the connection/identity, not the content", ["connection|communication|identity|channel|transmi|data in transit|protects"], 1], ["Content can still be false, misleading or malicious", ["false|fake|wrong|incorrect|misinform|misleading|fraud|scam|malicious|untrue|accurate|correct"], 1], ["A fake site can still have HTTPS/certificate", ["https|certificate|padlock|valid|lock"], 1], ["User must still check sources critically", ["check|verify|evaluate|critical|source|careful|judge|think"], 1]]],
];

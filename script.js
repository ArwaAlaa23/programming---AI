/* =========================================================
   Programming & AI (بكالوريا)
   Static navbar (chapters) + dynamic navbar (lessons) + three.js
   ========================================================= */

/* ---------- Course data ---------- */
const CHAPTERS = {
  1: {
    title: "Chapter 1",
    subtitle: "Information Technology, AI and Ethics",
    lessons: [
      { title: "IT & Emerging Technologies", summary: "History of IT, Moore’s law, transistors, social changes and new technologies.", icon: "💾" },
      { title: "How AI Works?", summary: "What AI is and where machine learning, deep learning and generative AI fit.", icon: "🧠" },
      { title: "AI in Daily Life and Industry", summary: "Examples of AI around us, what it is good at and what needs caution.", icon: "🌆" },
      { title: "Ethical Issues with AI", summary: "Algorithmic bias, privacy, explainability and the four principles of AI ethics.", icon: "⚖️" },
    ],
  },
  2: { title: "Chapter 2", subtitle: "Coming soon", lessons: [{ title: "Lesson 1" }, { title: "Lesson 2" }, { title: "Lesson 3" }] },
  3: { title: "Chapter 3", subtitle: "Coming soon", lessons: [{ title: "Lesson 1" }, { title: "Lesson 2" }, { title: "Lesson 3" }] },
  4: { title: "Chapter 4", subtitle: "Coming soon", lessons: [{ title: "Lesson 1" }, { title: "Lesson 2" }, { title: "Lesson 3" }, { title: "Lesson 4" }] },
};

/* ---------- Lesson content (Chapter 1, from the PDF) ---------- */
const CH1 = {
  1: () => `
    <div class="page-head">
      <div class="crumb">Chapter 1 · Lesson 1</div>
      <h1>IT &amp; Emerging Technologies</h1>
      <p>How information technology developed, why chips keep getting more powerful, and which new technologies are shaping the future.</p>
    </div>

    <h2 class="section-title"><small>History</small>The History of Information Technology (IT)</h2>
    <div class="timeline">
      <div class="t-item"><div class="year">1940s–60s</div><h4>Birth of Computers</h4><p>ENIAC and vacuum tubes. Used for military &amp; scientific math.</p></div>
      <div class="t-item"><div class="year">1970s–80s</div><h4>Personal PCs</h4><p>Spread of personal computers. Computing becomes individual.</p></div>
      <div class="t-item"><div class="year">1990s</div><h4>Internet &amp; Web</h4><p>Computers get connected to each other around the world.</p></div>
      <div class="t-item"><div class="year">2000s</div><h4>Smartphones</h4><p>Rise of iPhones. Explosive spread of the mobile Internet.</p></div>
      <div class="t-item"><div class="year">2010s+</div><h4>Cloud &amp; AI</h4><p>Ubiquitous cloud. AI-as-a-service and massive analytics.</p></div>
    </div>

    <h2 class="section-title"><small>Law</small>Moore’s Law</h2>
    <div class="card">
      <p><b style="color:var(--text)">Definition:</b> the number of transistors on an integrated circuit doubles approximately every two years.</p>
      <div class="chart-wrap" style="margin-top:14px"><svg id="mooreChart" viewBox="0 0 700 370" role="img" aria-label="Moore's law chart"></svg></div>
      <div class="chart-info" id="chartInfo">Tap or hover a dot to see the processor.</div>
    </div>

    <h2 class="section-title"><small>Hardware</small>Transistors</h2>
    <div class="grid cols-2">
      <div class="card">
        <span class="num">1</span>
        <h3>What is the meaning of transistor?</h3>
        <p>A transistor is the smallest building block of any processor or electronic chip.</p>
      </div>
      <div class="card">
        <span class="num">2</span>
        <h3>A tiny electrical switch</h3>
        <p>It can only do two things:</p>
        <ul>
          <li><b>Turn ON</b> = let current flow = represents the number <b>1</b></li>
          <li><b>Turn OFF</b> = block current = represents the number <b>0</b></li>
        </ul>
      </div>
    </div>
    <div class="card" style="margin-top:16px">
      <h3>Try it: flip the switch</h3>
      <div class="switch-demo">
        <div class="toggle" id="toggle" role="switch" aria-checked="false" tabindex="0"></div>
        <div class="bit" id="bit">0</div>
        <p id="bitText">OFF = current is blocked.</p>
      </div>
    </div>
    <div class="callout" style="margin-top:16px"><b>Just an extra fact:</b> a transistor has three parts — emitter, base and collector — and comes in two types, p-n-p and n-p-n. In the 1940s computers filled whole rooms; today a single chip holds billions of transistors.</div>

    <h2 class="section-title"><small>The problem</small>Moore’s Law: Physical Limit of Miniaturization</h2>
    <div class="card">
      <p>As transistors shrink to near-atomic scale, two physical phenomena start to interfere:</p>
      <div class="grid cols-2" style="margin-top:14px">
        <div><span class="num">1</span><h3>Quantum tunneling effect</h3><p>Electrons slip through barriers.</p></div>
        <div><span class="num">2</span><h3>Leakage current</h3><p>Current escapes unintentionally.</p></div>
      </div>
      <p style="margin-top:14px">Because of these problems, it’s become difficult to achieve both higher performance and lower power consumption at the same time.</p>
    </div>
    <h3 style="margin:18px 0 10px">New directions for performance improvement</h3>
    <div class="grid cols-2">
      <div class="card"><span class="num">1</span><h3>Parallel processing</h3><p>Using multiple processor cores.</p></div>
      <div class="card"><span class="num">2</span><h3>Quantum computers</h3><p>Based on the principles of quantum mechanics.</p></div>
    </div>

    <h2 class="section-title"><small>Society</small>Social Changes Resulting from Information Technology</h2>
    <div class="grid cols-3">
      <div class="card"><div class="big">💬</div><h3>SNS (Social Networking Service)</h3><p>Services that allow users to connect with each other and post and share information. They are highly effective at spreading information rapidly.</p></div>
      <div class="card"><div class="big">🏠</div><h3>Remote work</h3><p>A working style in which work is performed from home or other remote locations using the Internet.</p></div>
      <div class="card"><div class="big">🎓</div><h3>Online learning</h3><p>A learning style in which classes and study materials are delivered using the Internet.</p></div>
      <div class="card"><div class="big">🛒</div><h3>E-commerce</h3><p>Buying and selling goods and services through the Internet.</p></div>
      <div class="card"><div class="big">📱</div><h3>Cashless payment</h3><p>A system for making payments using electronic money, QR codes, etc., without using cash.</p></div>
    </div>

    <h2 class="section-title"><small>Future</small>Notable Emerging Technologies</h2>
    <div class="card">
      <h3>(1) Autonomous Driving</h3>
      <div class="grid cols-4" style="margin-top:12px">
        <div><span class="num">1</span><p>A technology that uses AI to drive a vehicle without human operation.</p></div>
        <div><span class="num">2</span><p>Uses cameras and sensors to recognize the surroundings, makes driving decisions, and controls the vehicle.</p></div>
        <div><span class="num">3</span><p>Because a delay of even 0.1 seconds can lead to an accident, edge computing is used — processing is performed instantly on the vehicle itself, rather than sending data to the cloud.</p></div>
        <div><span class="num">4</span><p>A self-driving car decides on board (edge computing), without waiting for the cloud.</p></div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <div class="card">
        <h3>(2) AR / VR</h3>
        <p><b style="color:var(--text)">AR (Augmented Reality):</b> overlays digital information on real-world images.</p>
        <p style="margin-top:8px"><b style="color:var(--text)">VR (Virtual Reality):</b> lets users immerse themselves in a virtual space generated by a computer.</p>
        <div class="callout" style="margin-top:12px">AR adds digital layers to the real world; VR replaces it with a virtual one.</div>
      </div>
      <div class="card">
        <h3>(3) Quantum Computing</h3>
        <p>A technology expected to dramatically speed up computations that are difficult or impossible for traditional computers, by using the principles of quantum mechanics.</p>
        <div class="compare" style="margin-top:12px">
          <div class="callout"><b>Bits</b><br>Definite state (0 or 1)</div>
          <div class="callout"><b>Qubits</b><br>Superposition of states (0 AND 1)</div>
        </div>
      </div>
    </div>`,

  2: () => `
    <div class="page-head">
      <div class="crumb">Chapter 1 · Lesson 2</div>
      <h1>How AI Works?</h1>
      <p>Key safeguards: explain what AI is, and explain how generative AI is positioned within AI technologies.</p>
    </div>

    <h2 class="section-title"><small>Definition</small>What is Artificial Intelligence (AI)?</h2>
    <div class="card">
      <p><b style="color:var(--text)">AI (Artificial Intelligence)</b> — a general term for technologies that reproduce or perform intelligent human behavior (learning, reasoning, judgment, etc.) on a computer.</p>
      <div class="pill-row"><span class="pill">Speech recognition</span><span class="pill">Image recognition</span><span class="pill">Translation</span></div>
    </div>

    <h2 class="section-title"><small>Around you</small>Everyday AI Examples</h2>
    <div class="grid cols-4">
      <div class="card"><div class="big">📧</div><p>A spam filter sorts your email.</p></div>
      <div class="card"><div class="big">🛍️</div><p>A store recommends products you might buy.</p></div>
      <div class="card"><div class="big">🌍</div><p>A translation app changes one language into another.</p></div>
      <div class="card"><div class="big">💡</div><p>ChatGPT generates text from a prompt.</p></div>
    </div>
    <div class="callout" style="margin-top:14px">These are all examples of AI, but they are not all the same kind.</div>

    <h2 class="section-title"><small>Big picture</small>Hierarchy of AI Technologies</h2>
    <div class="card">
      <p style="margin-bottom:14px">Click a layer to highlight it.</p>
      <div class="nest" id="nest">
        <div class="l l1" data-note="AI — reproducing human intelligent behavior." tabindex="0"><b>AI (Artificial Intelligence)</b><small>Reproducing human intelligent behavior</small>
          <div class="l l2" data-note="Machine Learning — learning patterns from data." tabindex="0"><b>Machine Learning</b><small>Learning patterns from data</small>
            <div class="l l3" data-note="Deep Learning — using neural networks." tabindex="0"><b>Deep Learning</b><small>Using neural networks</small>
              <div class="l l4" data-note="Generative AI — e.g. ChatGPT, image generation." tabindex="0"><b>Generative AI</b><small>e.g. ChatGPT, image generation</small></div>
            </div>
          </div>
        </div>
      </div>
      <div class="nest-note" id="nestNote">Generative AI sits inside Deep Learning, which sits inside Machine Learning, which sits inside AI.</div>
    </div>

    <div class="grid cols-2" style="margin-top:16px">
      <div class="card"><span class="num">1</span><h3>Machine Learning</h3>
        <ul><li>One of the learning technologies that makes AI work.</li><li>It learns patterns from data to make predictions and judgments.</li><li>e.g., spam filters, product recommendations.</li></ul></div>
      <div class="card"><span class="num">2</span><h3>Deep Learning</h3>
        <ul><li>An advanced technology within machine learning that uses neural networks.</li><li>It learns complex patterns using large-scale data.</li><li>e.g., image analysis for autonomous driving, speech synthesis.</li></ul></div>
      <div class="card"><span class="num">3</span><h3>Neural network</h3>
        <ul><li>A system modeled after the workings of the nerve cells (neurons) of the human brain.</li><li>By connecting many components, it learns from data and becomes capable of making complex judgments.</li><li>It is the core technology supporting recent advances in AI.</li></ul></div>
      <div class="card"><span class="num">4</span><h3>Generative AI</h3>
        <p>AI technology that uses deep learning to generate new data (text, images, audio, programs, etc.).</p></div>
    </div>

    <h2 class="section-title"><small>Visuals</small>Neural Network &amp; Generative AI</h2>
    <div class="grid cols-2">
      <div class="card nn-wrap"><h3>A neural network: simple parts, connected in layers</h3><svg id="nnSvg" viewBox="0 0 400 240"></svg></div>
      <div class="card"><h3>Generative AI creates new text, images, and audio</h3>
        <div class="flow" style="margin-top:20px">
          <div class="box">Prompt</div><div class="arrow">➜</div><div class="box main">Generative AI</div><div class="arrow">➜</div>
          <div style="display:grid;gap:8px"><div class="box">📝 Text</div><div class="box">🖼️ Image</div><div class="box">🔊 Audio</div></div>
        </div>
      </div>
    </div>`,

  3: () => `
    <div class="page-head">
      <div class="crumb">Chapter 1 · Lesson 3</div>
      <h1>AI in Daily Life and Industry</h1>
      <p>Key safeguards: give examples of how AI is used in daily life and various industries, and explain what AI is good at and what requires caution.</p>
    </div>

    <div class="grid cols-2">
      <div class="card"><h3>Everyday AI Examples</h3>
        <ul><li>🎬 A video site recommends the next clip.</li><li>🗣️ A voice assistant answers a spoken question.</li><li>🍜 A translation tool converts text on a foreign menu.</li><li>🔓 A phone unlocks by recognizing your face.</li></ul></div>
      <div class="card"><h3>Industry AI Examples</h3>
        <ul><li>🩻 AI analyzes medical images.</li><li>🔧 AI predicts when a machine will fail.</li><li>🚚 AI plans delivery routes.</li></ul></div>
    </div>

    <h2 class="section-title"><small>Strengths</small>Characteristics of AI and Cautions for Use</h2>
    <div class="card">
      <h3 style="color:var(--good)">(1) What AI is good at</h3>
      <ul>
        <li>Finding and classifying patterns in complex data such as images and text</li>
        <li>Recognition and generation of images, audio, and text</li>
        <li>Probabilistic reasoning and prediction based on data</li>
      </ul>
    </div>

    <h2 class="section-title"><small>Be careful</small>What requires caution when using AI</h2>
    <div class="grid cols-2">
      <div class="card"><h3>⚖️ Ethical judgments</h3><p>May lead to discrimination or prejudice.</p></div>
      <div class="card"><h3>🔒 Personal information</h3><p>Judgments involving personal information or privacy.</p></div>
      <div class="card"><h3>✅ Final decision-making</h3><p>Who is responsible for the result?</p></div>
      <div class="card"><h3>📊 Biased training data</h3><p>Accuracy of judgments suffers when training data is biased.</p></div>
      <div class="card"><h3>🌀 Hallucination</h3><p>Generating content that differs from the facts.</p></div>
      <div class="card"><h3>© Copyright</h3><p>Issues of rights when using copyrighted works as training data.</p></div>
      <div class="card"><h3>⬛ The black-box problem</h3><p>Loss of clarity about how a judgment was made.</p></div>
    </div>`,

  4: () => `
    <div class="page-head">
      <div class="crumb">Chapter 1 · Lesson 4</div>
      <h1>Ethical Issues with AI</h1>
      <p>Key safeguards: explain what algorithmic bias is and describe its main causes, and connect the basic principles of AI ethics (fairness, transparency, privacy protection, and accountability) to specific situations.</p>
    </div>

    <h2 class="section-title"><small>Bias</small>Algorithmic bias</h2>
    <div class="card">
      <p>Bias in AI judgments caused by bias in the training data.</p>
      <ul style="margin-top:10px">
        <li>e.g., a hiring AI unfairly evaluating a particular gender;</li>
        <li>a face-recognition AI being more likely to misidentify particular ethnic groups.</li>
      </ul>
    </div>

    <h2 class="section-title"><small>Privacy</small>Privacy Issues</h2>
    <div class="card">
      <p>The development of AI technology has given rise to new issues concerning privacy.</p>
      <div class="grid cols-2" style="margin-top:14px">
        <div><span class="num">1</span><h3>Surveillance</h3><p>Face-recognition technology: cameras in public spaces can identify and track individuals.</p></div>
        <div><span class="num">2</span><h3>Mass collection of personal data</h3><p>Large amounts of online behavior data are collected and analyzed.</p></div>
      </div>
    </div>

    <h2 class="section-title"><small>Trust</small>Explainable AI (XAI) and Responsibility</h2>
    <div class="grid cols-2">
      <div class="card"><h3>Explainable AI (XAI)</h3><p>Technology that makes it possible for humans to understand why an AI made a particular judgment. When an AI’s decision-making process is opaque (a black box), it is difficult to verify whether the result is correct.</p></div>
      <div class="card"><h3>Responsibility</h3><p>The question of who is responsible when an AI makes an incorrect judgment. Views on responsibility differ depending on whether one is the developer, the user, the operator, etc.</p></div>
    </div>

    <h2 class="section-title"><small>Principles</small>Basic Principles of AI Ethics</h2>
    <div class="grid cols-4">
      <div class="card"><div class="big">⚖️</div><h3>1 · Fairness</h3><p>Not unjustly discriminating against any particular person or group.</p></div>
      <div class="card"><div class="big">👁️</div><h3>2 · Transparency</h3><p>Showing the AI’s decision-making process and inner workings clearly.</p></div>
      <div class="card"><div class="big">🛡️</div><h3>3 · Privacy protection</h3><p>Handling personal information appropriately and protecting privacy.</p></div>
      <div class="card"><div class="big">💬</div><h3>4 · Accountability</h3><p>Being answerable for the AI’s decisions.</p></div>
    </div>

    <div class="callout" style="margin-top:30px;text-align:center"><b>Start small. Measure impact. Scale intelligently.</b></div>`,
};

/* ---------- DOM refs ---------- */
const view = document.getElementById("view");
const navSub = document.getElementById("navSub");
const subTitle = document.getElementById("subTitle");
const lessonsNav = document.getElementById("lessons");
const chapterLinks = document.querySelectorAll(".chapters a");

/* ---------- Router ---------- */
function route() {
  const parts = (location.hash || "#/").replace(/^#\/?/, "").split("/").filter(Boolean);
  // "" -> home, "c/1" -> chapter, "c/1/l/2" -> lesson
  if (parts[0] === "c" && CHAPTERS[parts[1]]) {
    const c = Number(parts[1]);
    const l = parts[2] === "l" ? Number(parts[3]) : null;
    const quizN = (c === 1 && parts[2] === "q") ? (Number(parts[3]) || 1) : null;
    showChapterNav(c, l, quizN);
    if (quizN) renderQuiz(quizN);
    else if (l && CHAPTERS[c].lessons[l - 1]) renderLesson(c, l);
    else renderChapter(c);
    setTheme(c);
  } else {
    hideChapterNav();
    renderHome();
    setTheme(0);
  }
  window.scrollTo(0, 0);
}

function showChapterNav(c, activeLesson, quizActive) {
  chapterLinks.forEach((a) => a.classList.toggle("active", Number(a.dataset.chapter) === c));
  subTitle.textContent = CHAPTERS[c].title;
  lessonsNav.innerHTML = CHAPTERS[c].lessons
    .map((_, i) => {
      const lesson = `<a href="#/c/${c}/l/${i + 1}" class="${activeLesson === i + 1 ? "active" : ""}">Lesson ${i + 1}</a>`;
      const quiz = c === 1 && i <= 3 ? `<a href="#/c/1/q/${i + 1}" class="quiz-link ${quizActive === i + 1 ? "active" : ""}">✎ Lesson ${i + 1} Quiz</a>` : "";
      return lesson + quiz;
    })
    .join("");
  navSub.classList.add("show");
  navSub.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-sub");
}
function hideChapterNav() {
  chapterLinks.forEach((a) => a.classList.remove("active"));
  navSub.classList.remove("show");
  navSub.setAttribute("aria-hidden", "true");
  document.body.classList.remove("has-sub");
}

/* ---------- Views ---------- */
function setView(html) {
  view.innerHTML = `<div class="view-in">${html}</div>`;
}

function renderHome() {
  document.title = "Programming and AI (بكالوريا)";
  setView(`
    <section class="hero">
      <span class="tag">Badr Tigers’ Modern School · ENG/Arwa Alaa</span>
      <h1>Programming <span class="grad">&amp; AI</span><br><span class="ar" style="font-size:.7em">(بكالوريا)</span></h1>
      <p>Four chapters to take you from the history of computers to how artificial intelligence works and how to use it responsibly. Pick a chapter to begin.</p>
      <div><a class="btn" href="#/c/1">Start Chapter 1 →</a></div>
    </section>
    <h2 class="section-title"><small>Course</small>Chapters</h2>
    <div class="grid cols-4">
      ${[1, 2, 3, 4].map((n) => `
        <a class="card" href="#/c/${n}">
          <span class="num">${n}</span>
          <h3>${CHAPTERS[n].title}</h3>
          <p>${CHAPTERS[n].subtitle}</p>
          <div class="pill-row"><span class="pill">${CHAPTERS[n].lessons.length} lessons</span></div>
        </a>`).join("")}
    </div>`);
}

function renderChapter(c) {
  const ch = CHAPTERS[c];
  document.title = `${ch.title} · Programming and AI`;
  setView(`
    <div class="page-head">
      <div class="crumb">Programming &amp; AI</div>
      <h1>${ch.title}</h1>
      <p>${ch.subtitle}. Choose a lesson from the bar above or from the cards below.</p>
    </div>
    <div class="grid cols-2">
      ${ch.lessons.map((ls, i) => `
        <a class="card" href="#/c/${c}/l/${i + 1}">
          <span class="num">${i + 1}</span>
          <h3>${ls.icon ? ls.icon + " " : ""}${c === 1 ? ls.title : "Lesson " + (i + 1)}</h3>
          <p>${ls.summary || "Content for this lesson will be added soon."}</p>
        </a>`).join("")}
    </div>`);
}

function renderLesson(c, l) {
  const ch = CHAPTERS[c];
  document.title = `${ch.title} · Lesson ${l} · Programming and AI`;
  let html;
  if (c === 1 && CH1[l]) {
    html = CH1[l]();
  } else {
    html = `
      <div class="page-head">
        <div class="crumb">${ch.title} · Lesson ${l}</div>
        <h1>Lesson ${l}</h1>
      </div>
      <div class="card coming"><div class="big">🚧</div><h3>Content coming soon</h3><p>This lesson has not been added yet.</p></div>`;
  }
  const total = ch.lessons.length;
  const prev = l > 1 ? `<a href="#/c/${c}/l/${l - 1}">← Lesson ${l - 1}</a>` : `<a href="#/c/${c}">← ${ch.title}</a>`;
  const next = (c === 1 && l <= 4) ? `<a href="#/c/1/q/${l}">Lesson ${l} Quiz →</a>` : l < total ? `<a href="#/c/${c}/l/${l + 1}">Lesson ${l + 1} →</a>` : (c < 4 ? `<a href="#/c/${c + 1}">Chapter ${c + 1} →</a>` : `<a href="#/">Home →</a>`);
  const cta = (c === 1 && l <= 4) ? `
      <a class="card quiz-cta" href="#/c/1/q/${l}">
        <div class="big">✎</div>
        <div><h3>Test yourself: Lesson ${l} Quiz</h3><p>Multiple-choice and essay questions with instant correction from the model answers.</p></div>
        <span class="btn">Start →</span>
      </a>` : "";
  setView(html + cta + `<div class="pager">${prev}${next}</div>`);

  if (c === 1 && l === 1) { initChart(); initSwitch(); }
  if (c === 1 && l === 2) { initNest(); initNN(); }
}

/* ---------- Lesson widgets ---------- */
function initChart() {
  const svg = document.getElementById("mooreChart");
  if (!svg) return;
  const data = [
    { n: "Intel 4004", y: 1971, t: 2300 },
    { n: "Intel 8086", y: 1978, t: 29000 },
    { n: "Intel 80486", y: 1989, t: 1200000 },
    { n: "Pentium 4", y: 2000, t: 42000000 },
    { n: "Core i7", y: 2010, t: 1170000000 },
    { n: "Apple M1 Ultra", y: 2022, t: 114000000000 },
  ];
  const X = (y) => 70 + ((y - 1965) / 60) * 600;
  const Y = (t) => 320 - ((Math.log10(t) - 3) / 8) * 290;
  let s = "";
  for (let e = 3; e <= 11; e++) {
    const y = Y(Math.pow(10, e));
    s += `<line x1="70" x2="670" y1="${y}" y2="${y}" stroke="rgba(255,255,255,.08)"/><text x="62" y="${y + 4}" text-anchor="end" fill="#9db4d6" font-size="11">10^${e}</text>`;
  }
  for (let yr = 1970; yr <= 2020; yr += 10) {
    s += `<text x="${X(yr)}" y="345" text-anchor="middle" fill="#9db4d6" font-size="12">${yr}</text>`;
  }
  s += `<line x1="70" x2="670" y1="320" y2="320" stroke="rgba(255,255,255,.3)"/>`;
  const tr = (y) => 2300 * Math.pow(2, (y - 1971) / 2);
  s += `<line x1="${X(1971)}" y1="${Y(tr(1971))}" x2="${X(2024)}" y2="${Y(tr(2024))}" stroke="#4cc9ff" stroke-width="2" stroke-dasharray="6 5"/>`;
  s += `<text x="80" y="22" fill="#4cc9ff" font-size="12">- - Doubling every ~2 years</text><text x="80" y="38" fill="#fff" font-size="12">● Actual processors</text>`;
  s += `<text x="14" y="180" fill="#9db4d6" font-size="12" transform="rotate(-90 14 180)" text-anchor="middle">Transistors per chip</text>`;
  data.forEach((d) => {
    s += `<circle class="pt" cx="${X(d.y)}" cy="${Y(d.t)}" r="6" data-i="${data.indexOf(d)}"/>
          <text x="${X(d.y) + 10}" y="${Y(d.t) + 4}" fill="#e8f1ff" font-size="11">${d.n} (${d.y})</text>`;
  });
  svg.innerHTML = s;
  const info = document.getElementById("chartInfo");
  const show = (i) => { const d = data[i]; info.textContent = `${d.n} (${d.y}) — ${d.t.toLocaleString("en-US")} transistors`; };
  svg.querySelectorAll(".pt").forEach((p) => {
    p.addEventListener("mouseenter", () => show(p.dataset.i));
    p.addEventListener("click", () => show(p.dataset.i));
  });
}

function initSwitch() {
  const t = document.getElementById("toggle"), b = document.getElementById("bit"), txt = document.getElementById("bitText");
  if (!t) return;
  const flip = () => {
    const on = t.classList.toggle("on");
    t.setAttribute("aria-checked", on);
    b.textContent = on ? "1" : "0";
    b.classList.toggle("on", on);
    txt.textContent = on ? "ON = current flows = the number 1." : "OFF = current is blocked = the number 0.";
  };
  t.addEventListener("click", flip);
  t.addEventListener("keydown", (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); } });
}

function initNest() {
  const note = document.getElementById("nestNote");
  document.querySelectorAll("#nest .l").forEach((el) => {
    const act = (e) => {
      e.stopPropagation();
      document.querySelectorAll("#nest .l").forEach((x) => x.classList.remove("hl"));
      el.classList.add("hl");
      note.textContent = el.dataset.note;
    };
    el.addEventListener("click", act);
    el.addEventListener("keydown", (e) => { if (e.key === "Enter") act(e); });
  });
}

let nnTimer = null;
function initNN() {
  const svg = document.getElementById("nnSvg");
  if (!svg) return;
  const layers = [4, 5, 5, 3], xs = [50, 150, 250, 350];
  const pos = layers.map((n, li) => Array.from({ length: n }, (_, i) => ({ x: xs[li], y: 120 + (i - (n - 1) / 2) * 38 })));
  let edges = "", nodes = "";
  for (let l = 0; l < layers.length - 1; l++)
    pos[l].forEach((a, ai) => pos[l + 1].forEach((b, bi) => {
      edges += `<line class="edge" data-l="${l}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
    }));
  pos.flat().forEach((p) => (nodes += `<circle class="node" cx="${p.x}" cy="${p.y}" r="7"/>`));
  const labels = ["Input layer", "Hidden layer", "Hidden layer", "Output layer"].map((t, i) => `<text x="${xs[i]}" y="228">${t}</text>`).join("");
  svg.innerHTML = edges + nodes + labels;
  clearInterval(nnTimer);
  let step = 0;
  nnTimer = setInterval(() => {
    if (!document.body.contains(svg)) { clearInterval(nnTimer); return; }
    svg.querySelectorAll(".edge").forEach((e) => e.classList.toggle("pulse", Number(e.dataset.l) === step % 3));
    step++;
  }, 700);
}

/* =========================================================
   three.js background: a floating "neural network"
   ========================================================= */
const THEMES = {
  0: [0x4cc9ff, 0x7a7cff],
  1: [0x4cc9ff, 0x7a7cff],
  2: [0x3ddc97, 0x4cc9ff],
  3: [0xffb74d, 0xff7ad9],
  4: [0xff7ad9, 0x7a7cff],
};
let setTheme = () => {};

(function initThree() {
  const canvas = document.getElementById("bg");
  if (typeof THREE === "undefined") { return; } // offline fallback: plain dark background
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 14;

  const group = new THREE.Group();
  scene.add(group);

  // nodes
  const N = 110, R = 9;
  const pts = [];
  const posArr = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const v = new THREE.Vector3((Math.random() - .5) * 2, (Math.random() - .5) * 2, (Math.random() - .5) * 2).normalize().multiplyScalar(R * (0.35 + Math.random() * 0.65));
    pts.push(v);
    posArr.set([v.x, v.y, v.z], i * 3);
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(posArr, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.22, color: 0x4cc9ff, transparent: true, opacity: .95 });
  group.add(new THREE.Points(pGeo, pMat));

  // links between close nodes
  const lp = [];
  for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++)
    if (pts[i].distanceTo(pts[j]) < 3.6) lp.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
  const lGeo = new THREE.BufferGeometry();
  lGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(lp), 3));
  const lMat = new THREE.LineBasicMaterial({ color: 0x7a7cff, transparent: true, opacity: .28 });
  group.add(new THREE.LineSegments(lGeo, lMat));

  // core shape
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.4, 1),
    new THREE.MeshBasicMaterial({ color: 0x4cc9ff, wireframe: true, transparent: true, opacity: .35 })
  );
  scene.add(core);

  const c1 = new THREE.Color(0x4cc9ff), c2 = new THREE.Color(0x7a7cff);
  const t1 = new THREE.Color(0x4cc9ff), t2 = new THREE.Color(0x7a7cff);
  setTheme = (n) => { const t = THEMES[n] || THEMES[0]; t1.setHex(t[0]); t2.setHex(t[1]); };

  const mouse = { x: 0, y: 0 };
  window.addEventListener("pointermove", (e) => {
    mouse.x = (e.clientX / window.innerWidth - .5) * 2;
    mouse.y = (e.clientY / window.innerHeight - .5) * 2;
  });
  window.addEventListener("scroll", () => { camera.position.y = -window.scrollY * 0.0012; }, { passive: true });

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clock = new THREE.Clock();
  (function loop() {
    const t = clock.getElapsedTime();
    if (!reduce) {
      group.rotation.y = t * 0.06 + mouse.x * 0.25;
      group.rotation.x = Math.sin(t * 0.1) * 0.15 + mouse.y * 0.15;
      core.rotation.y = -t * 0.15;
      core.rotation.x = t * 0.1;
      core.scale.setScalar(1 + Math.sin(t * 1.2) * 0.04);
    }
    c1.lerp(t1, 0.04); c2.lerp(t2, 0.04);
    pMat.color.copy(c1); core.material.color.copy(c1); lMat.color.copy(c2);
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  })();
})();

/* ---------- Start ---------- */
window.addEventListener("hashchange", route);
route();

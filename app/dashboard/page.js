<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AdCreator AI — Dashboard</title>

  <style>
    :root {
      --bg-dark: #050509;
      --bg-card: #0d0d18;
      --bg-header: #070712;
      --text-main: #ffffff;
      --text-muted: #a8a8c0;
      --accent: #ff2e88;
      --accent-soft: #ff7ac4;
      --accent-alt: #7b5cff;
      --accent-green: #00d27a;
      --border-subtle: #26263a;
      --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.55);
    }

    [data-theme="light"] {
      --bg-dark: #f5f5ff;
      --bg-card: #ffffff;
      --bg-header: #ffffff;
      --text-main: #111122;
      --text-muted: #555577;
      --accent: #ff2e88;
      --accent-soft: #ff7ac4;
      --accent-alt: #7b5cff;
      --accent-green: #00b86a;
      --border-subtle: #d8d8f0;
      --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.12);
    }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: var(--bg-dark);
      color: var(--text-main);
      display: flex;
      height: 100vh;
      overflow: hidden;
      transition: background 0.4s ease, color 0.4s ease;
    }

    /* SIDEBAR */
    .sidebar {
      width: 260px;
      background: linear-gradient(to bottom, var(--bg-header), #050509);
      border-right: 1px solid var(--border-subtle);
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      overflow-y: auto;
    }

    .sidebar-logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .sidebar-logo svg {
      width: 40px;
      height: 40px;
    }

    .sidebar-logo-text {
      font-size: 20px;
      font-weight: 700;
    }

    .sidebar-nav a {
      display: block;
      padding: 12px 0;
      color: var(--text-muted);
      text-decoration: none;
      font-size: 15px;
      transition: color 0.2s ease;
    }

    .sidebar-nav a:hover {
      color: var(--accent-soft);
    }

    /* MAIN AREA */
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    .topbar {
      padding: 16px 28px;
      background: var(--bg-header);
      border-bottom: 1px solid var(--border-subtle);
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(12px);
    }

    .topbar-title {
      font-size: 22px;
      font-weight: 600;
    }

    .toggle-btn {
      border-radius: 999px;
      border: 1px solid var(--border-subtle);
      padding: 6px 14px;
      font-size: 12px;
      background: transparent;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .content {
      padding: 28px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 16px;
      padding: 20px;
      box-shadow: var(--shadow-soft);
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }

    .card:nth-child(1) { animation-delay: 0.1s; }
    .card:nth-child(2) { animation-delay: 0.2s; }
    .card:nth-child(3) { animation-delay: 0.3s; }
    .card:nth-child(4) { animation-delay: 0.4s; }

    .card h3 {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 18px;
    }

    .generate-btn {
      background: linear-gradient(135deg, var(--accent), var(--accent-soft));
      border: none;
      padding: 14px 20px;
      color: white;
      border-radius: 12px;
      cursor: pointer;
      width: 100%;
      font-size: 16px;
      margin-top: 10px;
      box-shadow: 0 12px 30px rgba(255, 46, 136, 0.35);
    }

    .output-box {
      background: #00000033;
      border: 1px solid var(--border-subtle);
      padding: 14px;
      border-radius: 12px;
      height: 180px;
      overflow-y: auto;
      font-size: 14px;
      color: var(--text-muted);
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>

<body>

<!-- SIDEBAR -->
<div class="sidebar">
  <div class="sidebar-logo">
    <!-- Tri‑Axis Sigil -->
    <svg viewBox="0 0 64 64">
      <defs>
        <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff7ac4"/>
          <stop offset="50%" stop-color="#ff2e88"/>
          <stop offset="100%" stop-color="#7b5cff"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="26" fill="#050509" stroke="url(#triGrad)" stroke-width="2.5"/>
      <g style="animation: triOrbit 14s linear infinite;">
        <path d="M32 14 L46 42 L18 42 Z" fill="url(#triGrad)" opacity="0.9"/>
      </g>
      <circle cx="32" cy="24" r="3.2" fill="#ffffff" style="animation: triPulse 2.4s ease-in-out infinite;"/>
      <circle cx="40" cy="38" r="3.2" fill="#ffffff" style="animation: triPulse 2.4s ease-in-out infinite 0.2s;"/>
      <circle cx="24" cy="38" r="3.2" fill="#ffffff" style="animation: triPulse 2.4s ease-in-out infinite 0.4s;"/>
    </svg>

    <div class="sidebar-logo-text">AdCreator AI</div>
  </div>

  <div class="sidebar-nav">
    <a href="#">Dashboard</a>
    <a href="#">Generate Ads</a>
    <a href="#">Saved Campaigns</a>
    <a href="#">My Account</a>
    <a href="#">Settings</a>
  </div>
</div>

<!-- MAIN -->
<div class="main">

  <div class="topbar">
    <div class="topbar-title">Dashboard</div>

    <button class="toggle-btn" id="themeToggle">
      <span>🌙</span> <span id="themeLabel">Dark</span>
    </button>
  </div>

  <div class="content">

    <div class="card">
      <h3>Generate New Campaign</h3>
      <input id="product" placeholder="Product name" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border-subtle);background:var(--bg-dark);color:var(--text-main);" />
      <input id="audience" placeholder="Audience" style="width:100%;margin-top:10px;padding:10px;border-radius:8px;border:1px solid var(--border-subtle);background:var(--bg-dark);color:var(--text-main);" />
      <button class="generate-btn" onclick="generate()">Generate</button>
    </div>

    <div class="card">
      <h3>Output</h3>
      <div id="output" class="output-box">Your generated ad copy will appear here.</div>
    </div>

    <div class="card">
      <h3>Saved Angles</h3>
      <div class="output-box">Coming soon…</div>
    </div>

    <div class="card">
      <h3>Performance Insights</h3>
      <div class="output-box">Coming soon…</div>
    </div>

  </div>
</div>

<script>
  function generate() {
    const product = document.getElementById("product").value;
    const audience = document.getElementById("audience").value;

    document.getElementById("output").innerText =
      "Generating campaign for " + product + " targeting " + audience + "…\n\n(This is where your backend response will appear.)";
  }

  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');

  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    themeLabel.textContent = mode === 'dark' ? 'Dark' : 'Light';
    themeToggle.firstElementChild.textContent = mode === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('adcreator-theme', mode);
  }

  const savedTheme = localStorage.getItem('adcreator-theme');
  setTheme(savedTheme || 'dark');

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
</script>

</body>
</html>o


async function loadProjectDropdown() {
  const res = await fetch('/api/projects');
  const projects = await res.json();

  let html = "";
  projects.forEach(p => {
    html += `<option value="${p._id}">${p.name}</option>`;
  });

  document.getElementById('scriptProject').innerHTML = html;
}

async function createScript() {
  const data = {
    projectId: document.getElementById('scriptProject').value,
    title: document.getElementById('scriptTitle').value,
    prompt: document.getElementById('scriptPrompt').value,
    tone: document.getElementById('scriptTone').value,
    length: document.getElementById('scriptLength').value,
  };

  const res = await fetch('/api/scripts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const script = await res.json();
  alert("Script saved!");
  loadScripts();
}

async function loadScripts() {
  const res = await fetch('/api/scripts');
  const scripts = await res.json();

  let html = "<h2>Saved Scripts</h2>";
  scripts.forEach(s => {
    html += `
      <div class="script-card">
        <h3>${s.title}</h3>
        <p><strong>Project:</strong> ${s.projectId?.name}</p>
        <p><strong>Tone:</strong> ${s.tone}</p>
        <p><strong>Length:</strong> ${s.length}</p>
        <p><strong>Prompt:</strong> ${s.prompt}</p>
        <p><strong>Generated:</strong> ${s.generatedText || 'Not generated yet'}</p>
      </div>
    `;
  });

  document.getElementById('scriptList').innerHTML = html;
}

loadProjectDropdown();
loadScripts();

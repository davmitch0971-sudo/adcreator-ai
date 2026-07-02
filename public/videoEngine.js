async function loadVideoDropdowns() {
  const [projectsRes, scriptsRes] = await Promise.all([
    fetch('/api/projects'),
    fetch('/api/scripts')
  ]);

  const projects = await projectsRes.json();
  const scripts = await scriptsRes.json();

  let projectHtml = "";
  projects.forEach(p => {
    projectHtml += `<option value="\${p._id}">\${p.name}</option>`;
  });
  document.getElementById('videoProject').innerHTML = projectHtml;

  let scriptHtml = "";
  scripts.forEach(s => {
    scriptHtml += `<option value="\${s._id}">\${s.title}</option>`;
  });
  document.getElementById('videoScript').innerHTML = scriptHtml;
}

async function createVideo() {
  const data = {
    projectId: document.getElementById('videoProject').value,
    scriptId: document.getElementById('videoScript').value || null,
    title: document.getElementById('videoTitle').value,
    format: document.getElementById('videoFormat').value,
    duration: document.getElementById('videoDuration').value,
    resolution: document.getElementById('videoResolution').value,
    status: document.getElementById('videoStatus').value,
    notes: document.getElementById('videoNotes').value,
  };

  const res = await fetch('/api/videos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const video = await res.json();
  alert("Video saved!");
  loadVideos();
}

async function loadVideos() {
  const res = await fetch('/api/videos');
  const videos = await res.json();

  let html = "<h2>Saved Videos</h2>";
  videos.forEach(v => {
    html += `
      <div class="video-card">
        <h3>\${v.title}</h3>
        <p><strong>Project:</strong> \${v.projectId?.name}</p>
        <p><strong>Script:</strong> \${v.scriptId?.title || 'None linked'}</p>
        <p><strong>Format:</strong> \${v.format}</p>
        <p><strong>Duration:</strong> \${v.duration}</p>
        <p><strong>Resolution:</strong> \${v.resolution}</p>
        <p><strong>Status:</strong> \${v.status}</p>
        <p><strong>Notes:</strong> \${v.notes}</p>
      </div>
    `;
  });

  document.getElementById('videoList').innerHTML = html;
}

loadVideoDropdowns();
loadVideos();

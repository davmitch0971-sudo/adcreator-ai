const API_BASE = "http://localhost:5000/api";

export async function callAdCreator(route, payload) {
  const res = await fetch(`${API_BASE}/${route}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return await res.json();
}

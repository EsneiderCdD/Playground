const API = "http://localhost:3001/devtools";

export async function getDevTools() {
  const res = await fetch(API);
  if (!res.ok) {
    throw new Error("Houston tenemos problemas");
  }
  const data = await res.json();
  return data;
}

export async function postDevTool(payload) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error("No se pudo crear el recurso");
  }
  const created = await res.json();
  return created;
}
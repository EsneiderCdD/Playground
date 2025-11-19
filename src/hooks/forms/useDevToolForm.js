import { useState } from "react";

export function useDevToolForm(createDevTool) {
  const [form, setForm] = useState({ name: "", description: "", url: "", image: "" });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "idle", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function resetForm() {
    setForm({ name: "", description: "", url: "", image: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFeedback({ type: "info", message: "Enviando..." });
    setSubmitting(true);

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      url: form.url.trim() || undefined,
      image: form.image.trim() || undefined,
    };


    if (!payload.name || !payload.description) {
      setFeedback({ type: "error", message: "Nombre y descripción son obligatorios." });
      setSubmitting(false);
      return;
    }

    try {
      const created = await createDevTool(payload);
      setFeedback({ type: "success", message: `Creado: ${created?.name ?? "Elemento"}` });
      resetForm();
    } catch (err) {
      setFeedback({ type: "error", message: err.message || "Error al crear el recurso." });
    } finally {
      setSubmitting(false);
    }
  }

  return { form, submitting, feedback, handleChange, handleSubmit, resetForm };
}
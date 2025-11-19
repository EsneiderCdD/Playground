import { useDevToolForm } from "../../hooks/forms/useDevToolForm";
import PropTypes from "prop-types";

function DevToolForm({ createDevTool }) {
  const { form, submitting, feedback, handleChange, handleSubmit } = useDevToolForm(createDevTool);

  return (
    <form onSubmit={handleSubmit} style={{ margin: '16px 0' }}>
      <input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        name="url"
        placeholder="URL"
        value={form.url}
        onChange={handleChange}
        required
      />
      <input
        name="image"
        placeholder="Imagen (opcional)"
        value={form.image}
        onChange={handleChange}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Enviando...' : 'Crear'}
      </button>
      {feedback.message && <p>{feedback.message}</p>}
    </form>
  );
}

DevToolForm.propTypes = {
  createDevTool: PropTypes.func.isRequired,
};

export default DevToolForm;
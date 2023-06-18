import { useState } from 'react';
import './styles.css';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    clientType: '',
    document: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // LUIS, ACA DICE QUIEN TE DIJE, QUE TENES QUE AGREGAR PARA EVIAR SOLICITUD HTTP, JAJAJA, TE DICE LO QUE HACER, NOS VAN A DOMINAR!!!!!
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src="/motorcenterlogo.png" alt="Logo" />
        <p>Bienvenido a ExpoCenter, en el siguiente formulario completa tus datos para
        participar como asistente dela charla de fulanito y menganito bla bla bla... cosas bonitas como yo </p>
      </div>
      <div className="right-section">
        <h2>Ingresa tus datos</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Teléfono:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Cliente:
            <select name="clientType" value={formData.clientType} onChange={handleChange}>
              <option value="">Seleccione</option>
              <option value="particular">Particular</option>
              <option value="taller">Taller</option>
            </select>
          </label>
          <label>
            Documento:
            <input
              type="text"
              name="document"
              value={formData.document}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Comentario:
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </label>
          <div className="button-container">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
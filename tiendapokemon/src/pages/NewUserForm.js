import React, { useState } from 'react';

function NewUserForm() {
  const [formData, setFormData] = useState({   
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {         
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>         
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="first_name"
          className="form-control"
          value={formData.first_name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Apellidos</label>
        <input
          type="text"
          name="last_name"
          className="form-control"
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="text"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <input type="submit" value="Enviar" className="btn btn-info" />
    </form>
  );
}

export default NewUserForm;


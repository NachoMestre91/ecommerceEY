import React, {useState} from 'react';

export const Register = () => {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [phone, setPhone] = useState('');

  const initialValues = {name: '', email: '', phone: ''};
  const [form, setForm] = useState(initialValues);
  const handleForm = ({target}) => {
    //console.log(e.target.value);
    const {name, value} = target;
    setForm({...form, [name]: value});
  };
  console.log(form);

  //   const handleName = ({target}) => {
  //     setName(target.value);
  //   };
  //   const handleEmail = e => {
  //     setEmail(e.target.value);
  //   };

  const handleReset = () => {
    setForm(initialValues);
  };

  const handleSubmit = e => {
    e.preventDefault();

    //console.log(name, email);
    handleReset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          //   onChange={handleName}
          //onChange={e => setName(e.target.value)}
          onChange={handleForm}
          placeholder="Ingrese nombre..."
        />
        <input
          type="email"
          name="email"
          value={form.email}
          //   onChange={handleEmail}
          onChange={handleForm}
          placeholder="Ingrese email..."
        />
        <input
          type="number"
          name="phone"
          value={form.phone}
          //   onChange={handleEmail}
          onChange={handleForm}
          placeholder="Ingrese el telefono..."
        />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

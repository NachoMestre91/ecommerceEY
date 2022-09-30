import React from 'react';
import {useForm} from '../hooks/useForms';

export const Register = () => {
  const initialValues = {name: '', email: '', phone: ''};
  const {handleSubmit, email, name, phone, handleForm} = useForm(initialValues);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleForm}
          placeholder="Ingrese nombre..."
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleForm}
          placeholder="Ingrese email..."
        />
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={handleForm}
          placeholder="Ingrese el telefono..."
        />
        <input type="submit" value="crear usuario" />
      </form>
    </div>
  );
};

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleName = ({target}) => {
//     setName(target.value);
//   };
//   const handleEmail = e => {
//     setEmail(e.target.value);
//   };

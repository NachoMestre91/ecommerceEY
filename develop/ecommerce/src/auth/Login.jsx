import React from 'react';
import {useForm} from '../hooks/useForms';

export const Login = () => {
  const initialValues = {password: '', email: ''};
  const {handleSubmit, email, password, handleForm} = useForm(initialValues);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleForm}
          placeholder="Ingrese email..."
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleForm}
          placeholder="Ingrese password..."
        />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

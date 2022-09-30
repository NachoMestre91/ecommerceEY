import {useState} from 'react';

export const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);
  const handleForm = ({target}) => {
    const {name, value} = target;
    setForm({...form, [name]: value});
  };

  const handleReset = () => {
    setForm(initialValues);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleReset();
  };

  return {handleSubmit, handleForm, ...form};
};

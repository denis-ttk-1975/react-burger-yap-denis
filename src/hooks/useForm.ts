import React, { useState } from 'react';

export function useForm(inputValues: { [key: string]: string | null }) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, setValues, handleChange };
}

import { useState } from "react";

function useForm(initialValue) {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => setForm(initialValue);

  return { form, handleChange, reset };
}
export default useForm;

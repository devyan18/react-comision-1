import useForm from "../../hooks/useForm";

const Form = () => {
  const { form, handleChange, reset } = useForm({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const submit = (e) => {
    e.preventDefault();

    reset();
  };

  return (
    <div>
      <form className="form" onSubmit={submit}>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="test@test.com"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          name="password"
          placeholder="***********"
          onChange={handleChange}
          value={form.password}
        />
        <input
          type="password"
          name="repeatPassword"
          placeholder="***********"
          onChange={handleChange}
          value={form.repeatPassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Form;

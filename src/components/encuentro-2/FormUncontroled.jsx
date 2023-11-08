const FormUncontroled = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default FormUncontroled;

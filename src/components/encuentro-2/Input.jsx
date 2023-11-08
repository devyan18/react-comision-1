const Input = ({ setValue, value, type, name }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
export default Input;

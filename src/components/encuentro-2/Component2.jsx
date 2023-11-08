import css from "../component.module.css";

const Component2 = ({ hidden }) => {
  if (hidden) return null;

  return <div className={css.back}>Component2</div>;
};
export default Component2;

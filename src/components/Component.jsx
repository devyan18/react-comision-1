const Component = ({ url, title = "default value" }) => {
  const cualquiera = (title) => {
    return "Ir hacia " + title;
  };

  return (
    <li className="titulo_vinculo_login new-color">
      <a className="vinculo_login" href={url} target="_blank" rel="noreferrer">
        {cualquiera(title)}
      </a>
    </li>
  );
};

export default Component;

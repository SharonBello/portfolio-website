import "./Languages.scss";

const Languages = (props: any): JSX.Element => {
  const { languages } = props

  return (
    <>
      <h2>{languages.title}</h2>
      <ul>
        {languages.content.map((language: string, index: number) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </>
  );
};

export default Languages;

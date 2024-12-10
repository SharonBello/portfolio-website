import "./ProjectsVolunteer.scss";

const ProjectsVolunteer = (props: any): JSX.Element => {
  const { volunteer } = props

  return (
    <>
      <h2>{volunteer.title}</h2>
      <ul>
        {volunteer.content.map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsVolunteer;

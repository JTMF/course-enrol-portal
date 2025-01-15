import { useParams, NavLink, Outlet } from "react-router-dom";

const diplomas = [
  {
    name: "Information Technology",
    id: "R47",
    modules: [
      {
        name: "UI/UX Design for Apps",
        id: "C218",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        lecturer: {
          name: "Azhar Kamar",
          title: "Lecturer",
        },
      },
      {
        name: "Mobile App Development",
        id: "C346",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        lecturer: {
          name: "Derek Lee",
          title: "Lecturer",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "R18",
    modules: [
      {
        name: "Software Application Development",
        id: "C237",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        lecturer: {
          name: "Hannah Lim",
          title: "Lecturer",
        },
      },
      {
        name: "Payment Technologies",
        id: "C372",
        desc: "This module introduces students to different payment technologies and systems.",
        lecturer: {
          name: "Magdalene Lim",
          title: "Senior Lecturer",
        },
      },
    ],
  },
];

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}

export function getDiploma(dipId) {
    return diplomas.find(({ id }) => id === dipId); 
  }

export function getModule({ moduleId, dipId }) {
  return diplomas
    .find(({ id }) => id === dipId)
    .modules.find(({ id }) => id === moduleId);
}

export function Diploma() {
    const { dipId } = useParams(); 
    const diploma = getDiploma(dipId); 
    if (!diploma) {
      return (
        <div>
          <h2>Diploma not found!</h2>
          <p>Diploma with ID {dipId} does not exist.</p>
        </div>
      );
    }
  
    return (
      <div>
        <h1>{diploma.name} Diploma</h1>
        <ul>
          {diploma.modules.map((module) => (
            <li key={module.id}>
              <NavLink to={`/diplomas/${dipId}/${module.id}`}>{module.name}</NavLink>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    );
  }
  

export function Module() {
  const { dipId, moduleId } = useParams();
  const module = getModule({ dipId, moduleId });

  if (!module) {
    return <div>Module not found!</div>;
  }

  return (
    <div>
      <h2>{module.name}</h2>
      <p>{module.desc}</p>
      <h3>{module.lecturer.name} ({module.lecturer.title})</h3>
    </div>
  );
}

export default function Diplomas() {
    const diplomasList = getDiplomas();  
  
    return (
      <div className="container">
        <h1>Diplomas Offered</h1>
        <ul className="categories">
          {diplomasList.map((diploma) => (
            <li key={diploma.id}>
              <NavLink
                to={`${diploma.id}`}
                className={({ isActive }) => (isActive ? "nav-active" : null)}
              >
                {diploma.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet /> 
      </div>
    );
  }
  
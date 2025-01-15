import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "./Diplomas";

export default function Diploma() {
  const { dipId } = useParams();
  const diploma = getDiploma(dipId);

  if (!diploma) {
    return <div>Diploma not found!</div>;
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

import { useParams } from "react-router-dom";
import { getModule } from "./Diplomas";

export default function Module() {
  const { dipId, moduleId } = useParams();
  const module = getModule({ dipId, moduleId });

  if (!module) {
    return <div>Module not found!</div>;
  }

  return (
    <div>
      <h2>{module.name}</h2>
      <p>{module.desc}</p>
      <h3>Lecturer: {module.lecturer.name} ({module.lecturer.title})</h3>
    </div>
  );
}

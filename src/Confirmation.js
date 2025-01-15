import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank You, {state && state.name}!</h1>
      <p>You're now registered for {state && state.course}.</p>
      {state && state.email && (
        <p>We'll email to <strong>{state.email}</strong></p>
      )}
    </div>
  );
}

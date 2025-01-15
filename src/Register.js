import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const courseRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/confirmed", {
      state: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        course: courseRef.current.value,
      },
    });
  }

  return (
    <div>
      <h1>Register Your Interest</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Your Name" />
        <input type="email" ref={emailRef} placeholder="Your Email" />
        <input type="text" ref={courseRef} placeholder="Course Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

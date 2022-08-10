import { Navigate } from "react-router-dom";

const Form = () => {
  const handlerSubmitStudent = async (e) => {
    e.preventDefault();
    const student = {
      name: e.target.firstChild.value,
    };
    const request = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    return (
      <>
        <form action="" onSubmit={handlerSubmitStudent}>
          <input type="text" />
          <button type="submit">Add new student</button>
        </form>
      </>
    );
  };
};

export default Form;

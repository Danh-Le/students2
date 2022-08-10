import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const request = await fetch("http://localhost:5000/students");
    const response = await request.json();
    setStudents(response);
  };

  return (
    <>
      <Link to="/form"></Link>
      <div>
        <h1>List of Students</h1>
        <article>
          <ul>
            {students.map((student) => {
              return <li key={student.name}>{student.name}</li>;
            })}
          </ul>
        </article>
      </div>
    </>
  );
};

export default Home;

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent() {
    if (name === "" || age === "" || major === "") {
      return;
    }

    const student = {
      name: name,
      age: age,
      major: major
    };

    setStudents([...students, student]);

    setName("");
    setAge("");
    setMajor("");
  }

  return (
    <div className="container">
      <h1>Student Information System</h1>

      <h3>Developed By: 101579734 || Jamal Alhariri || DevOps</h3>

      <div className="form">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Major:</label>
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />

        <button onClick={addStudent}>Add Student</button>
      </div>

      <h2>Student List</h2>

      {students.length === 0 && <p>No students added yet</p>}

      {students.map((student, index) => (
        <p key={index}>
          {student.name} - {student.age} - {student.major}
        </p>
      ))}
    </div>
  );
}

export default App;
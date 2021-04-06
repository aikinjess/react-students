import React from "react";
import Scores from "../scores/Scores";
const Students = (props) => {
  return (
    <div>
      {props.students.map((student, idx) => (
        <div class="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <h3 className="card-title">{student.name}</h3>
            <p className="card-text">{student.bio}</p>
            <Scores key={idx} scores={student.scores} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Students;
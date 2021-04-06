import React from "react"
import Scores from "../scores/Scores"

const Students = (props) => {
    return (
        <div>
            {props.students.map((student, idx) =>
            <div>
            <h1>{student.name}</h1>
            <p>{student.bio}</p>
            <Scores key={idx} scores = {student.scores} />
            </div>
            )}
        </div>
    )
}
export default Students
import React from 'react'

function Student(props) {
    const student = props.student;
        console.log(student)
    return (
        <div>
            <h2>{student.name} {student.surname}</h2>
            <p>ID: {student.id}</p>
            <p>Patronymic: {student.patronymic}</p>
            <p>Birthdate: {student.birthdate}</p>
            <p>Dormitory number: {student.dormitory_number}</p>
        </div>
    );
}

export default Student;

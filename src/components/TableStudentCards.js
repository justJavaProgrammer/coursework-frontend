import React from 'react'
import {Table} from 'semantic-ui-react'
import "../styles/result-table.css"

function TableStudentCards({studentCards}) {
    if (studentCards === undefined || studentCards == null) {
        return (<div></div>);
    }
    return (
        <div className={"table-container"}>
            <Table className="result-table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Ім'я студента</Table.HeaderCell>
                        <Table.HeaderCell>Прізвище студента</Table.HeaderCell>
                        <Table.HeaderCell>По-батькові</Table.HeaderCell>
                        <Table.HeaderCell>День народження</Table.HeaderCell>
                        <Table.HeaderCell>Номер гуртожитку</Table.HeaderCell>
                        <Table.HeaderCell>Номер кімнати</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        studentCards.map(card => {
                            const {id, name, surname, patronymic, birthdate} = card.student;
                            const {dormitory_number} = card.dormitory;
                            const room_number = card.room_number;
                            return (
                                <Table.Row>
                                    <Table.Cell>{id}</Table.Cell>
                                    <Table.Cell>{name}</Table.Cell>
                                    <Table.Cell>{surname}</Table.Cell>
                                    <Table.Cell>{patronymic}</Table.Cell>
                                    <Table.Cell>{birthdate}</Table.Cell>
                                    <Table.Cell>{dormitory_number}</Table.Cell>
                                    <Table.Cell>{room_number}</Table.Cell>
                                </Table.Row>)
                        })
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

export default TableStudentCards;
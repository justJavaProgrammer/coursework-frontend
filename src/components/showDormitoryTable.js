import React from 'react';
import {Table} from 'semantic-ui-react';

const ShowDormitoryTable = ({dormitories}) => {
    console.log(dormitories)
    return (
        <div className={"table-container"}>
            <Table className={"result-table"} celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Номер гуртожитку</Table.HeaderCell>
                        <Table.HeaderCell>Адреса</Table.HeaderCell>
                        <Table.HeaderCell>Номер телефону адміністрації</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        dormitories.map((item, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{item.dormitory_number}</Table.Cell>
                            <Table.Cell>{`${item.address.street}, ${item.address.state}, ${item.address.country}, ${item.address.zip_code}`}</Table.Cell>
                            <Table.Cell>{item.phone_number}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default ShowDormitoryTable;
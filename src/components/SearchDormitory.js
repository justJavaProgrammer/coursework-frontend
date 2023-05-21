import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import { SEARCH_DORMITORY_URL } from '../constants';

const SearchDormitory = ({onResultLoaded}) => {
    const [formData, setFormData] = useState({
        dormitory_number: null,
        address: {
            type: 'building',
            country: null,
            street: null,
            zip_code: null,
            state: null
        },
        phone_number: null
    });

    const handleChange = (e, { name, value }) => {
        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1];
            setFormData((prevFormData) => {
                const updatedAddress = { ...prevFormData.address };
                updatedAddress[addressField] = value !== '' ? value : null;
                return {
                    ...prevFormData,
                    address: updatedAddress
                };
            });
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value !== '' ? value : null
            }));
        }
    };


    const handleSubmit = () => {
        console.log(formData);
        axios
            .post(SEARCH_DORMITORY_URL, formData)
            .then((response) => {
                // Handle success response
                console.log(response.data);
                onResultLoaded(response.data)
            })
            .catch((error) => {
                // Handle error response
                console.error(error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input
                    label="Номер гуртожитку"
                    name="dormitory_number"
                    value={formData.dormitory_number}
                    onChange={handleChange}
                />
                <Form.Input
                    label="Країна"
                    name="address.country"
                    value={formData.address.country}
                    onChange={handleChange}
                />
                <Form.Input
                    label="Вулиця"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    label="ZIP Code"
                    name="address.zip_code"
                    value={formData.address.zip_code}
                    onChange={handleChange}
                />
                <Form.Input
                    label="Район або місто"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleChange}
                />
                <Form.Input
                    label="Номер телефону"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default SearchDormitory;

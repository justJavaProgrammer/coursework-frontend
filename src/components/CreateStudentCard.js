import React, {useState} from 'react';
import '../styles/create-student-card.css';
import {CREATE_STUDENT_CARD_URL} from '../constants';
import axiosInstance from './AxiosInstance';
import ErrorMessage from './ErrorMessage';
import RestrictedPage from "../pages/RestrictedPage";

const CreateStudentCard = () => {

    const [formData, setFormData] = useState({
        student: {
            id: 5,
        },
        address: {
            type: 'building',
            street: '',
            country: '',
            zipCode: '',
            state: '',
            building_number: '',
        },
        dormitory: {
            number: 102,
        },
        room_number: 2,
        entrance: '',
        apartment_number: '',
    });


    const [errorPopup, setErrorPopup] = useState({});

    if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined) {
        return (
            <RestrictedPage></RestrictedPage>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Client-side validation
        if (!isFormValid()) {
            setErrorPopup({ status: true, message: 'Please fill in all required fields' });
            return;
        }

        // Send the Axios request
        axiosInstance
            .post(CREATE_STUDENT_CARD_URL, formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
                setErrorPopup({ status: true, message: error.response.data.reason });
                setTimeout(() => {
                    setErrorPopup({ status: false, message: null });
                }, 3000);
            });
    };

    const isFormValid = () => {
        const {
            studentId,
            type,
            street,
            country,
            zipCode,
            state,
            buildingNumber,
            dormitoryNumber,
            roomNumber,
        } = formData;

        const fieldValidity = {
            studentId: !!studentId,
            type: !!type,
            street: !!street,
            country: !!country,
            zipCode: !!zipCode,
            state: !!state,
            buildingNumber: !!buildingNumber,
            dormitoryNumber: !!dormitoryNumber,
            roomNumber: !!roomNumber,
        };

        setErrorPopup({
            status: Object.values(fieldValidity).some((valid) => !valid),
            message: 'Please fill in all required fields',
        });

        return Object.values(fieldValidity).every((valid) => valid);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the form data
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const renderAdditionalFields = () => {
        if (formData.type === 'building') {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="buildingNumber">Номер будинку:</label>
                        <input
                            type="text"
                            id="buildingNumber"
                            name="buildingNumber"
                            value={formData.buildingNumber}
                            onChange={handleChange}
                        />
                    </div>
                </>
            );
        } else if (formData.type === 'apartment') {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="entrance">Під'їзд:</label>
                        <input
                            type="text"
                            id="entrance"
                            name="entrance"
                            value={formData.entrance}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apartmentNumber">Номер квартири:</label>
                        <input
                            type="text"
                            id="apartmentNumber"
                            name="apartmentNumber"
                            value={formData.apartmentNumber}
                            onChange={handleChange}
                        />
                    </div>
                </>
            );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="studentId">Номер студента у системі:</label>
                <input
                    type="number"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="type">Тип будинок батьків:</label>
                <select id="type" name="type" value={formData.type} onChange={handleChange} required>
                    <option value="">Please select a type</option>
                    <option value="building">Будинок</option>
                    <option value="apartment">Квартира</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="street">Вулиця:</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="country">Країна:</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="zipCode">Zip Code:</label>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="state">Район або місто:</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                />
            </div>
            {renderAdditionalFields()}
            <div className="form-group">
                <label htmlFor="dormitoryNumber">Номер гуртожитку:</label>
                <input
                    type="number"
                    id="dormitoryNumber"
                    name="dormitoryNumber"
                    value={formData.dormitoryNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="roomNumber">Номер кімнати:</label>
                <input
                    type="number"
                    id="roomNumber"
                    name="roomNumber"
                    value={formData.roomNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            {errorPopup.status && (
                <ErrorMessage message={errorPopup.message} onDismiss={() => setErrorPopup(false)} />
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateStudentCard;

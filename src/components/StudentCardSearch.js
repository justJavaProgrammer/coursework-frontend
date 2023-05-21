import React, {useRef, useState} from "react";
import axios from "axios";
import {STUDENT_CARDS_SEARCH_URL} from "../constants"
import "../styles/student-card-search.css"
import {Message} from "semantic-ui-react";
import ErrorMessage from "./ErrorMessage";

const DEFAULT_SEARCH_PAGE_SIZE = 20;

function StudentCardSearch(props) {

    const onResultLoaded = props.onResultLoaded;
    const [errorPopupOpen, setErrorPopupOpen] = useState(false);

    const name = useRef(null)
    const surname = useRef(null)
    const patronymic = useRef(null)
    const dormitoryNumber = useRef(null)
    const roomNumber = useRef(null)



    function search(e) {
        e.preventDefault()
        let url = buildSearchQuery();
        axios.get(url)
            .then(response => {
                onResultLoaded(response.data)
            })
            .catch(e => {
                    console.log(e);
                    setErrorPopupOpen(true)
                    setTimeout(() => {
                      setErrorPopupOpen(false)
                    }, 3000)
                }
            )
    }

    function buildSearchQuery() {
        const queryParams = new URLSearchParams();

        const nameValue = name.current.value;
        const surnameValue = surname.current.value;
        const patronymicValue = patronymic.current.value;
        const dormitoryNumberValue = dormitoryNumber.current.value;
        const roomNumberValue = roomNumber.current.value;

        if (nameValue) {
            queryParams.append('name', nameValue);
        }
        if (surnameValue) {
            queryParams.append('surname', surnameValue);
        }
        if (patronymicValue) {
            queryParams.append('patronymic', patronymicValue);
        }
        if (dormitoryNumberValue) {
            queryParams.append('dormitory_number', dormitoryNumberValue);
        }
        if (roomNumberValue) {
            queryParams.append('room_number', roomNumberValue);
        }

        queryParams.append('size', DEFAULT_SEARCH_PAGE_SIZE);

        return `${STUDENT_CARDS_SEARCH_URL}?${queryParams.toString()}`;
    }

    return (
        <div>
            <form onSubmit={search}>
                <div className="form-group">
                    <input placeholder="Ім'я студента" ref={name} />
                </div>
                <div className="form-group">
                    <input placeholder="Прізвище студента" ref={surname} />
                </div>
                <div className="form-group">
                    <input placeholder="По-батькові студента" ref={patronymic} />
                </div>
                <div className="form-group">
                    <input placeholder="Номер гуртожитку" ref={dormitoryNumber} />
                </div>
                <div className="form-group">
                    <input placeholder="Номер кімнати" ref={roomNumber} />
                </div>
                <button type="submit">Пошук</button>
            </form>

            {errorPopupOpen && (
               <ErrorMessage onDismiss={() => setErrorPopupOpen(false)}></ErrorMessage>
            )}
        </div>
    );
}

export default StudentCardSearch;
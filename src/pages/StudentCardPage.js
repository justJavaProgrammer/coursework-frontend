import React, {useState} from 'react'
import StudentCardSearch from "../components/StudentCardSearch";
import TableStudentCards from "../components/TableStudentCards";
import "../styles/student-card-page.css"

function StudentCardPage(props) {
    const [searchData, setSearchData] = useState([]);

    async function handleSearch(data) {
        await setSearchData(data.result);
    }

    return (
        <div className={"container"}>
            <div className={"student-card-search"}>
                <StudentCardSearch onResultLoaded={handleSearch}></StudentCardSearch>
            </div>
            <div className={"student-card-table-result"}>
                <TableStudentCards studentCards={searchData}></TableStudentCards>
            </div>
        </div>
    )
}

export default StudentCardPage;
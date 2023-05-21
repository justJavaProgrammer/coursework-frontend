import React, {useState} from 'react'
import SearchDormitory from "../components/SearchDormitory";
import ShowDormitoryTable from "../components/showDormitoryTable";

function DormitoryPage(props) {
    const [searchData, setSearchData] = useState([]);

    async function handleSearch(data) {
        await setSearchData(data.result);
    }



    return (
        <div>
            <SearchDormitory onResultLoaded={handleSearch}></SearchDormitory>
            <ShowDormitoryTable dormitories={searchData}></ShowDormitoryTable>
        </div>
    )
}


export default DormitoryPage;
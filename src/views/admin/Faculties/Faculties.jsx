import React, { useState } from 'react'
import PageLayout from '../../../components/page_layout/PageLayout'
import styled from 'styled-components'
import Header from '../../../components/header/header';
import themes from '../../../helpers/themes';
import DataTable from '../../../components/data_table/data_table';
import Filters from '../../../components/filters/filters';
import Pagination from '../../../components/pagination/pagination';

const StyledElement = styled.div`
    display:grid;
    gap:12px;
`;

const tableHeaders = [
    {
        name: 'Name',
    },
];

const rows = [
    { id: 1, name: "Müh" },
    { id: 2, name: "Fen" },
];


function Faculties() {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10)
    const [dynamicFilter, setdynamicFilter] = useState([
        {
            name: 'Faculty Name',
            field: 'Name',
            select: null,
            options: [],
        },
    ]);


    const updateFaculty = async (item) => {
        console.log("UPDATE");
        console.log({ ...item });
    }

    const deleteFaculty = async (id) => {
        console.log("DELETE " + id);
    }

    const operations = [
        {
            name: "Edit",
            process: updateFaculty,
            params: ['item']
        },
        {
            name: "Delete",
            process: deleteFaculty,
            params: ['id']
        },
        // {
        //     name: "Detay",
        //     process: () => console.log("Yaşıyorum")
        // }
    ];


    return (
        <PageLayout>
            <StyledElement>
                <Header title='All Faculties' primaryColor={themes.admin.primary} />
                <Filters filters={dynamicFilter} />
                <DataTable pageIndex={0} pageSize={10} headers={tableHeaders} rows={rows.map((row) => ({ name: row.name }))} operations={operations} />
                <Pagination
                    start={1}
                    end={2}
                    usePaginate={[pageIndex, setPageIndex]}
                />
            </StyledElement>
        </PageLayout>
    )
}

export default Faculties
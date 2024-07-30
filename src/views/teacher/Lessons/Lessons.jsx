import React, { useState } from 'react'
import PageLayout from '../components/page_layout/PageLayout'
import Header from '../../../components/header/header'
import themes from '../../../helpers/themes'
import styled from 'styled-components'
import DataTable from '../../../components/data_table/data_table'
import Pagination from '../../../components/pagination/pagination'
import Filters from '../../../components/filters/filters'

const StyledElement = styled.div`
    display:grid;
    gap:12px;
`;


const tableHeaders = [
    {
        name: 'Code',
    },
    {
        name: 'Name'
    }
];

const rows = [
    { id: 1, code: "BIL 202", name: "Mesleki İnglizce" },
    { id: 2, code: "BIL 403", name: "Bilgisayar Ağları" },
];
function TeacherLessons() {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [dynamicFilter, setdynamicFilter] = useState([
        {
            name: 'Name',
            field: 'firstName',
            select: null,
            options: [],
        },
        {
            name: 'Surname',
            field: 'lastName',
            select: null,
            options: [],
        },
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
            name: "Detay",
            process: () => console.log("Yaşıyorum")
        }
    ];


    return (
        <PageLayout>
            <StyledElement>
                <Header title='All Lessons' primaryColor={themes.teacher.primary} />
                <Filters primaryColor={themes.teacher.primary} filters={dynamicFilter} />
                <DataTable
                    pageIndex={pageIndex}
                    pageSize={10}
                    headers={tableHeaders}
                    rows={rows.map(({ code, name }) => ({ code, name }))}
                    operations={operations} />
                <Pagination
                    start={1}
                    end={2}
                    usePaginate={[pageIndex, setPageIndex]}
                    primaryColor={themes.teacher.primary}
                />
            </StyledElement>
        </PageLayout>
    )
}

export default TeacherLessons
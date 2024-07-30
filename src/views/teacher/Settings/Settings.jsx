import React from 'react'
import PageLayout from '../components/page_layout/PageLayout'
import Header from "../../../components/header/header";
import themes from '../../../helpers/themes';
import Tabbar from './components/tabbar/tabbar';

function TeacherSettings() {
    return (
        <PageLayout>
            <Header title="Settings" primaryColor={themes.teacher.primary} />
            <Tabbar />
        </PageLayout>
    )
}

export default TeacherSettings
import { alpha, hexToRgb } from '@mui/material';

const themes = {
    common: {
        login_background_color: '#023047',
        input_background_color: '#F3F6F8',
        black_color: 'black',
        sidebar_navigate_active_bgcolor: alpha(hexToRgb('#EF6351'), 0.15),
        sidebar_navigate_active_icolor: '#EF6351',
        sidebar_navigate_normal_bgcolor: 'none',
        sidebar_navigate_normal_icolor: 'rgba(255, 255, 255, 0.5)',
        primary_shadow: '0 -1px 4px 0 rgba(33, 158, 188, 0.25), 0 4px 4px 0 rgba(33, 158, 188, 0.25)',
    },
    admin: {
        primary: '#EF6351',
        secondary: '#8ECAE6',
        sidebar_bgcolor: '#023047',
        sidebar_navigate_active_bgcolor: alpha(hexToRgb('#EF6351'), 0.15),
        sidebar_navigate_active_icolor: '#EF6351',
        sidebar_navigate_normal_bgcolor: 'none',
        sidebar_navigate_normal_icolor: 'rgba(255, 255, 255, 0.5)',
        input_background_color: '#F3F6F8',
        input_font_color: 'rgba(0, 0, 0, 0.5)',
        primary_shadow:
            '0 -1px 4px 0 rgba(239, 99, 81, 0.25), 0 4px 4px 0 rgba(239, 99, 81, 0.25)',
        date_picker_bgcolor: alpha(hexToRgb('#8ECAE6'), 0.25),
        date_range_btncolor1: "#FB8500",
    },
    teacher: {
        primary: '#8AC926',
        secondary: '#8ECAE6',
        sidebar_bgcolor: '#023047',
        sidebar_navigate_active_bgcolor: alpha(hexToRgb('#8AC926'), 0.15),
        sidebar_navigate_active_icolor: '#8AC926',
        sidebar_navigate_normal_bgcolor: 'none',
        sidebar_navigate_normal_icolor: 'rgba(255, 255, 255, 0.5)',
        input_background_color: '#F3F6F8',
        input_font_color: 'rgba(0, 0, 0, 0.5)',
        primary_shadow:
            '0 -1px 4px 0 rgba(138, 201, 38, 0.25), 0 4px 4px 0  rgba(138, 201, 38, 0.25)',
        date_picker_bgcolor: alpha(hexToRgb('#8ECAE6'), 0.25),
        date_range_btncolor1: "#FB8500",
    }
}

export default themes;
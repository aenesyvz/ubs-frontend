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
    }
}

export default themes;
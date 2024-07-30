import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TuneIcon from '@mui/icons-material/Tune';

import styled from 'styled-components';
import themes from '../../helpers/themes';
// import { FiltersModal } from '../components';

const StyledElement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;

  & > .filter_container > .filter_icon {
    padding: 8px;
    background-color: ${(props) => props.primarycolor};
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    > svg {
      height: 24px;
      width: 24px;
      color: #fff;
    }
  }

  & > .filter_container {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  & > .filter_container > .filter {
    padding: 12px 8px;
    background-color: ${(props) => props.primarycolor};
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
`;

function Filters({ filters, primaryColor = themes.admin.primary }) {
    const [openFilterModal, setOpenFilterModal] = useState(false);

    return (
        <StyledElement primarycolor={primaryColor}>
            <div className="filter_container">
                <div className="filter_icon" onClick={() => setOpenFilterModal(true)}>
                    <TuneIcon />
                </div>
                {filters.map((filter, i) => {
                    return (
                        <div
                            className="filter"
                            onClick={() => setOpenFilterModal(true)}
                            key={i}
                        >
                            {filter.name}
                        </div>
                    );
                })}
            </div>
            {/* {openFilterModal && (
        <FiltersModal
          primaryColor={primaryColor}
          onClose={() => setOpenFilterModal(false)}
        />
      )} */}
        </StyledElement>
    );
}

Filters.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.object),
};

export default Filters;

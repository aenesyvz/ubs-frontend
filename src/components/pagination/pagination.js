import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import themes from '../../helpers/themes';
const StyledElement = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;

  & > * {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    background-color: ${(props) => props.primarycolor};
    border-radius: 8px;

    font-size: 14px;
    font-weight: 600;
  }

  & > .pagination_item {
    height: 32px;
    width: 32px;
  }

  & > .fast_pagination_item {
    height: 32px;
    padding: 0px 8px;
  }

  & > .choosen {
    background-color: #fb8500;
  }
`;

function Pagination({
    start,
    end,
    usePaginate,
    primaryColor = themes.admin.primary,
}) {
    const [pageIndex, setPageIndex] = usePaginate;
    const numbers = Array.from({ length: 1 + end - start }, (v, k) => k + 1);

    const specialStates = {
        closingToStart: {
            condition: pageIndex - 3 < 0,
            range: numbers.slice(0, 6),
        },
        closingToEnd: {
            condition: pageIndex + 3 > end - 1,
            range: numbers.slice(end - 6, end),
        },
        other: {
            range: numbers.slice(
                pageIndex - 3 > -1 ? pageIndex - 3 : 0,
                pageIndex + 3 < end ? pageIndex + 3 : end
            ),
        },
        calc: (state1, state2, state3) =>
            state1.condition
                ? state1.range
                : state2.condition
                    ? state2.range
                    : state3.range,
    };

    const numberRange = specialStates.calc(
        specialStates.closingToStart,
        specialStates.closingToEnd,
        specialStates.other
    );

    return (
        <StyledElement primarycolor={primaryColor}>
            <div
                className="fast_pagination_item"
                onClick={() => (pageIndex === 0 ? null : setPageIndex(0))}
            >
                First
            </div>
            <div
                className="fast_pagination_item"
                onClick={() => (pageIndex === 0 ? null : setPageIndex(pageIndex - 1))}
            >
                {'< Prev'}
            </div>
            {numberRange.map((number, i) => {
                return (
                    <div
                        key={i}
                        className={`pagination_item ${number - 1 === pageIndex && 'choosen'
                            }`}
                        onClick={() => setPageIndex(number - 1)}
                    >
                        {number}
                    </div>
                );
            })}
            <div
                className="fast_pagination_item"
                onClick={() =>
                    pageIndex === end - 1 ? null : setPageIndex(pageIndex + 1)
                }
            >
                {'Next >'}
            </div>
            <div
                className="fast_pagination_item"
                onClick={() => (pageIndex === end - 1 ? null : setPageIndex(end - 1))}
            >
                Last
            </div>
        </StyledElement>
    );
}

Pagination.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    usePaginate: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Pagination;

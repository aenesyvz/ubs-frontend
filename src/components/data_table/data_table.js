import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themes from '../../helpers/themes';

const StyledElement = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  .scrollable {
    overflow-x: auto;
  }

  .scrollable::-webkit-scrollbar {
    height: 4px;
    border-radius: 12px;
  }

  .scrollable::-webkit-scrollbar-track {
    background: #fff;
  }

  .scrollable::-webkit-scrollbar-thumb {
    background: ${(props) => props.primarycolor};
    border-radius: 6px;
    padding: 1px;
  }

  .scrollable::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.primarycolor};
  }

  & > .scrollable > table {
    width: 100%;
  }

  tr {
    > * {
      padding: 20px;
      text-align: left;
    }
  }

  th {
    color: rgba(0, 0, 0, 0.75);
    font-size: 12px;
    font-weight: bold;
  }

  td {
    font-size: 14px;

    > a {
      color: ${(props) => props.primarycolor};
    }
  }

  .operations {
    display: flex;
    gap: 8px;

    > * {
      cursor: pointer;
    }
  }
`;

function DataTable({
  headers,
  rows,
  pageIndex,
  pageSize,
  primaryColor = themes.admin.primary,
  operations = null
}) {

  const handleOperation = (operation, row) => {

    if (operation.params && operation.params.length > 0 && operation.params.includes('item')) {
      operation.process(row);
    } else if (operation.params && operation.params.length > 0) {
      const params = operation.params.map(param => row[param]);
      operation.process(...params);
    } else {
      operation.process();
    }
  }

  return (
    <StyledElement primarycolor={primaryColor}>
      <div className="scrollable">
        <table>
          <thead>
            <tr>
              <th>#</th>
              {headers.map((header, i) => {
                return <th key={i}>{header.name.toUpperCase()}</th>;
              })}
              <th>OPERATIONS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const keys = Object.keys(row);
              console.log(row);

              return (
                <tr key={i}>
                  <td>{pageIndex * pageSize + i + 1}</td>
                  {
                    keys.map((key, i) => <td key={i}>{row[key]}</td>)
                  }

                  {operations && operations.length > 0 && (
                    <td className="operations">
                      {operations.map((operation, opIndex) => (
                        <>
                          <span
                            key={opIndex}
                            onClick={() => handleOperation(operation, row)}
                          >
                            {operation.name}
                          </span>
                          &nbsp;
                        </>
                      ))}
                    </td>
                  )}

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledElement>
  );
}

DataTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  pageIndex: PropTypes.number,
  pageSize: PropTypes.number,
};

export default DataTable;

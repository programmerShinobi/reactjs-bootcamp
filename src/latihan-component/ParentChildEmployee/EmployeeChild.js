import React from "react";
import DataTable from 'react-data-table-component';

const ChildComponent = ({ columns, sortAscending, sortColumn, handleSort, sortedEmployees, setSearchTerm }) => {
    // const { columns, sortAscending, sortColumn, handleSort, sortedEmployees, setSearchTerm } = props;

    return (
        <div>
            <header className="App-header ">
                <div className="mt-4 mb-4 mx-4 d-flex justify-content-center align-items-center text-center">
                    <div class="card color-custom-bg" style={{ width: '700px' }}>
                        <div class="card-header bg-primary">
                            <h3 className='text-center text-sm'><i className="fa-solid fa-user-ninja"></i> Shinobi Employee</h3>
                        </div>
                        <div className="card-body">
                            <input className="search-employee justify-content-center align-items-center text-center" placeholder="Search Employee..." onChange={e => setSearchTerm(e.target.value)} />
                            <div className='rounded-individual '>
                                <DataTable
                                    columns={columns}
                                    data={sortedEmployees}
                                    onSort={handleSort}
                                    sortAscending={sortAscending}
                                    sortColumn={sortColumn}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default ChildComponent

import React, { useState } from 'react';
import ChildComponent from './EmployeeChild';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([
        { emp_id: 1, emp_fullname: 'Uzumaki Naruto', emp_salary: '$90,000', emp_department: 'HR', emp_url: 'www.naruto.com' },
        { emp_id: 2, emp_fullname: 'Uchiha Sasuke', emp_salary: '$80,000', emp_department: 'IT', emp_url: 'www.sasuke.com' },
        { emp_id: 3, emp_fullname: 'Haruno Sakura', emp_salary: '$70,000', emp_department: 'FE', emp_url: 'www.sakura.com' },
        { emp_id: 4, emp_fullname: 'Hatake Kakashi', emp_salary: '$80,000', emp_department: 'MTC', emp_url: 'www.kakashi.com' },
        { emp_id: 5, emp_fullname: 'Jiraya', emp_salary: '$90,000', emp_department: 'HR', emp_url: 'www.jiraya.com' },
        { emp_id: 6, emp_fullname: 'Senju Tsunade', emp_salary: '$95,000', emp_department: 'FE', emp_url: 'www.tsunade.com' },
        { emp_id: 7, emp_fullname: 'Orochimaru', emp_salary: '$99,000', emp_department: 'IT', emp_url: 'www.orochimaru.com' },
        { emp_id: 8, emp_fullname: 'Uzumaki Nagato', emp_salary: '$100,000', emp_department: 'HR', emp_url: 'www.nagato.com' },
        { emp_id: 9, emp_fullname: 'Uchiha Itachi', emp_salary: '$99,000', emp_department: 'MTC', emp_url: 'www.itachi.com' },
        { emp_id: 10, emp_fullname: 'Uchiha Madara', emp_salary: '$90,000', emp_department: 'IT', emp_url: 'www.madara.com' },
        { emp_id: 11, emp_fullname: 'Senju Hashirama', emp_salary: '$1,000,000', emp_department: 'HR', emp_url: 'www.hashirama.com' },
        // dan seterusnya
    ]);

    const columns = [
        {
            name: 'ID',
            selector: 'emp_id',
            sortable: true,
        },
        {
            name: 'Nama Lengkap',
            selector: 'emp_fullname',
            sortable: true,
        },
        {
            name: 'Gaji',
            selector: 'emp_salary',
            sortable: true,
        },
        {
            name: 'Departemen',
            selector: 'emp_department',
            sortable: true,
        },
        {
            name: 'URL',
            selector: 'emp_url',
            sortable: true,
        },
    ];

    const [sortColumn, setSortColumn] = useState(null);
    const [sortAscending, setSortAscending] = useState(true);
    const handleSort = (clickedColumn) => {
        if (sortColumn !== clickedColumn) {
            setSortColumn(clickedColumn);
            setSortAscending(true);
        } else {
            setSortAscending(!sortAscending);
        }
    };

    const handleSearch = (searchTerm) => {
        setEmployees(prevEmployees => prevEmployees.filter(employee => employee.emp_fullname.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    let [searchTerm, setSearchTerm] = useState("")
    const filteredEmployees = employees.filter(employee =>
        employee.emp_fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedEmployees = filteredEmployees.sort((a, b) => {
        if (sortAscending) {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
    });

    return (
        <ChildComponent
            columns={columns}
            sortAscending={sortAscending}
            sortColumn={sortColumn}
            handleSort={handleSort}
            handleSearch={handleSearch}
            sortedEmployees={sortedEmployees}
            setSearchTerm={setSearchTerm}
        />
    );
}

export default EmployeeTable;


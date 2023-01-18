const [employees, setEmployees] = useState([
    { emp_id: 1, emp_fullname: 'John Doe', emp_salary: '$50,000', emp_department: 'IT', emp_url: 'www.example.com' },
    { emp_id: 2, emp_fullname: 'Jane Doe', emp_salary: '$60,000', emp_department: 'HR', emp_url: 'www.example.com' },
    // dan seterusnya
]);

const columns = [
    {
        name: 'ID',
        selector: 'emp_id',
    },
    {
        name: 'Nama Lengkap',
        selector: 'emp_fullname',
    },
    {
        name: 'Gaji',
        selector: 'emp_salary',
    },
    {
        name: 'Departemen',
        selector: 'emp_department',
    },
    {
        name: 'URL',
        selector: 'emp_url',
    },
];

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
// import './index.css';
// import App from './App';
// import MyComponent from './latihan-component/bootstrap-test';
import CalculatorSubtraction from './latihan-component/calculator-subtraction';
import CalculatorMultiplication from './latihan-component/calculator-multiplication';
import CalculatorAddition from './latihan-component/calculator-addition';
import CalculatorDivision from './latihan-component/calculator-division';
import KirimNama from './latihan-component/ParentChild/KirimDataNama';
import KirimNamaObject from './latihan-component/ParentChild/KirimDataNamaObject';
import ParentComponent from './latihan-component/ParentChild/ParentComponent';
import CalculatorParent from './latihan-component/ParentChildCalculator/CalculatorParent';
import EmployeeTable from './latihan-component/ParentChildEmployee/EmployeeParent';
import { MainLayout } from './layout/MainLayout';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyComponent /> */}

    {/* <CalculatorAddition />
    <CalculatorSubtraction />
    <CalculatorMultiplication />
    <CalculatorDivision /> */}

    {/* <KirimNama />
    <KirimNamaObject /> */}

    {/* <ParentComponent /> */}

    {/* <CalculatorParent /> */}
    {/* <EmployeeTable /> */}
    {/* <MainLayout /> */}
    <App />
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

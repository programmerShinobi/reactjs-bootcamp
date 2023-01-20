import React from "react";
import styled from "styled-components";

const Grid1 = styled.div`
    display: grid;
    grid-template-rows: 100px 150px;
    grid-template-columns: repeat(3, 250px);
    grid-gap: 10px;
`;

const Grid2 = styled.div`
    display: grid;
    grid-template-areas:
        "header header header"
        "aside main main"
        "footer footer footer"
        "me me me";
`;


export default function GridLayout() {
    return (
        <Grid2>
            <div style={{ gridArea: "header", background: "red" }}>Header</div>
            <div style={{ gridArea: "aside", background: "yellow" }}>Sidebar</div>
            <div style={{ gridArea: "main", background: "green" }}>Main</div>
            <div style={{ gridArea: "footer", background: "blue" }}>footer</div>
            <div style={{ gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 4, background: "purple" }}>Footer</div>
        </Grid2>



        // <Grid1>
        //     <div style={{ background: "red", width: "50px", height: "50px" }}>A</div>
        //     <div style={{ background: "yellow", width: "50px", height: "50px" }}>B</div>
        //     <div style={{ background: "green", width: "50px", height: "50px" }}>C</div>
        //     <div style={{ background: "blue", width: "50px", height: "50px" }}>D</div>
        //     <div style={{ background: "purple", width: "50px", height: "50px" }}>E</div>
        // </Grid1>
    )
}
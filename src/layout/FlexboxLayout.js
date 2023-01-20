import React from "react";
import styled from "styled-components";

const Flex1 = styled.div`
    display: flex;
    gap: 3px;
    flex-direction: row-reverse;
`;

const FlexLayout = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    header{
        background-color: #ccc;
        font-size: 3rem;
    }

    main{
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    main article{
        background-color: #00C9F2;
        flex: 1;
    }

    main aside{
        background-color: #FFD4D4;
    }

    footer{
        background-color: #ccc;
    }

    @media(min-width: 768px){
        main{
            display: 80%;
            margin: 0 auto;
            flex-direction: row;
        }

        .leftsidebar{
            order: -1;
        }
    }
`;

export default function FlexboxLayout() {
    return (
        <FlexLayout>
            <header>Header</header>
            <main>
                <article>Main</article>
                <aside>Right Sidebar</aside>
                <aside className="leftsidebar">Left Sidebar</aside>
            </main>
            <footer>Footer</footer>

            {/* <div style={{ background: "red" }}>A</div>
            <div style={{ background: "yellow" }}>B</div>
            <div style={{ background: "green" }}>C</div>
            <div style={{ background: "blue" }}>D</div>
            <div style={{ background: "purple" }}>E</div>
            <div style={{ background: "red" }}>A</div>
            <div style={{ background: "yellow" }}>B</div>
            <div style={{ background: "green" }}>C</div>
            <div style={{ background: "blue" }}>D</div>
            <div style={{ background: "purple" }}>E</div> */}
        </FlexLayout>
    )
}
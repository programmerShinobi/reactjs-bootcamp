import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


const Hero = styled.div`
    background : url(../../strom.gif) no-repeat center right ;
    background-size: cover;
    color: #fff;
    font-size: 20px;
    text-align: center;
    img{
        margin: auto;
        padding-top: 1rem;
        gid-column: 2/3;
        grid-row: 1/2;
        height: 165px;

    }

    article{
        grid-column: 2/3;
        grid-row: 2/3;
    }

    h2{
        font-size: 30px;
        text-transform: uppercase;
        font-weight: 600;
    }

    button {
        background: #fff;
        border-bottom: none;
        border-radius: 4px;
        box-shadow: inset 0 0 5px #eeb80c;
        color: #223054;
        font-size : 1rem;
        padding : 10px 10px;
        margin : .75rem auto 0;
        margin-bottom: 60px;
        cursor : pointer;
        text-shadow: 0 0 1px rgb(19, 177, 231);
        text-align: center;
        
        justify-content: center;
    }

    nav{
        position: absolute;
        z-index: -1;
        top: 3.0rem;
        left: -110%;
        width: 100%;
        transition: 0.22s ease-in-out;
    }



    nav::after{
        content: "";
        position: absolute;
        top: 0;
        z-index: -1;
        height: 100vh;
        width: 95vw;
        background-color: #fff;
        background-size: cover;
    }

    button .btn:hover{
        background-color: #223054;
        box-shadow: inset 0 0 5px #13b1e7;
    }

    button .btn{
        width: auto;
        background: #13b1e7;
        color: #fff;
        letter-spacing: normal;
        text-shadow: none;
        box-shadow: none;
    }
    button .btn:hover{
        box-shadow: inset 0 0 5px #13b1e7;
        background-color: #223054;
    }

`;

export default function Headers() {
    return (
        <Hero>
            <img src="../../logo.png" alt="shinobi"></img>
            <article>
                <h2>Programmer Shinobi</h2>
                <p>Programmer The Ghost Shinobi</p>
                <button className="btn">Getting Started <FontAwesomeIcon icon={faAngleDoubleRight} /> </button>
            </article>
        </Hero>
    )
}
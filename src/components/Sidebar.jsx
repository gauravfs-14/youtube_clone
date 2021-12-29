import React from 'react'
import styled from 'styled-components'


function Sidebar() {
    return (
        <SidebarStyled>
            <div className="segment">
                <div className="link home">
                    <i className="fas fa-home"></i>
                    <p>Home</p>
                </div>
                <div className="link">
                    <i className="far fa-compass"></i>
                    <p>Explore</p>
                </div>
                <div className="link">
                    <i className="fas fa-photo-video"></i>
                    <p>Subscription</p>
                </div>
            </div>
            <div className="segment">
                <div className="link">
                    <i className="fas fa-file-video"></i>
                    <p>Library</p>
                </div>
                <div className="link">
                    <i className="fas fa-history"></i>
                    <p>History</p>
                </div>
            </div>
        </SidebarStyled >
    )
}

export default Sidebar

const SidebarStyled = styled.nav`
    background-color: white;
    position: fixed;
    margin-top: 50px;
    width: 200px;
    height: 100vh;
    overflow-y: auto;
    .link{
        padding: 0 30px;
        display: flex;
        height: 50px;
        align-items: center;
        transition: all .2s;
        cursor: pointer;
        &:hover{
            background-color: rgb(240,240,240);
        }
        p{
            margin-left: 10px;
            font-size: 1.1rem;
        }
    }
    .home{
        background-color: rgb(221,221,221);
        margin-top: 30px;
    }
    .segment{
        border-bottom: 1px solid rgb(204,204,204);
        padding-bottom: 10px;
        margin-top: 20px;
    }

`
import React from 'react'
import styled from 'styled-components'
import youtube from "../img/youtube.png"

function NavBar() {
    return (
        <NavStyled>
            <div className="logo">
                <i className="fa fa-bars"></i>
                <img src={youtube} alt="" />
            </div>
            <div className="search">
                <input type="search" name="" id="" placeholder='Search' />
                <i className="fas fa-search"></i>
            </div>
            <div className="menu">
                <i className="fas fa-ellipsis-v"></i>
                <button><i className="far fa-user-circle"></i>SIGN IN</button>
            </div>
        </NavStyled>
    )
}

export default NavBar

const NavStyled = styled.nav` 
    background-color: white;
    max-height: 60px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: 0 0 10px rgb(204,204,204);
    position: fixed;
    .logo{
        display: flex;
        align-items: center;
        i{
            font-size: 1.5rem;
            cursor: pointer;
        }
        img{
            height: auto;
            width: 100px;
            margin-left: 20px;
            cursor: pointer;
        }
    }
    .search{
        display: flex;
        align-items: center;
        input{
            height: 30px;
            width: 60vh;
            border: 1px solid rgb(204,204,204);
            border-radius: 0%;
            outline:none;
            font-size: 1.1rem;
            padding: 10px;
        }
            i{
                width: 60px;
                text-align: center;
                background-color: rgba(240,240,240,0.466);
                border: 1px solid rgb(204,204,204);
                border-left: none;
                padding-top: 5px;
                height: 30px;
                cursor: pointer;
                transition: all .2s;
                &:hover{
                    background-color: rgb(240,240,240);
                }
            }
        }
        .menu{
            display: flex;
            align-items: center;
            i{
                font-size: 1.2rem;
                cursor: pointer;
            }
            button{
                margin-left: 20px;
                height: 40px;
                width: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                cursor: pointer;
                background-color: transparent;
                border: 2px solid rgb(25,107,215);
                color: rgb(25,107,215);
                i{
                    margin-right: 5px;
                }
            }
        }
`

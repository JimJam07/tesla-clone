import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {navData} from '../utils/tesladata';
import {selectCars} from '../../features/carSlice/carSlice'
import {useSelector} from 'react-redux'

function Header() {
    const [burgerOpen,setOpen] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <div>
            <Container>
                <a>
                   <img src="/images/logo.svg" alt="" /> 
                </a>
                <Menu>
                    {cars && cars.map((car,index)=>{
                        return <a href="" key={index}>{car}</a>
                    })}
                </Menu>
                <RightMenu>
                    <a href="">Shop</a>
                    <a href="">Tesla Account</a>
                   <CustomMenu onClick={()=>{setOpen(true)}}/>
                </RightMenu>
                <BurgerNav show={burgerOpen}>
                    <CloseWrap>
                    <Close onClick={()=>{setOpen(false)}}/>
                    </CloseWrap>
                    {cars && cars.map((car,index)=>{
                        return <li key={index}><a href="#">{car}</a></li>
                    })}
                    {navData.map((ele,index)=>{
                        return(
                            <li key={index}><a href="#">{ele}</a></li>
                        )
                    })}
                </BurgerNav>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap:nowrap;
    }
    @media(max-width:768px){
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px;
        @media(max-width:768px){
            display:none;
        }
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    background:white;
    width:300px;
    z-index:100;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    transform: ${props=>props.show? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    li{
        cursor:pointer;
        border-radius:20px;
        padding:15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2)
        a{
            font-weight:600;

        }
        &:hover{
            background-color:hsla(0,0%,0%,.05);;
        }
    }
`
const Close = styled(CloseIcon)`
    cursor:pointer
`
const CloseWrap = styled.div`
    diaplay:flex;
    text-align:end;
    justify-content:flex-end;
`
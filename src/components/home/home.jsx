import React from 'react'
import styled from 'styled-components'
import Section from './section/section'
import teslaProductDetails from '../utils/tesladata'

function Home() {
    return (
        <Container>
            {teslaProductDetails.map((ele,index)=>{
                return (
                    <Section
                        key={index}
                        title={ele.title}
                        desc={ele.desc}
                        img={ele.img}
                        leftBtn ={ele.leftBtn}
                        rightBtn={ele.rightBtn}
                    />
                )
            })}
        </Container>
    )
}

export default Home

const Container = styled.div` 
    height:100vh;
`
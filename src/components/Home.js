import React from 'react';
import { Container, Header } from 'semantic-ui-react'
import NoDataCard from './NoDataCard'

const Home = () =>{
    return(
        <div style={{marginTop: '50px'}}>
            <Container fluid>
            <NoDataCard displayText = {'Browse through our Sections to get Details..'} 
                        bgColor = {'#3CB371 ' }
             />
                </Container>
        </div>
    )
}

export default Home
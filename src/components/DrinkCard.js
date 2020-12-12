import React from 'react';
import './DrinkCard.css'
import { Card, Image } from 'semantic-ui-react'

const DrinkCard = (props) =>{
    return(
        <Card className='card'>
            <Image src={props.drinkData.strDrinkThumb} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    {props.drinkData.strDrink}
                </Card.Header>
            </Card.Content>
        </Card>
    )
}


export default DrinkCard;
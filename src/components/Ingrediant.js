import React,{useEffect,useState} from 'react';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';
import DrinkCard from './DrinkCard'
import NoDataCard from './NoDataCard';

const Ingrediant = () =>{

    const [ingrediantList , setIngrediantList] = useState([]);
    const [cardValue, setCardValue] = useState([]);
    

    useEffect(()=>{
        const getIngrediantList =async() =>{
            const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
            const ingrediants = result.data.drinks.map((item)=>{
                return item.strIngredient1
            });
            setIngrediantList(ingrediants);
        }
        getIngrediantList();
    },[])

    const getIngrediantData = (event,value) =>{

       const callIngrediantAPI = async() =>{
        
            const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`);
            setCardValue(data.data.drinks);
        }
        if(value !== null) callIngrediantAPI()
    }

    return(
        <>
        <div>
            <Autocomplete
                id="free-solo-2-demo"
                onChange={(event,value)=>getIngrediantData(event,value)}
                freeSolo
                options={ingrediantList}
                renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Try typing Gin.."
                      margin="normal"
                      variant="outlined"
                      InputProps={{ ...params.InputProps, type: 'search' }}
                      />
                )}
                />
        </div>
        {
            cardValue.length > 0 ? (
                <div className='category-container'>
        {
            cardValue.map((data)=>{
                return (
                    
                    <DrinkCard className='category-container' key={data.idDrink} drinkData={data} />
                    
                )
            })
        }
        </div>
            ) 
            :
             <NoDataCard displayText = {'Search Through Our Entire Catalouge...'} 
                        bgColor = {'#b3cde0' }
             />
        }
        

    </>
    )
}

export default Ingrediant;
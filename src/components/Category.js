import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Category.css';
import  DrinkCard from './DrinkCard';
import NoDataCard from './NoDataCard';


const Category = () =>{

    const [categories, setCategories] = useState([]);
    const [drink, setDrinks] = useState([])

    useEffect(()=>{
        const getCategory = async() =>{
            const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            setCategories(result.data.drinks)
        }
        getCategory();
    },[])


    const categoryClicked = (e) =>{
        let name = e.target.outerText;
        const getDrinkFromCategory = async(name) =>{
            let data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`);
            setDrinks(data.data.drinks);
        }
        getDrinkFromCategory(name);
        
    }

    let allCategories =categories.map((item,index)=>{
        return(
            
            // <div className="category" key={index} onClick={(item)=>categoryClicked(item)}>
            // {item.strCategory} </div>
            <div className='container' key={index} onClick={(item)=>categoryClicked(item)}>
        <button className='btn'>
            <span className="btn-text">
            {item.strCategory}
            </span>
        </button>
        </div>

        ) 
    })

    return (
        <>
                <div className='category-container'>
                {allCategories}
                </div>
           
        
        {
            drink.length > 0 ? (
                <div className='category-container' style={{marginTop: '50px'}}>
        {
            drink.map((data)=>{
                return (
                    
                    <DrinkCard className='category-container' key={data.idDrink} drinkData={data} />
                    
                )
            })
        }
        </div>
            ):
            <NoDataCard displayText = {'Select a category to get drink Suggestions...'} 
                        bgColor = {'#fec8c1 ' }
             />
        }
        </>
    )
}

export default Category;
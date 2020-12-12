import React, {useState} from 'react'
import Category from './Category';
import Home from './Home'
import Ingrediant from './Ingrediant'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Menu} from 'semantic-ui-react'


const NavBar = () =>{

    const [selectedTag, setSelectedTag] = useState('home');


    const handleActivetag = (e, {name}) =>{
        setSelectedTag(name)
    }

    return (
        <Router>
        <Menu secondary style={{marginTop: 10}}>
            <Link to={'/'}>
            <Menu.Item 
                name = 'home'
                active = {selectedTag === 'home'}
                onClick = {handleActivetag}
            /> 
            </Link>
            <Link to={'/category'}>
            <Menu.Item 
                name = 'Category'
                active = {selectedTag === 'Category'}
                onClick = {handleActivetag}
            /> 
            </Link>
            <Link to={'/ingrediants'}>
            <Menu.Item 
                name = 'Ingrediants'
                active = {selectedTag === 'Ingrediants'}
                onClick = {handleActivetag}
            /> 
            </Link>
        </Menu>

            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/category' component={Category} />
            <Route exact path='/ingrediants' component={Ingrediant} />
            </Switch>
        </Router>
    )
    
    
}

export default NavBar;
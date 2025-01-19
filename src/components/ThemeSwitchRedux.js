import React from 'react';
import  {useSelector, useDispatch} from 'react-redux';

const ThemeSwitchRedux = () => {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();

    const ChangeTheme = () =>{
        if (theme === 'light'){
            dispatch({type: 'SWITCHTODARK'});
        } else {
            dispatch({type: 'SWITCHTOLIGHT'});
        }
       
    }
 
    return(
        <div>
          
            <button onClick={ChangeTheme}>Сменить тему сайта</button>

        </div>
    )

    
}

export default ThemeSwitchRedux;
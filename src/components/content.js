import React from 'react';
import  {useSelector} from 'react-redux';

function Content() {
  const theme = useSelector(state => state);
  const className = theme;
    return (
        <div className={className}><h1>Какой то рандомный текст</h1> 
        <h1>Какой то рандомный текст</h1> 
        <h1>Какой то рандомный текст</h1> 
        <h1>Какой то рандомный текст</h1> </div>
       
      );
}

export default Content;
import {useState} from 'react';


function TextInput() {
    const [text, setText] = useState();

    const getTxt = ({target}) => {
        setText(target.value);
    }
    return (
        <div>
            <input type="text"  onChange={getTxt}/>
            <p>Вы ввели текст: {text}</p>
        </div>
    );

}
export default TextInput;
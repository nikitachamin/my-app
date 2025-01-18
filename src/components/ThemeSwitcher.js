import { useState } from "react";
import Content from "./content";

function ThemeSwitcher() {
    const [theme, setTheme] = useState("light");

    const SwitchTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.querySelector('body').style.backgroundColor = "black";
        } else {
            setTheme("light");
            document.querySelector('body').style.backgroundColor = "white";
        }
       
    }
    return (
       <div> 
         <button onClick={SwitchTheme}>Изменить фон</button>
         <Content themeColor={theme} />
        </div>
      
    );
}

export default ThemeSwitcher;
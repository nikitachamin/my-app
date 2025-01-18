
function Content({themeColor}) {
    return (
        <div className={themeColor === "light"? "light" : "dark"}><h1>Какой то рандомный текст</h1> 
        <h1>Какой то рандомный текст</h1> 
        <h1>Какой то рандомный текст</h1> 
        <h1>Какой то рандомный текст</h1> </div>
       
      );
}

export default Content;
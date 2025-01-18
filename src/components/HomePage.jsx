import {Link} from 'react-router-dom';
function HomePage() {
    return ( 
        <>
        <header>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </header>
        <h1> Главная </h1>
        </>
     );
}

export default HomePage;
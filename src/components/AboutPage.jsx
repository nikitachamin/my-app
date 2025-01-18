import {Link} from 'react-router-dom';
function AboutPage() {
    return ( 
        <>
        <header>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </header>
        <h1> О нас </h1>
        </>
     );
}

export default AboutPage;
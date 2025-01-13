function Time() {
    let time = new Date();
    return ( 
        <h2> Текущее вермя: {time.toLocaleTimeString()}</h2>
     );
}

export default Time;
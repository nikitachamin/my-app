function EventCard({name, time, place}) {
    return ( 
        <div>
            <h2>Название мероприятия {name}</h2>
            <p>Время проведения - {time}</p>
            <p>Место проведения - {place}</p>
        </div>
     );
}

export default EventCard;
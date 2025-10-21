function Car(props) {
    return (
        <div className='car'>
            <img src={props.image} alt="cars" />
            <h1>{props.carName}</h1>
            <h2>{props.carModel}</h2>
        </div>
    );
}

export default Car;

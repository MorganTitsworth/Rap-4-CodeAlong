import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from "./card.module.css";

export default function Card(props) {
    const [data, setData] = useState({});
    const [input, setInput] = useState("Blue-Eyes White Dragon");
    const [count, setCount] = useState(0);
    const [rememberState, setRememberState] = useState([]);

    const fetchCardData = (name) => {
        axios
        .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`)
        .then(res => {
            const data = res.data.data[0];
            console.log("My data: ", data);
            setData(data);
            setCount(count + 1);
            setPrevState(data);
        })
        .catch(err => {
            console.error("You're getting an error", err);
            setData(null); 
        });
    };

    const setPrevState = ((newObj) => {
        if(newObj){
            console.log("setPrevState is running");
            setRememberState(rememberState => [...rememberState, newObj]);
            console.log("rememberState", rememberState);
        }
    })

 
    useEffect(() => {
        console.log("Use effect is running")
        fetchCardData(input); 
    }, [input]); 


    const handleSearch = () => {
        console.log("handle search", input);
            fetchCardData(input);
    };

    return (
        <div>
            <h2>Re-renders: {count}</h2>
            <input 
                type="text" 
                className={styles.inputBox} 
                placeholder="Enter card name" 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setInput(e.target.value);
                    }
                  }}
            />
            <button onClick={handleSearch} className={styles.button}>
                Search
            </button>


            {rememberState.map(item => 
            <div className={styles.cardContainer}>
                <div key={item.id}></div>
                <div className={styles.name}>{item && item.name}</div>
                <div className={styles.level}>Level: {item && item.level}</div>
                <div className={styles.type}>{item && item.type}</div>
                <div className={styles.img}>
                    <img src={item && item.card_images[0].image_url} alt={item && item.name} />
                </div>
                <div className={styles.attribute}>{item && item.attribute}</div>
                <div className={styles.atkdef}>{item && item.atk}/{item && item.def}</div>
                <div className={styles.desc}>{item && item.desc}</div>
            </div>
        ) }
    </div>
    );
}
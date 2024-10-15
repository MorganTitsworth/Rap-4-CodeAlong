import styles from './CardComponent.module.css';

export default function CardComponent({ pokemonCard }) {
    console.log('rendering card')
    return (
        <>
            {pokemonCard ?
                <div className={styles.card}>
                    <h3 className={styles.HP}>HP: {pokemonCard.stats[0].base_stat}</h3>
                    <div id="img" className={styles.img}>
                        <img src={`${pokemonCard.sprites.front_shiny}`} />
                    </div>
                    <div id="info" className={styles.info}>
                        <h3>{pokemonCard.name}</h3>
                        <h3>{pokemonCard.types[0].type.name}</h3>
                    </div>
                    <ul id="moves" className={styles.moves}>
                        {pokemonCard.moves.slice(0, 4).map((move, index) => {
                            return <li key={index}>{move.move.name}</li>
                        })}
                    </ul>
                </div>
                : null}
        </>
    )
}
import style from "./CardsContainer.module.css";
//import {useSelector} from 'react-redux';


const CardsContainer = ({image, name, types, attack, hp, id}) => {
    return(
        <div className={style.card} key={id}>
        <div className={style.cardHeader}>
        <h3 className={style.cardName}>{name}</h3>
        <img src={image} alt={name} className={style.cardImage} />
        </div>
    <div className={style.cardDetails}>
        <p className={style.cardDetail}>Hp:{hp}</p>
        <p className={style.cardDetail}>Attack: {attack}</p>
    </div>
    <div className={style.cardTypeSeparator}></div>
    <div className={style.cardTypes}>
    {types.map((e, index) => (
            <p key={index}>{e}</p>
        ))}
    </div>
    
        </div>
    )
}

export default CardsContainer;

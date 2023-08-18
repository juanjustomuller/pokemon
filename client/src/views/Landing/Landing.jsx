import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import pokeballLogo from "../../img/pokeballLogo.png";

const Landing = () => {
    return (
        <div className={style.containerLanding}>
        <div>
        <button className={style.pokeballButton}>
            <Link to='/home'>
            <img src={pokeballLogo} alt="Pokebola" />
            </Link>
        </button>
        </div>
        </div>
    )
}

export default Landing;
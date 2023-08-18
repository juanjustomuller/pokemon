import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../redux/actions";
import style from "./SearchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getNamePokemons(name))
        //console.log(name)
    }

    return(
        <div className={style.containerSB}>
            <input 
            type="text" 
            placeholder="Busca tu Pokemon..."
            onChange={(e) => handleInputChange(e)}
            className={style.inputSB}
            />
            <button 
            type="submit" 
            onClick={(e) => handleSubmit(e)} className={style.buttonSB}>Buscar</button>
        </div>
    )
}

export default SearchBar;
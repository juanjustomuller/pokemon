import React from "react";
import style from "./Paginado.module.css";

export default function Paginado({ pokemonsPerPage, pokemons, paginado }) {
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(pokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav>
            <ul className={style.pagination}>
                {pageNumbers && pageNumbers.map(number => (
                    <li  key = { number }  style={{ listStyle: "none" }} >
                    <button className={style.buttonP} onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))} 
        </ul>
        </nav >
    )
}


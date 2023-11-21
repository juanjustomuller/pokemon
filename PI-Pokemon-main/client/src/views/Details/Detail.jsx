import React from "react";
import { Link } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";



const Detail = () => {

    let { id } = useParams();
    //console.log(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id))
        return () => {
            dispatch({
                type: "GET_DETAIL",
                payload: {}
            })
        }
    }, [dispatch, id])

    const detailPokemons = useSelector((state) => state.detail);
    console.log(detailPokemons);

    const typesColors = {
        fire: "#F57D31",
        normal: "#AAA67F",
        fighting: "#D3425F",
        flying: "#A891EC",
        ground: "#DEC16B",
        poison: "#A43E9E",
        rock: "#B69E31",
        bug: "#A7B723",
        ghost: "#70559B",
        steel: "#5695A3",
        water: "#6493EB",
        grass: "#74CB48",
        electric: "#F9CF30",
        psychic: "#FB5584",
        ice: "#9AD6DF",
        dragon: "#7037FF",
        dark: "#75574C",
        fairy: "#E69EAC",
        unknown: "#BF5481",
        shadow: "#36045E",
    };

    if (!detailPokemons) {
        return <p>Loading...</p>;
    }

    return (
        <div className={style.containerCompleto}>
            <Link className={style.spanBo} to="/home">
                <button className={style.buttonVolver}>
                    <span className={style.volverSpan}>Volver</span>
                </button>
            </Link>
            {
                detailPokemons.length > 0 ? (
                    <div className={style.bodyDetail}>
                        <div
                            className={style.conteinerDetail}
                            style={{
                                backgroundColor: typesColors[detailPokemons[0]?.types[0]],
                            }}
                        >

                            <div className={style.backgroundDetail}>
                                <img
                                    className={style.imageDetail}
                                    src={detailPokemons[0].image}
                                    alt={detailPokemons[0].name}
                                />
                            </div>

                            <div className={style.contentDetail}>
                                <h1 className={style.pokemonNameDetail}>
                                    {detailPokemons[0].name}
                                </h1>

                                <h3 className={style.pokemonType}
                                    style={{
                                        backgroundColor: typesColors[detailPokemons[0]?.types[0]],
                                    }}>
                                    <p>TYPE: </p>{detailPokemons[0]?.types.join(" ")}
                                </h3>

                                <div className={style.pokemonStats}>
                                    <p style={{ backgroundColor: typesColors[detailPokemons[0]?.types[0]], }}>
                                        <span>HP: </span> {detailPokemons[0]?.hp}
                                    </p>

                                    <p style={{ backgroundColor: typesColors[detailPokemons[0]?.types[0]], }}>
                                        <span>ATTACK: </span>{detailPokemons[0]?.attack}
                                    </p>

                                    <p style={{ backgroundColor: typesColors[detailPokemons[0]?.types[0]], }}>
                                        <span>DEFENSE: </span>{detailPokemons[0]?.defense}
                                    </p>

                                    <p style={{ backgroundColor: typesColors[detailPokemons[0]?.types[0]], }}>
                                        <span>SPEED: </span>{detailPokemons[0]?.speed}
                                    </p>
                                    <p style={{ backgroundColor: typesColors[detailPokemons[0]?.types[0]], }}>
                                        <span style={{ color: "black" }}>HEIGHT: </span>{detailPokemons[0]?.height}
                                    </p>

                                    <p style={{ backgroundColor: typesColors[detailPokemons[0]?.types[0]], }}>
                                        <span>WEIGHT: </span>{detailPokemons[0]?.weight}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={style.containerLoading}>
                        <p className={style.loading}>...Loading</p>
                    </div>
                )
            }


        </div>
    );
}

export default Detail;
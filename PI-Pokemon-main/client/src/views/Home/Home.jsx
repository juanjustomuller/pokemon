import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, filterCreated, orderByName, orderByHp, orderByAttack, filterByType, getTypes } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";
import style from "./Home.module.css";



const Home = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)   //en pokemons traeme el estado de pokemons
    const [orden, setOrden] = useState("");   //estado local vacio, q solo lo voy a usar es para cuando yo setee esta pagina me modifique el estado local y se renderice
    const allTypes = useSelector((state) => state.types);
    
    //console.log("All Types:", allTypes);
    ////////////////////////////PAGINADO////////////////////////
    const [currentPage, setCurrentPage] = useState(1);                  //declaro estado local en el q le paso la pagina actual,  y cual va a ser la pag actual (va a arrancar en 1)
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);         //declaro otro estado local que tengo la cant de pokemons por pagina y va a arrancar en 12
    const indexOfLastPokemon = currentPage * pokemonsPerPage;           //seteo el indice del ultimo pokemon, y le digo sobre la pag actual mutiplicame la cant de pokemon * pagina
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;   //seteo el indice del primer pokemon, y me lo va a dar la resta entre el indice del ultimo poquemon menos los pokemon por pagina
    const currentPokemons = pokemons.slice(                             //finalmente me declaro la constante donde se va a ir guardando cuales son los pokemons que hay q renderizar dependiendo de la pagina
        indexOfFirstPokemon,                                            //a todos los pokemons cortmelos(slice) con el indice del primer pokemon de esa pag y el indice del ultimo pokemon de esa pagina
        indexOfLastPokemon);                                            //por eso se va a ir modificando dependiendo de la pag q yo este

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    ///////////////////////////////////////////////////////////////////
    
    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    }, [dispatch])
    //cuando se monta, que haga el dispatch (despacho la accion)
    // useEffect           useDispatch

    ////////////////FILTROS//////////////////////////////////////////////////////////////////////////

    const handlefilterCreated = (event) => {
        dispatch(filterCreated(event.target.value))
        setCurrentPage(1);

    }


    const handleFilterTypes = (e) => {
        e.preventDefault();
        if (e.target.value !== "Tipos") {
            dispatch(filterByType(e.target.value));
        }
        setCurrentPage(1);
    };
    ////////////////////////////////////////ORDENAMIENTOS////////////////////////////////////////////////////////

    const handleSort = (event) => {
        event.preventDefault()
        dispatch(orderByName(event.target.value))
        setCurrentPage(1);   //cuando hago el ordenamiento, le pido q me setee en la pagina 1
        setOrden(`Ordenado ${event.target.value}`)
    }

    const handleSortAttack = (e) => {
        e.preventDefault();
        if (e.target.value !== "attack") dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    };

    const handleSortHp = (e) => {
        e.preventDefault();
        if (e.target.value !== "jp") dispatch(orderByHp(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    };
    ////////////////////////////////////////RECARGAR POKEMONS////////////////////////////////////////////////////////////
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getPokemons());
    }
    ////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div className={style.homeContainer}>

            <div className={style.containerButton}>
                <button className={style.recargar} onClick={(e) => { handleClick(e)}} >
                <span className={style.reloadIcon}>⟳</span> Recargar Pokémon
                </button>
            </div>

            <div className={style.filtersContainer}>
                <select className={style.filterSelect} onChange={(event) => handleSort(event)}>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>


                <select className={style.filterSelect} onChange={event => handlefilterCreated(event)}>
                    <option value="All">Todos</option>
                    <option value="created">Creados</option>
                    <option value="api">Api</option>
                </select>

                <select className={style.filterSelect} onChange={(e) => handleFilterTypes(e)}>
                    <option>Tipos</option>
                    <option value="All">Todos</option>
                    {allTypes?.map((e) => {
                        return (
                            <option key={e.id} value={e.name}>
                                {e.name}
                            </option>
                        );
                    })}
                </select>

                <select className={style.filterSelect} onChange={e => handleSortAttack(e)}>
                    <option value="attack">Ataque</option>
                    <option value="min">min</option>
                    <option value="max">max</option>
                </select>



                <select className={style.filterSelect} onChange={(event) => handleSortHp(event)}>
                    <option value="hp">Hp</option>
                    <option value="min">min</option>
                    <option value="max">max</option>
                </select>
            </div>


            <div className={`${style.CardsContainer} ${style.cardRow}`}>
                
            {currentPokemons?.map((elem, index) => {
                //console.log("Current Pokemons:", currentPokemons);
                return (
                    <Link key={index} to={`/detail/${elem.id}`} className={style.cardLink}>
                        <CardsContainer
                            name={elem.name}
                            hp={elem.hp}
                            attack={elem.attack}
                            image={elem.image}
                            id={elem.id}
                            types={elem.types}
                            key={index}
                        />
                    </Link>
                )
            })}
            </div>
            <div className={style.paginadoContainer}>
            <Paginado className={style.paginado}
                pokemonsPerPage={pokemonsPerPage}
                pokemons={pokemons.length}
                paginado={paginado} />
                </div>
        </div>
    )
}

export default Home;





















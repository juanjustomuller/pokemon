import {
    GET_POKEMONS,
    ORDER_BY_ATTACK,
    ORDER_BY_NAME,
    ORDER_BY_HP,
    GET_TYPES,
    FILTER_BY_TYPE,
    FILTER_CREATED,
    GET_NAME_POKEMONS,
    GET_DETAIL,
} from "./actions";

const initialState = {
    pokemons: [],
    pokemonsBackUp: [],      //copia de todos los pokemons sin tocar 
    types: [],
    detail: {},
    //currentPage: 0,         //pagina actual iniciada en 0
    //pokemonsFiltered: [],  //copia de todos los pokemons filtrados por alguna funcion
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                pokemonsBackUp: action.payload,
            }

        case FILTER_CREATED: 
            const createdFilter = action.payload === 'created'
                ? state.pokemons.filter((e) => e.created)
                : state.pokemons.filter((e) => !e.created)
                console.log("Filtered Pokemons:", createdFilter);
            return {
                ...state,
                pokemons: action.payload === 'All' ? state.pokemons : createdFilter
            }

        case FILTER_BY_TYPE:
            //console.log("Filter By Type:", action.payload);
            let filterType;
            if (action.payload === "All") {
                filterType = state.pokemons;
            } else {
                filterType = state.pokemons.filter((e) =>
                    e.types.includes(action.payload)
                );
            }
            return {
                ...state,
                pokemons: filterType,
            };

        case ORDER_BY_NAME:
            let sortAll = action.payload === "asc"
                ? state.pokemons.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                })
                : state.pokemons.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0;
                })
            return {
                ...state,
                pokemons: sortAll
            }

        case ORDER_BY_ATTACK:
            let sortedAttack = [...state.pokemons];

            if (action.payload === "min") {
                sortedAttack.sort((a, b) => a.attack - b.attack);
            }
            if (action.payload === "max") {
                sortedAttack.sort((a, b) => b.attack - a.attack);
            }
            return {
                ...state,
                pokemons: sortedAttack,
            };

        case ORDER_BY_HP:
            let sortedHp = [...state.pokemons]

            if (action.payload === "min") {
                sortedHp.sort((a, b) => a.hp - b.hp);
            }
            if (action.payload === "max") {
                sortedHp.sort((a, b) => b.hp - a.hp);
            }
            return {
                ...state,
                pokemons: sortedHp,
            };

        case GET_NAME_POKEMONS:
            if (action.payload.error) {
                return {
                    ...state,
                    pokemons: [],
                    notFound: true,
                };
            } else {
                return {
                    ...state,
                    pokemons: action.payload,
                    notFound: false,
                }
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };

        default:
            return { ...state };
    }
}

export default rootReducer;




























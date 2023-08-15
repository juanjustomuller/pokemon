import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_NAME_POKEMONS = "GET_NAME_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_DETAIL = "GET_DETAIL";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const ORDER_BY_HP = "ORDER_BY_HP";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";



//OBTENGO TODOS LOS POKEMONES
export const getPokemons = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/pokemons");  //https://pokeapi.co/api/v2/pokemon/?offset=200&limit=200
        //console.log("API Data:", apiData)
        const pokemons = apiData.data;
        //console.log("Pokemons:", pokemons);
        dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        })
    }
}

//CREO POKEMONES
export const createPokemon = (info) => {
    return async function (dispatch) {
        try {
            const response = await axios.post("http://localhost:3001/pokemons/", info)
            
            alert("El pokemon fue creado correctamente");
            console.log("RESPONSE:", response)
            return response
        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
        }
    }
}

//GET TYPES
export const getTypes = () => {
    return async (dispatch) => {
        let info = await axios.get("http://localhost:3001/types", {});
        return dispatch({ type: GET_TYPES, payload: info.data });
    };
};

//FILTRO POR CREADO EN DB O EN API
export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED,
        payload
    }
}

//FILTRO POR TIPOS
export const filterByType = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload,
    };
};

//ORDENAMIENTO POR NOMBRE(ALFABETICO en la Home)
export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

//ORDENAMIENTO POR ATAQUE
export const orderByAttack = (payload) => {
    return {
        type: ORDER_BY_ATTACK,
        payload
    }
}

//ORDENAMIENTO POR HP
export const orderByHp = (payload) => {
    return {
        type: ORDER_BY_HP,
        payload
    }
}

//ORDENAMIENTO POR NOMBRE(SEARCHBAR)
export const getNamePokemons = (name) => {
    return async function (dispatch) {
        try {
            let response = await axios.get(
                `http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
                type: GET_NAME_POKEMONS,
                payload: response.data
            })
        } catch (error) {
            //console.log(error);
            return dispatch({
                type: GET_NAME_POKEMONS,
                payload: { error: error },
            });
        }
    }
}

//GET DETAIL
export const getDetail = (id) => {
    return async function (dispatch) {
        try {
            let response = await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: response.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}




























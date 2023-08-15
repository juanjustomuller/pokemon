const { Router } = require('express')
const {getPokemonsHandler, getPokemonByIdHandler, createPokemonHandler} = require('../handlers/pokemonsHandlers')
const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemonsHandler)

pokemonsRouter.get("/:id", getPokemonByIdHandler)

pokemonsRouter.post("/", createPokemonHandler)

module.exports = pokemonsRouter;
import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const pokemonContext = createContext();

export const Provider = ({ children }) => {
    const [pkmns, setPkmns] = useState([]);
    const [name, setName] = useState("");
    const [pkmn, setPkmn] = useState([]);
    const [pkmnIMG, setPkmnIMG] = useState("");

    const url = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemones = async () => {
        try {
            const res = await fetch(url);
            const { results } = await res.json();

            setPkmns(results);
        } catch (error) {
            console.error("Error fetching pokemons:", error);
        }
    };

    const newURL = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemon = async () => {
        try {
            const res = await fetch(newURL + name);
            const data = await res.json();

            setPkmn(data);
            setPkmnIMG(data.sprites?.other?.dream_world?.front_default || "");
        } catch (error) {
            console.error("Error fetching pokemon:", error);
        }
    };

    const navigate = useNavigate();

    const irAPokemon = () => {
        navigate(`/pokemones/${name}`);
    };

    useEffect(() => {
        getPokemones();
    }, []);

    const globalState = {
        pkmns,
        setPkmns,
        name,
        setName,
        pkmn,
        setPkmn,
        pkmnIMG,
        setPkmnIMG,
        irAPokemon,
    };

    return (
        <pokemonContext.Provider value={globalState}>
            {children}
        </pokemonContext.Provider>
    );
};

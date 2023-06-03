import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.css"
import Select from "../components/select"

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';

export default function Home() {

    const url = "https://pokeapi.co/api/v2/pokemon"

    const [pkmns, setPkmns] = useState([]);
    const [name, setName] = useState(0);


    const navigate = useNavigate();

    const yoteelijo = () => {
        navigate(`/pokemones/${name}`)
    }


    const getPokemones = async () => {
        const res = await fetch(url);
        const { results } = await res.json();

        setPkmns(results);
    }



    useEffect(() => {
        getPokemones();
    }, []);

    return (
        <div class="info">
           <h1>Bienvenido maestro pokemón</h1>

            <div class="img_portada"></div>

            <h3>Selecciona un pokemón para perder la batalla</h3>

            <div class="buscador">
            <Select />
            </div >
        </div >
    )
}
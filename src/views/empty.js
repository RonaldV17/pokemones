import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import "../assets/css/empty.css"

export default function Empty() {

    const url = "https://pokeapi.co/api/v2/pokemon/"

    const [pkmns, setPkmns] = useState([]);
    const [name, setName] = useState(0);


    const navigate = useNavigate();
    const reload = () => { window.location.reload(true) };

    const yoteelijo = () => {
        navigate(`/pokemones/${name}`)
        reload();
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
            <h1 className="pokeTitle"> No has seleccionado a tu pokemón</h1>
            <div class="img2_portada"></div>
            <h1 className="pokeText"> Vuelve a la sección principal</h1>
        </div>
    )
}
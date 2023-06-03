import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function Select() {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const [pkmns, setPkmns] = useState([]);
    const [name, setName] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const navigate = useNavigate();

    const yoteelijo = () => {
        if (name) {
            navigate(`/pokemones/${name}`);
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
        setIsButtonDisabled(event.target.value === "");
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
        <div className="info">
            <Form.Select aria-label="Default select example" onChange={handleNameChange} className="form">
                <option>Pokemones</option>
                {pkmns.map((pokemon, i) => {
                    return <option key={i} value={pokemon.name}>{pokemon.name}</option>
                })}
            </Form.Select>
            <button onClick={yoteelijo} disabled={isButtonDisabled}>Buscar</button>
        </div>
    )
}

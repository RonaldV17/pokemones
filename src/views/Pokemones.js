import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "../assets/css/pokemones.css"

import Select from "../components/select"


export default function Pokemones() {

    const { name } = useParams();

    const [pkmn, setPkmn] = useState([]);
    const [pkmnIMG, setPkmnIMG] = useState([]);
    const [hp, setHp] = useState("");
    const [attack, setAttack] = useState("");
    const [defense, setDefense] = useState("");
    const [speed, setSpeed] = useState("");



    const newURL = "https://pokeapi.co/api/v2/pokemon/";
    const getPokemon = async () => {
        const res = await fetch(newURL + name);
        const data = await res.json();

        setPkmn(data);
        setPkmnIMG(data.sprites.other.dream_world);
        setHp(data.stats[0]);
        setAttack(data.stats[1]);
        setDefense(data.stats[2]);
        setSpeed(data.stats[5]);

    }

    useEffect(() => {
        getPokemon();

    }, []);



    return (
        <div className="info">

            <Card className="pokedex">
                <Card.Img variant="top" className="IMG" src={pkmnIMG.front_default} />
                <Card.Body>
                    <Card.Title className="Title">{pkmn.name}</Card.Title>
                    <div className="Text">
                        <ul>
                            <li>Experiencia base: {pkmn.base_experience} pts exp</li>
                            <li>Altura: {pkmn.height * 10} cm</li>
                            <li>Peso: {pkmn.weight * 0.50} kg</li>
                            <li>HP: {hp.base_stat}</li>
                            <li>Ataque: {attack.base_stat}</li>
                            <li>Defensa: {defense.base_stat}</li>
                            <li>Velocidad: {speed.base_stat}</li>
                        </ul>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}
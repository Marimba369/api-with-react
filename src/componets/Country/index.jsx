import React, { useEffect, useState } from "react";
import api from "../../service/api";
import { CiSearch } from "react-icons/ci";
import './style.css'

export default function Country() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const continent = ["Africa", "Ameria", "Asia", "    Europe", "Oceania"];

    useEffect(() => {
        api.get("all").then((response) => {
            setData(response.data)
        })

    }, [data])


    function handleSearch(event) {
        setSearch(event.target.value)
    }


    const searchData = data.filter((item) => {
        return item.name.common.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="container-all">
            
            <div className="container-input">
                <img src={CiSearch} />
                <input type="text" placeholder="Search for a country ..." onChange={handleSearch}  value={search} className="input-country"/>
            </div>

            <div className="container-flag">
                {searchData.map((item) => (
                    <div key={item.id} className="item-flag">
                        <img src={item.flags.png} alt="imagem" className="img-flag"/>
                        <h3>{item.name.common}</h3>
                        <h5>Population: <span>{item.population}</span></h5>
                        <h5>Region: <span>{item.region}</span></h5>
                        <h5>Capital: <span>{item.capital}</span> </h5> 
                    </div>
                ))} 
            </div>

        </div>
    )
}

/*  <label for="Continent">Filter by Region</label>
                <select id="africa" name="Africa">
                    <option value="ameria">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>*/
import React, { useEffect, useState } from "react";
import api from "../service/api";


export default function Country() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

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
        <div>
            <input type="text" placeholder="Digite o nome de um país" onChange={handleSearch}  value={search}/>
            <div className="container">
                {searchData.map((item) => (
                    <div key={item.id}>
                        <p>{item.name.common}</p>
                        <img src={item.flags.png} alt="imagem" />
                    </div>
                )

                )}
            </div>
        </div>
    )
}
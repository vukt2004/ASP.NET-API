import { Table } from "antd";
import { useState, useEffect } from "react";
import { getAllPokemons } from "../config/api";

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await getAllPokemons();
                setPokemons(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message || "Failed to fetch pokemons");
                setIsLoading(false);
            }
        };
        fetchPokemons();
    }, []);

    

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Birthdate",
            dataIndex: "birthDate",
            key: "birthDate",
            render: (birthDate) => (
                <span>{new Date(birthDate).toLocaleDateString()}</span>
            ),
        },
        {
            title: "Reviews",
            dataIndex: "reviews",
            key: "reviews",
            render: (reviews) => (
                <span>{reviews.length}</span>
            ),
        },
        {
            title: "Owners",
            dataIndex: "pokemonOwners",
            key: "owners",
            render: (owners) => (
                <span>{owners.length}</span>
            ),
        },
        {
            title: "Categories",
            dataIndex: "pokemonCategories",
            key: "categories",
            render: (categories) => (
                <span>{categories.length}</span>
            ),
        },
    ];

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Table 
            columns={columns} 
            dataSource={pokemons}
            pagination={{ pageSize: 10 }}
            bordered
            title={() => <h2>Pokémon List</h2>}
        />
    );
}

export default Home;
import { Card, List, Row, Col, Typography, Spin, Input, message } from "antd";
import { useState, useEffect } from "react";
import { getAllPokemons } from "../config/api";
import { useNavigate } from "react-router-dom";
import './css/Home.css';

const { Title, Text, Paragraph } = Typography;

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                console.log("Fetching pokemons...");
                const response = await getAllPokemons();
                console.log("Response received:", response);

                if (!response) {
                    throw new Error("No response received from the API");
                }

                if (!Array.isArray(response) || response.length === 0) {
                    throw new Error("Invalid or empty data received from the API");
                }

                setPokemons(response);
                setFilteredPokemons(response);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch pokemons:", error);
                navigate('/error', { 
                    state: { 
                        errorMessage: error.message || "Failed to fetch pokemons",
                        errorDetails: JSON.stringify(error, Object.getOwnPropertyNames(error))
                    } 
                });
            }
        };

        fetchPokemons();
    }, [navigate]);

    useEffect(() => {
        const filtered = pokemons.filter(pokemon => 
            pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPokemons(filtered);
    }, [searchQuery, pokemons]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCardClick = (pokemonName) => {
        message.info(`You have chosen ${pokemonName}`);
    };

    if (isLoading) {
        return <Spin size="large" />;
    }

    return (
        <div className="home-container">
            <Title level={2} className="home-title">Pokémon List</Title>
            <Paragraph className="home-paragraph">
                Use the search bar to find your favorite Pokémon by name. Click on a Pokémon card to view more details and receive a notification of your selection.
            </Paragraph>
            <Input
                placeholder="Search Pokémon by name"
                allowClear
                size="large"
                onChange={handleSearch}
                className="home-input"
            />
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 4,
                    xxl: 6,
                }}
                dataSource={filteredPokemons}
                renderItem={(pokemon) => (
                    <List.Item>
                        <Card
                            hoverable
                            className="pokemon-card"
                            cover={<img alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />}
                            onClick={() => handleCardClick(pokemon.name)}
                        >
                            <Card.Meta
                                className="pokemon-card-meta"
                                title={pokemon.name}
                                description={
                                    <Row gutter={[8, 8]}>
                                        <Col span={12}>
                                            <Text strong>ID:</Text> {pokemon.id}
                                        </Col>
                                        <Col span={12}>
                                            <Text strong>Birthdate:</Text> {new Date(pokemon.birthDate).toLocaleDateString()}
                                        </Col>
                                    </Row>
                                }
                            />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Home;
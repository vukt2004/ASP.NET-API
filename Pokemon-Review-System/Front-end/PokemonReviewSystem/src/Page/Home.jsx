import { Card, List, Row, Col, Typography, Spin, Input } from "antd";
import { useState, useEffect } from "react";
import { getAllPokemons } from "../config/api";

const { Title, Text } = Typography;

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await getAllPokemons();
                setPokemons(response);
                setFilteredPokemons(response);
                setIsLoading(false);
            } catch (error) {
                setError(error.message || "Failed to fetch pokemons");
                setIsLoading(false);
            }
        };
        fetchPokemons();
    }, []);

    useEffect(() => {
        const filtered = pokemons.filter(pokemon => 
            pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPokemons(filtered);
    }, [searchQuery, pokemons]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    if (isLoading) {
        return <Spin size="large" />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2} style={{ marginBottom: '20px' }}>Pokémon List</Title>
            <Input
                placeholder="Search Pokémon by name"
                allowClear
                size="large"
                onChange={handleSearch}
                style={{ marginBottom: '20px' }}
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
                            cover={<img alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />}
                        >
                            <Card.Meta
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
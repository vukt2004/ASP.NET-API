import { Layout, Menu } from 'antd';
import './css/Navbar.css';

const { Header } = Layout;

function Navbar() {
    return (
        <Layout>
            <Header className="navbar">
                <div className="navbar-content">
                    <div className="navbar-brand">
                        <img 
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
                            alt="Pokemon"
                            className="navbar-logo"
                        />
                        <span>Pokémon Review</span>
                    </div>
                    <Menu 
                        theme="dark" 
                        mode="horizontal" 
                        className="nav-menu"
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                        <Menu.Item key="2"><a href="/reviews">Reviews</a></Menu.Item>
                        <Menu.Item key="3"><a href="/about">About</a></Menu.Item>
                        <Menu.Item key="4"><a href="/contact">Contact</a></Menu.Item>
                    </Menu>
                </div>
            </Header>
        </Layout>
    );
}

export default Navbar;

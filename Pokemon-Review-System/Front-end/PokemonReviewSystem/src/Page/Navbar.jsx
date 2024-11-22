import { Layout, Menu } from 'antd';
import './css/Navbar.css'; // Importing the CSS file

const { Header } = Layout;

function Navbar() {
    return (
        <Layout>
            <Header className="navbar">
                <div className="navbar-brand">Pokémon Review</div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                    <Menu.Item key="2"><a href="/reviews">Reviews</a></Menu.Item>
                    <Menu.Item key="3"><a href="/about">About</a></Menu.Item>
                    <Menu.Item key="4"><a href="/contact">Contact</a></Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
}

export default Navbar;

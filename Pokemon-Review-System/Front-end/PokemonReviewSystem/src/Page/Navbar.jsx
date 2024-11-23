import { Layout, Space } from "antd";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import "./css/Navbar.css";

const { Header } = Layout;

function Navbar() {
  const location = useLocation();
  const selectedKey = location.pathname;

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
            <span className="navbar-title">Pokémon Review</span>
          </div>
          <Space size="middle" className="nav-buttons">
            <NavLink to="/" className={`nav-button ${selectedKey === '/' ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={`nav-button ${selectedKey === '/about' ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={`nav-button ${selectedKey === '/contact' ? 'active' : ''}`}>
              Contact
            </NavLink>
          </Space>
        </div>
      </Header>
      <div className="content">
        <Outlet />
      </div>
    </Layout>
  );
}

export default Navbar;
import { Typography, Card, Row, Col } from 'antd';
import './css/About.css';

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div className="about-container">
      <Title level={1}>About Pokémon Review System</Title>
      <Paragraph>
        Welcome to the Pokémon Review System! We're dedicated to providing a platform 
        for Pokémon trainers and enthusiasts to share their experiences and insights 
        about different Pokémon.
      </Paragraph>

      <Row gutter={[16, 16]} className="feature-row">
        <Col xs={24} sm={12} md={8}>
          <Card title="Our Mission" className="feature-card">
            <Paragraph>
              To create a comprehensive and user-friendly platform for Pokémon reviews, 
              helping trainers make informed decisions about their team compositions.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="How It Works" className="feature-card">
            <Paragraph>
              Users can browse Pokémon, read reviews, and submit their own reviews 
              based on their experiences in battles, contests, and general gameplay.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Community Driven" className="feature-card">
            <Paragraph>
              Our platform thrives on the contributions of Pokémon trainers worldwide. 
              Join our community and help fellow trainers with your valuable insights!
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Title level={2}>Why Choose Us?</Title>
      <Paragraph>
        Our platform offers a unique blend of user-generated content and expert 
        analysis. Whether you're a seasoned Pokémon master or just starting your 
        journey, you'll find valuable information to enhance your Pokémon experience.
      </Paragraph>

      <Title level={2}>Get Involved</Title>
      <Paragraph>
        We're always looking for passionate Pokémon trainers to join our community. 
        Start by creating an account, browsing reviews, and sharing your own experiences!
      </Paragraph>
    </div>
  );
}

export default About;
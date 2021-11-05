import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './about.css'
const About = () => {

  return (
    <Container fluid>
      <div className="about">
        <h1>About Top 100 Chart</h1>
        <p id="about-p">Bacon ipsum dolor amet brisket burgdoggen corned beef, buffalo venison pork chop picanha bresaola bacon pork loin tri-tip capicola short loin. Porchetta pork belly swine kevin turducken cow beef. Flank pork belly pastrami, shankle beef doner spare ribs. Brisket tenderloin kevin chislic, hamburger jowl jerky pastrami chuck. Flank pork loin hamburger boudin tri-tip pastrami fatback brisket chicken bacon bresaola capicola leberkas biltong shoulder. Rump sausage ham hock, andouille doner sirloin venison pork chop. Fatback flank strip steak beef tongue drumstick.</p>
      </div>
      <Row>
        <h2>Api's used</h2>
        <Col md lg={6}>
          <Card className="bg-dark text-white m-5 p-2">
            
              <Card.Link href="https://developer.spotify.com/documentation/web-api/">
                <Card.Img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="spotify"/>
              </Card.Link>
          </Card>
        </Col>
        <Col md lg={6}>
        <Card className="bg-dark text-white m-5 p-2">
            <Card.Link href="https://github.com/ko28/melon-api">
              <Card.Img src="https://6.viki.io/image/a2ceb3c346be4350ba4826e928d4257e.jpeg?s=900x600&e=t" alt="spotify"/>
            </Card.Link>
          </Card>
        </Col>
      </Row>
      {/* <Row>
        <Col xs md lg="auto">
        About Top 100 Chart
        </Col>
      </Row>
      <Row>
        <Col>Bacon ipsum dolor amet brisket burgdoggen corned beef, buffalo venison pork chop picanha bresaola bacon pork loin tri-tip capicola short loin. Porchetta pork belly swine kevin turducken cow beef. Flank pork belly pastrami, shankle beef doner spare ribs. Brisket tenderloin kevin chislic, hamburger jowl jerky pastrami chuck. Flank pork loin hamburger boudin tri-tip pastrami fatback brisket chicken bacon bresaola capicola leberkas biltong shoulder. Rump sausage ham hock, andouille doner sirloin venison pork chop. Fatback flank strip steak beef tongue drumstick.</Col>
      </Row> */}
      
    </Container>
  )
}

export default About;
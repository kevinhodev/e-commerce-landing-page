import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import OptionsBar from "./components/OptionsBar/OptionsBar";
import List from "./components/List/List";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <OptionsBar />
        <List>
          <Card />
        </List>
        <Footer />
      </Container>
    </>
  );
};

export default App;

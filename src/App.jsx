import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import OptionsBar from "./components/OptionsBar/OptionsBar";
import List from "./components/List/List";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Container>
        <Header />
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

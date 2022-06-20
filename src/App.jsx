import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import OptionsBar from "./components/OptionsBar/OptionsBar";
import Presentation from "./components/Presentation/Presentation";
import List from "./components/List/List";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <header className="header">
          <Presentation />
        </header>
        <main className="main">
          <OptionsBar />
          <List>
            <Card />
          </List>
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default App;

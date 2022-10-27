// Components
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import NavBar from "./components/NavBar";

// Style
const Parent = styled.div`
  text-align: center;
  position: relative;
`;

// JSX
function App() {
  return (
    <Router>
      <Parent>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Header />
            <Body />
          </Route>
          <Route path="/body">
            <Header />
            <Body />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
        <Footer />
      </Parent>
    </Router>
  );
}

export default App;

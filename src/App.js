import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Header from "./Header/Header";
import HomePage from "./HomePage";
import RandomCatImage from "./Cats/RandomCatImage";
import RandomDogImage from "./Dogs/RandomDogImage";
import RandomCatFact from "./Cats/RandomCatFact";
import "./App.css";

const MainContainer = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  display: flex;
`;

// const emptyDiv = styled.div``;

function App() {

  const [initialCounterValue, setInitialCounterValue] = React.useState(30);
  const [counter, setCounter] = React.useState(initialCounterValue);

  React.useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) setCounter(initialCounterValue);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <MainContainer>
      <Header />
      <Router>
        <HomePage path="/" />
        <RandomCatImage path="/randomCat" timeLeft={counter} initialTimeValue={initialCounterValue}/>
        <RandomDogImage path="/randomDog" timeLeft={counter} initialTimeValue={initialCounterValue}/>
        <RandomCatFact  path="/randomCatFact" timeLeft={counter} initialTimeValue={initialCounterValue}/>
      </Router>
      <div>Counter {counter}</div>
    </MainContainer>
  );
}

export default App;

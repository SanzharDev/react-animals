import React, {useState, useEffect} from "react";
import styled from "styled-components";

//https://alexwohlbruck.github.io/cat-facts/docs/

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Fact = styled.div`
  width: 100%;
`;


function RandomCatFact(props) {
  const [catFactText, setCatFactText] = useState(null);

  const fetchFact = () => {
    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCatFactText(data.text);
    });
  };

  useEffect(() => {
    if (props.timeLeft === props.initialTimeValue || catFactText == null) {
      fetchFact();
    }
  });

  if (catFactText == null) return <div> Loading </div> ;

  return (
    <MainContainer>
        <Fact>{catFactText}</Fact>
    </MainContainer>
);
}

export default RandomCatFact;

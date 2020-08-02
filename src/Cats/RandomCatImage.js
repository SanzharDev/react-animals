import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

// https://docs.thecatapi.com/

function RandomCatImage(props) {
  const [initalTimerValue, setInitialTimerValue] = React.useState(30);
  const [catImageUrl, setCatImageUrl] = React.useState(null);
  const [counter, setCounter] = React.useState(initalTimerValue);

  React.useEffect(() => {
      const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      if (counter === initalTimerValue) {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCatImageUrl(data[0].url);
        });
        setCounter(initalTimerValue);
      }
      if (counter === 0) setCounter(initalTimerValue);
      return () => clearInterval(timer);
  }, [counter]);

if (catImageUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <Image src={catImageUrl} />
      <div>New cat image will appear in {counter} seconds</div>
    </MainContainer>
  );
}

export default RandomCatImage;

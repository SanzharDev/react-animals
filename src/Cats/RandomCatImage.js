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
  const [catImageUrl, setCatImageUrl] = React.useState(null);
  const fetchImage = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCatImageUrl(data[0].url);
    });
  }

  React.useEffect(() => {
      if (props.timeLeft === props.initialTimeValue || catImageUrl == null) {
        fetchImage();
      }
  });

if (catImageUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <Image src={catImageUrl} />
    </MainContainer>
  );
}

export default RandomCatImage;

import React, {useState, useEffect} from 'react';
import styled from "styled-components";

// https://dog.ceo/dog-api/

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;


function RandomDogImage(props) {
    const [dogImageUrl, setDogImageUrl] = useState(null);

    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setDogImageUrl(data.message);
        });
    }, []);

    if (dogImageUrl == null) return <div> Loading </div> ;

    return (
        <MainContainer>
            <Image src={dogImageUrl} />
        </MainContainer>
    );
}

export default RandomDogImage;
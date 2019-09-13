import React, { useState } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import "./App.css";
import styled from "styled-components";

const Images = styled.div`
  display: flex;
`;

function App() {
  const [isLoaded, setLoaded] = useState(false);
  console.log(process.env.PARTY);
  return (
    <div className='App'>
      <CloudinaryContext cloudName=''>
        <Images>
          {isLoaded ? null : (
            <Image publicId='land.jpg'>
              <Transformation effect='blur:1000' quality='1' />
              <Transformation effect='cartoonify' />
            </Image>
          )}
          <Image onLoad={() => setLoaded(true)} publicId='land.jpg'></Image>
        </Images>
      </CloudinaryContext>
    </div>
  );
}

export default App;

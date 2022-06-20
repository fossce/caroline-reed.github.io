import styled from "styled-components";


export const Footbar = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: auto;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
  /* background-color: black; */
  /* background-image: linear-gradient(rgba(60, 60, 60, 0.5), rgba(65, 65, 65, 0.5),
  rgba(70, 70, 70, 0.5), rgba(65, 65, 65, 0.5), rgba(60, 60, 60, 0.5)); */
  /* background-image: linear-gradient(rgba(65, 65, 65, 0.5), rgba(70, 70, 70, 0.5),
  rgba(75, 75, 75, 0.5), rgba(70, 70, 70, 0.5), rgba(65, 65, 65, 0.5)); */
  /* background-image: linear-gradient(rgba(70, 70, 70, 0.5), rgba(75, 75, 75, 0.5),
  rgba(80, 80, 80, 0.5), rgba(75, 75, 75, 0.5), rgba(70, 70, 70, 0.5)); */
`;


export const Copyright = styled.p`
  display: flex;
  color: darkgray;
  /* margin: 0 auto; */
  font-size: 95%;
  font-weight: normal;
  padding: 0.0rem 0 0.1rem 1.5rem;
  z-index: 1;
`;


// export const Imgcreds = styled.p`
//   display: flex;
//   font-size: 100%;
//   padding: 0.2rem 1rem;
//   z-index: 12;
// `;


export const Social = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0.0rem 1.5rem 0.1rem 0;

`;

// export const ImgAnchor = styled.a`
//   color: silver;
//   display: flex;
//   align-items: center;
//   font-weight: normal;
//   text-decoration: none;
//   height: 100%;
//   cursor: pointer;
// `;


export const Anchor = styled.a`
  color: darkgray;
  display: flex;
  align-items: center;
  font-size: 125%;
  font-weight: bold;
  text-decoration: none;
  padding: 0 0.5rem 0 1rem;
  height: 100%;
  cursor: pointer;
`;

import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ImageWrapper = styled("div")`
  float: left;
  width: 50%;
`;

export const TextWrapper = styled("div")`
  float: right;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Paragraph = styled.p`
  margin: 0; /* Remove default margin */
  padding: 0.5rem; /* Add padding as needed */
`;

export const Button = styled.button`
  margin-top: 2rem; /* Add margin between carousel and button */
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiExitDoor } from "react-icons/gi";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

const ErrorPage = () => {
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper className="main-page">
      <div>
        <h2>
          {polish
            ? "dziękujemy za dokonanie rezerwacji!"
            : "thank you for making a reservation!"}
        </h2>
        <h4>
          {polish
            ? "Na podany adres email zostało wysłane potwierdzenie rezerwacji."
            : "A booking confirmation has been sent to the e-mail address provided."}
        </h4>
        <Link to="/">
          <GiExitDoor className="icon" />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--buttonFont);
    text-transform: uppercase;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 5vh;
      text-align: center;
      width: 85vw;
      @media screen and (max-width: 800px) {
        font-size: 1.7rem;
        margin-bottom: 10vh;
      }
    }
    h4 {
      font-size: 1rem;
      margin-bottom: 10vh;
      text-align: center;
      width: 85vw;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
        margin-bottom: 15vh;
      }
    }
    a {
      color: var(--secondaryColor2);
      font-size: 5rem;
      text-decoration: none;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        font-size: 6rem;
      }
    }
  }
`;

export default ErrorPage;

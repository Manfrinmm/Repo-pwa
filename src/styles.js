import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
}

  body{
    background:#f5f5f5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family:sans-serif
  }
`;
export const Header = styled.div`
  width: 100%;
  background: #7159c1;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 10px 20px;

  position: fixed;
  top: 0;
  left: 0;

  input {
    flex: 1;
    border: 0;
    background: #fff;
    color: #333;
    height: 32px;
    font-size: 14px;
    border-radius: 4px;
    padding: 0 10px;
    margin-right: 10px;
  }

  button {
    background: transparent;
    border: 0;
    font-weight: 600;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const Repositories = styled.ul`
  list-style: none;
  margin: 70px 20px 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-weight: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-weight: 600) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    border: 1px solid #eee;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(221, 211, 221, 0.5);
    border-radius: 4px;

    img {
      height: 60px;
      width: 60px;
      border-radius: 40%;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        color: #333;
        font-size: 16px;
      }

      p {
        font-size: 14px;
        color: #666;
        margin-top: 5px;
      }

      a {
        color: #7159c1;
        font-size: 14px;
        font-weight: bold;
        margin-top: 10px;
        text-decoration: none;
        text-transform: uppercase;
        display: block;
      }
    }
  }
`;

export const Offline = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  background: #c45959;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

import styled from "styled-components";

export const NavigationStyles = styled.nav`
  margin-bottom: 20px;
  margin-top: 100px;
  .navLink {
    font-size: 21px;
    margin: 10px;
    text-decoration: none;
    background: linear-gradient(270deg, #fd814a -12.71%, #fc5c4c 121.19%);
    box-shadow: 0px 5px 20px rgba(253, 113, 75, 0.25);
    border-radius: 10px;
    padding: 5px;
  }
  .activeNavLink {
    color: #ffffff;
  }
`;

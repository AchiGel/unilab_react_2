import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 32px 61px;
`;

const HeaderLogo = styled.div`
  color: #eff9f3;
  font-family: "Noto Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>DogFinder</HeaderLogo>
    </HeaderContainer>
  );
}

// this is my header component that will contain logo and menu later on
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../../assets/images/movie-flip-logo.svg";

export default function Header() {
  return (
    <StyledLogoDiv>
      <Link href="/">
        <StyledImage
          src={Logo}
          alt="Movie Flip Logo"
          width={500}
          height={200}
          quality={100}
        />
      </Link>
    </StyledLogoDiv>
  );
}
const StyledLogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const StyledImage = styled(Image)`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

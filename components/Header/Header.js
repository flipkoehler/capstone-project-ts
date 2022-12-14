// this is my header component that will contain logo and menu later on
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledLogoDiv>
      <Link href="/">
        <Image
          src={"/images/movie-flip-logo.svg"}
          alt="Movie Flip Logo"
          width={200}
          height={200}
          priority
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

// this component will contain all the content components besides the Header and footer. For now it will only contain a short welcome text and a link for a better navigation.

import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>Willkommen zu Movie Flip 🎬</h1>
      <h2>Deine Filmempfehlung in vier einfachen Schritten</h2>
      <Link href="/filmEmpfehlung">
        <button type="button" aria-label="Filmempfehlung ansehen">
          Filmempfehlung ansehen!
        </button>
      </Link>
    </>
  );
}

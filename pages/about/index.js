import Header from "../../components/Header/Header";
import Benefits from "../../components/Benefits/Benefits";

export default function About() {
  return (
    <>
      <Header />

      <section>
        <h1>Die Mission 🎯</h1>
        <p>
          Als kleiner Junge habe ich den Großteil meines Taschengeldes in der
          Videothek um die Ecke ausgegeben. Ich habe es geliebt mir von der
          Videothekarin meines Vertrauen die besten Filme empfehlen zu lassen.
          Die Tipps waren Gold wert! Das Medium hat sich gewandelt, aber die
          Liebe zum Film ist geblieben. Nur der Auswahlprozess ist frustrierend
          geworden. Minutenlanges Scrollen durch Netflix und Co ohne am Ende
          wirklich einen zufriedenstellenden Film zu finden. Das Ziel dieser
          Seite ist es das zu ändern!
        </p>
        <Benefits />

        <p>Viel Spaß beim Filme schauen. Möge das Kino mit dir sein. </p>
      </section>
    </>
  );
}

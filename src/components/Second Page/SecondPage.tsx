import Flower from "./Flower";

export default function SecondPage() {
  return (
    <section className="second-page">
      <div className="curtain"></div>
      <div className="text-wrapper">
        <p>Here's a lily i made,</p>
        <p>
          IT TOOK <strong>SCOOPER</strong> LONG
        </p>
        <p>but worth it </p>
      </div>
      <Flower />
    </section>
  );
}

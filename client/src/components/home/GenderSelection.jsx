import kid from "../../Images/kid.webp";
import men from "../../Images/men.webp";
import women from "../../Images/women.webp";

const GenderSelection = () => {
  return (
    <>
      <section className="title">
        <h1>Who You Are Shopping For?</h1>
      </section>

      <section className="shopping-gender">
        <img src={men} alt="" />
        <img src={women} alt="" />
        <img src={kid} alt="" />
      </section>
    </>
  );
};

export default GenderSelection;

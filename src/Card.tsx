import illustration from "./assets/illustration-article.svg";
import "./sass/Card.scss";
import avatar from "./assets/image-avatar.webp";

const Card = () => {
  return (
    <article className="card">
      <section className="mainImageContainer">
        <img src={illustration} alt="illustration" />
      </section>
      <section className="content">
        <h5>Learning</h5>
        <p className="publishDate">Published 21 Dec 2023</p>
        <h2>HTML & CSS foundations</h2>
        <p className="desc">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="profile">
          <img src={avatar} alt="Greg Hooper" />
          <p>Greg Hooper</p>
        </div>
      </section>
    </article>
  );
};

export default Card;

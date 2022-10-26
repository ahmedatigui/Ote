import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <nav>
        <span className="logo">o;</span>
      </nav>
      <section>
        <h1>More features coming soon.</h1>
        <p>
          This redesign is just the start of a series of new features and
          improvements for awwwards, here's a look at the evolution of the
          platform.
        </p>
        <Link to="/app" className="cta">
          Locomotive
        </Link>
      </section>
    </main>
  );
}

export default Home;

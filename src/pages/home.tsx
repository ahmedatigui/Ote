import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="home">
      <section className="heropage">
        <nav>
          <span className="logo">Ote</span>
        </nav>
        <section className="hero">
          <h1>Modern online code editor.</h1>
          <p>
            This is a web-based online code editor, with support to three
            programming languages so far Cplusplus, Python, Javascript, and more
            to come soon.
          </p>
          <Link to="/app" className="cta">
            Code
          </Link>
        </section>
      </section>
      <section className="about">
        <div className="cards">
          <div className="card">
            <h3>Design</h3>
            <p>
              The current design is just the start of a series of improvements
              for Ote. Check the whole design roadmap by clicking the icon on
              the corner.
            </p>
            <a
              href="https://www.figma.com/file/CEfXVHx3JnIfVRh5QWY6Jp/Online-text-editor-(Ote)?node-id=0%3A1"
              target="_blank"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  y="0.25"
                  width="19.5"
                  height="19.5"
                  rx="4.75"
                  stroke="#ABACA7"
                  strokeWidth="0.5"
                />
                <path
                  d="M6.74383 13.7415L12.9169 7.56848"
                  stroke="#565656"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.48976 7.33867L12.8213 7.26089C13.0441 7.25735 13.2244 7.43766 13.2209 7.6604L13.1431 12.992"
                  stroke="#565656"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="card">
            <h3>Development</h3>
            <p>
              There were lots of decisions and creative solutions behind the
              development of Ote. Check the github repo through clicking the
              icon on the corner.
            </p>
            <a href="https://github.com/ahmedatigui/ote" target="_blank">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  y="0.25"
                  width="19.5"
                  height="19.5"
                  rx="4.75"
                  stroke="#ABACA7"
                  strokeWidth="0.5"
                />
                <path
                  d="M6.74383 13.7415L12.9169 7.56848"
                  stroke="#565656"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.48976 7.33867L12.8213 7.26089C13.0441 7.25735 13.2244 7.43766 13.2209 7.6604L13.1431 12.992"
                  stroke="#565656"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

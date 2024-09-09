import React from "react";
import "./css/home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Explore New Technologies</h1>
      </header>

      <section className="cards-section">
        <div className="card">
          <img
            src="https://via.placeholder.com/150?text=React"
            alt="React"
            className="card-image"
          />
          <h3>React.js</h3>
          <p>
            React is a popular JavaScript library for building user interfaces,
            maintained by Facebook and a community of developers.
          </p>
          <a
            href="https://reactjs.org/"
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/150?text=Node.js"
            alt="Node.js"
            className="card-image"
          />
          <h3>Node.js</h3>
          <p>
            Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
            engine, allowing for server-side scripting and building scalable
            network applications.
          </p>
          <a
            href="https://nodejs.org/"
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/150?text=GraphQL"
            alt="GraphQL"
            className="card-image"
          />
          <h3>GraphQL</h3>
          <p>
            GraphQL is a query language for your API, allowing clients to
            request exactly the data they need, making it more efficient than
            traditional REST APIs.
          </p>
          <a
            href="https://graphql.org/"
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;

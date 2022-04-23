// import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";


export default function Portfolio() {
 

  
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      
      <div className="container">
        <div className="card">
          <div className="item">
            <a href="https://github.com/MBAsh0023/marquel-a-portfolio"><img
              src="assets/Portfolio.png"
              alt="Marquel's portfolio"
            /></a>
            <h3>Portfolio Project</h3>
          </div>
          <h4> HTML - Sass - React - Javascript</h4>
            <p>This profolio displaying my recent projects and contact information. Deployed with Netlify.</p>
        </div>
        <div className="card">
          <div className="item">
            <a href="https://github.com/MBAsh0023/Thinkful-Project-Flashcards"><img
              src="assets/flashcard-app.png"
              alt="Flashcard app"
            /></a>
            <h3>Flashcard App</h3>
          </div>
          <h4> React - Javascript - Bootstrap</h4>
            <p>Application designed to help the user study. User can create decks of flash cards for different subjects.</p>
        </div><div className="card">
          <div className="item">
            <img
              src="assets/coming-soon-black.jpg"
              alt="coming soon handwriting"
            />
            <h3>WeLoveMovies</h3>
          </div>
          <h4> RESTful API  - Node.js - Express</h4>
            <p>Backend contribution. RESTful api using CRUD in an Express server.</p>
        </div>
      </div>
    </div>
  );
}

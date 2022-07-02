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
          <a href="https://starter-movie-front-end-mbash0023.vercel.app">
            <img
              src="assets/we-love-movies.png"
              alt="we love movies"
            /></a>
            <h3>WeLoveMovies</h3>
          </div>
          <h4> RESTful API  - Node.js - Express</h4>
            <p>Backend contribution. RESTful API using Express to create, read, update, and delete items in a movie database. Backend deployed with Herocku.<a href= "https://github.com/MBAsh0023/thinkful-welovemovies">Click here for GitHub Repo</a></p>
        </div>
        <div className="card">
          <div className="item">
          <a href="https://marquel-capstone-res-frontend.herokuapp.com/dashboard">
            <img
              src="assets/res-reservation-app.png"
              alt="restaurant reservation app"
            /></a>
            <h3>Reservation App</h3>
          </div>
          <h4> React - Node.js - RESTful API </h4>
            <p>Full Stack Application. Application created to increase restaurant efficiency and organization of restaurant staff RESTful API using Express to create, read, update, and delete reservations. Frontend/Backend deployed with Heroku.<a href= "https://github.com/MBAsh0023/capstone-restaurant-reservation">Click here for GitHub Repo</a></p>
        </div>
        
      </div>
    </div>
  );
}

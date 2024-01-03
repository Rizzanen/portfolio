import "../App.css";
import RevealLeft from "./RevealLeft.jsx";
import Reveal from "./Reveal.jsx";

function Homepage() {
  return (
    <div>
      <div className="content">
        <div className="firstpage">
          <Reveal>
            <div className="namecontainer">
              <div className="hello">
                <h4>Hi. My name is</h4>
              </div>

              <div className="name">
                <h1>Aapo Rissanen</h1>
              </div>
              <div className="nameparagraph">
                <h4>Aspiring Software Professional.</h4>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="photo">
              <img
                src="/meSketchcropped.jpg"
                alt="Photo of my beautiful face"
              />
            </div>
          </Reveal>
        </div>

        <div className="about">
          <RevealLeft>
            <h4>
              I'm a 23-year-old second-year Information Technology Bachelor's
              degree student at Haaga-Helia University of Applied Sciences
              specializing in software development. I live in Helsinki, Finland.
              On my free time I love to play icehockey, videogames and guitar. I
              enjoy challenging myself and learning new things. Of me you can
              get a reliable and enthusiastic employee who isn't afraid of
              taking on responsibilities.
            </h4>
          </RevealLeft>
        </div>
        <Reveal>
          <div className="skillsHeader">
            <h1>Skills</h1>
          </div>
        </Reveal>
        <Reveal>
          <div className="skillsContainer">
            <div className="frontend">
              <h2>Front end</h2>
              <ul>
                <li>
                  <h4>Javascript</h4>
                </li>
                <li>
                  <h4>React.js</h4>
                </li>
                <li>
                  <h4>HTML</h4>
                </li>
                <li>
                  <h4>CSS</h4>
                </li>
                <li>
                  <h4>TypeScript basics</h4>
                </li>
              </ul>
            </div>
            <div className="backend">
              <h2>Back end</h2>
              <ul>
                <li>
                  <h4>Java</h4>
                  <ul>
                    <li>
                      <h5>Spring boot</h5>
                    </li>
                    <li>
                      <h5>Thymeleaf</h5>
                    </li>
                    <li>
                      <h5>Spring REST</h5>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Python basics</h4>
                </li>
                <li>
                  <h4>SQL basics</h4>
                </li>
              </ul>
            </div>
            <div className="other">
              <h2>Other</h2>
              <ul>
                <li>
                  <h4>Github</h4>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="projectsHeader">
            <h1>Projects</h1>
          </div>
        </Reveal>

        <div className="projectsContainer">
          <Reveal>
            <div className="project1">
              <div className="projectcontainer">
                <div className="project1text">
                  <h2>ThriftShop UI</h2>
                  <h4>
                    This is a dynamic and user-friendly thrift shop website that
                    allows users to explore other users listings, create and
                    manage their own sale listings and effortlessly manage their
                    personal information. They can add items to shoppingcart and
                    checkout them (formal checkout process under
                    development).This project has been crafted with react and
                    deployed to firebase.
                  </h4>
                </div>
                <div className="project1Image">
                  <img src="/ThriftShopUI.png" />
                </div>
              </div>
              <div className="project1site">
                <a
                  href="https://github.com/Rizzanen/ThriftshopFrontend"
                  target="_blank"
                  className="githubrepo"
                >
                  <h5>Github repository</h5>
                </a>
                <a
                  href="https://thriftshop-f26ac.web.app/"
                  target="_blank"
                  className="ptappButton"
                >
                  <h5>Try ThriftShop UI</h5>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="project1">
              <div className="projectcontainer">
                <div className="project1text">
                  <h2>ThriftShop Backend</h2>
                  <h4>
                    This is a Spring REST API application where I implemented
                    REST endpoints for CRUD operations on listings using
                    CrudRepository interfaces and enpoints to manage appUser
                    information. I also made a endpoint to authenticate login
                    Credentials and reset the db. Also I made a thymeleaf page
                    for Api Documentation.
                  </h4>
                </div>
                <div className="project1Image">
                  <img src="/thriftshopbackend.png" />
                </div>
              </div>
              <div className="project1site">
                <a
                  href="https://github.com/Rizzanen/ThriftshopBackend"
                  target="_blank"
                  className="githubrepo"
                >
                  <h5>Github repository</h5>
                </a>
                <a
                  href="https://thriftshoprest-6dad2e66a25b.herokuapp.com/"
                  target="_blank"
                  className="ptappButton"
                >
                  <h5>Api Documentation</h5>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="project1">
              <div className="projectcontainer">
                <div className="project1text">
                  <h2>Personal Trainer App</h2>
                  <h4>
                    This project is a UI for a backend providing REST API access
                    to "personal trainers" customer information and training
                    schedule. Interface includes CRUD functionalitites, a
                    calendar visualizing the reserved workout times and a
                    statistics page which visualizes the total booked time of
                    different activities in minutes. There's also possibility to
                    download customer and training data as CSV file. It has been
                    deployed to firebase.
                  </h4>
                </div>
                <div className="project1Image">
                  <img src="/PtApp.png" />
                </div>
              </div>
              <div className="project1site">
                <a
                  href="https://github.com/Rizzanen/PTApp.git"
                  target="_blank"
                  className="githubrepo"
                >
                  <h5>Github repository</h5>
                </a>
                <a
                  href="https://personaltrainerapp-475a4.firebaseapp.com/"
                  target="_blank"
                  className="ptappButton"
                >
                  <h5>Try PersonalTrainer App</h5>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="project2">
              <div className="projectcontainer">
                <div className="project1text">
                  <h2>Expense Tracker</h2>
                  <h4>
                    This is a Spring boot application where the users can track
                    their expenses. The project includes an H2-database, CRUD
                    functionalities, Spring Security, JUnit tests, and error
                    handling. It has been deployed to heroku. To login with full
                    access to features username: admin password: admin .
                  </h4>
                </div>
                <div className="project1Image">
                  <img src="/Expensetracker.png" />
                </div>
              </div>
              <div className="project1site">
                <a
                  href="https://github.com/Rizzanen/expenseTracker.git"
                  target="_blank"
                  className="expenserepo"
                >
                  <h5>Github repository</h5>
                </a>
                <a
                  href="https://expensestracker-cdb2251beb87.herokuapp.com/login"
                  target="_blank"
                  className="expenseButton"
                >
                  <h5>Try Expense Tracker</h5>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="project3">
              <div className="projectcontainer">
                <div className="project1text">
                  <h2>Perfect Circle</h2>
                  <h4>
                    This is a React application where the player has to draw a
                    perfect circle. With this project I learned to work with
                    HTML canvas and got experience working with eventListeners
                    and tracking the mouse or touch movement on the screen.
                  </h4>
                </div>
                <div className="project1Image">
                  <img src="/perfectcircle.png" />
                </div>
              </div>
              <div className="project1site">
                <a
                  href="https://github.com/Rizzanen/PerfectCircle.git"
                  target="_blank"
                  className="todorepo"
                >
                  <h5>Github repository</h5>
                </a>
                <a
                  href="https://rizzanen.github.io/PerfectCircle/"
                  target="_blank"
                  className="todoButton"
                >
                  <h5>Try Perfect Circle</h5>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="project3">
              <div className="projectcontainer">
                <div className="project1text">
                  <h2>To-Do-List App</h2>
                  <h4>
                    A To Do List app made with TypeScript. The user can add and
                    delete things to do. It has been build with vite and
                    launched to github pages.
                  </h4>
                </div>
                <div className="project1Image">
                  <img src="/todolistapp.png" />
                </div>
              </div>
              <div className="project1site">
                <a
                  href="https://github.com/Rizzanen/Todolist.git"
                  target="_blank"
                  className="todorepo"
                >
                  <h5>Github repository</h5>
                </a>
                <a
                  href="https://rizzanen.github.io/Todolist/"
                  target="_blank"
                  className="todoButton"
                >
                  <h5>Try To-Do-List</h5>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="project4">
              <div className="projectcontainer">
                <div className="project1text">
                  <h2>TicTacToe</h2>
                  <h4>
                    TicTacToe application done with HTML,CSS and Javascript.
                    Launched to Github Pages.
                  </h4>
                </div>
                <div className="project1Image">
                  <img src="/ristinolla.png" />
                </div>
              </div>
              <div className="project1site">
                <a
                  href="https://github.com/Rizzanen/Ristinolla.git"
                  target="_blank"
                  className="tictacrepo"
                >
                  <h5>Github repository</h5>
                </a>
                <a
                  href="https://rizzanen.github.io/Ristinolla/"
                  target="_blank"
                  className="tictactoeButton"
                >
                  <h5>Try TicTacToe</h5>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
export default Homepage;

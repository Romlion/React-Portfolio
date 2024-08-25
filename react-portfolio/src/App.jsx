import "./App.css";
import HeaderComp from "./components/HeaderComp";
import idea from "./assets/images/idea.png"
import { LikeOutlined, LinkOutlined, EnvironmentOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { experience, projects } from "./data/data";

function App() {
  return (
    <>
      <div className="main">
        <HeaderComp />
        <div className="body-container">
          <div className="left">
            <section className="about">
              <article>
                <h2>A propos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam minima veniam reiciendis? Modi illum error ex. Incidunt, recusandae iure. Error, eum excepturi quas autem dolorem quia laborum ea earum!</p>
              </article>
            </section>
            <section className="projects">
              <h2>Mes récents projets</h2>
              <article>
                <img className="featured-img" src={idea} alt="idea" />
                <div className="project-infos">
                  <h3>Site web de gestion de média sociaux</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus harum exercitationem accusamus? Eos ducimus ratione dolor, rem explicabo ipsum officiis saepe iusto adipisci veritatis repellendus mollitia. Inventore, minima. Praesentium, omnis.</p>
                  <div className="btn-link">
                    <Button className="btn" icon={<LikeOutlined/>}>Soutenir mon projet</Button>
                  </div>
                </div>
              </article>
              <Divider style={{ backgroundColor: "#ffffff" }} />
              {
                projects.map((item) => {
                  return (
                    <article className="article-item" key={item.id}>
                      <div className="left">
                        <img src={item.image} alt={item.title} /> 
                      </div>
                      <div className="right">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <Button type="link" icon={<LinkOutlined/>}>En savoir plus</Button>
                      </div>
                    </article>
                  )
                })
              }
            </section>
            <section className="experiences">
              <h2>Expérience professionnelle</h2>
              {
                experience.map((item) => {
                  return (
                    <article key={item.id}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  )
                })
              }
            </section>
          </div>
          <aside>
            <div className="contacts section">
              <div className="contact-item">
                <EnvironmentOutlined />
                <span>Houplines, FRANCE</span>
              </div>
              <div className="contact-item">
                <MailOutlined />
                <span><a href="mailto:romain777imbrasse@gmail.com">romain777imbrasse@gmail.com</a></span>
              </div>
              <div className="contact-item">
                <LinkOutlined />
                <span><a href="www.monsite.com">www.monsite.com</a></span>
              </div>
            </div>
            <div className="skills section">
              <h2>Compétences</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, sint possimus quos maiores nihil quisquam doloribus officiis officia aspernatur, recusandae dolores! Possimus molestiae dolores, veniam voluptate quis qui modi sed?</p>
              <div className="skills-list">
                <div className="skill-item">
                  <span>PHP & Laravel</span>
                  <div className="full">
                    <div className="percent">

                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>JavaScript - ReactJS</span>
                  <div className="full">
                    <div className="percent">

                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>HTML,CSS,SCSS</span>
                  <div className="full">
                    <div className="percent">

                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Python & Django</span>
                  <div className="full">
                    <div className="percent">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default App;

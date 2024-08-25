import { Button, Divider } from "antd";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import { LikeOutlined, LinkOutlined } from "@ant-design/icons";
import { experience, projects } from "./data/data";
import AsideComp from "./components/AsideComp";

function App() {
  return (
    <>
      <div className='main'>
        <HeaderComp />
        <div className='body-container'>
          <div className='left'>
            <section className='about'>
              <article>
                <h2>A propos de moi</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  fugit sunt veniam dolor ducimus eos voluptatem obcaecati est
                  corrupti praesentium, placeat cum excepturi pariatur?
                  Reprehenderit quasi fugiat repudiandae illo tempore. At atque
                  rem provident, fugit inventore accusamus, ex deleniti suscipit
                  explicabo vitae perspiciatis nobis. Distinctio itaque minus at
                  possimus cumque quis laboriosam quae iure. Sunt officiis
                  deserunt harum suscipit consectetur. Fugiat, laboriosam! Ipsa
                  animi corporis consectetur expedita, alias illum cum debitis
                  temporibus quidem veritatis tenetur aspernatur reiciendis
                  praesentium qui nobis. Corrupti aliquid ipsum voluptatem
                  magnam? Neque tenetur quasi sequi tempore.
                </p>
              </article>
            </section>
            <section className='projects'>
              <h2>Mes recents projets</h2>
              <article>
                <img
                  className='featured-img'
                  src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221123132725/Top-Software-Engineering-Projects-Ideas.png'
                  alt='slug'
                />
                <div className='project-info'>
                  <h3>Site web de gestion de medias sociaux</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta ducimus laudantium maiores perspiciatis commodi quae
                    excepturi magni! Veniam eos voluptates eius accusantium
                    saepe fuga atque ab hic animi, quisquam dicta? Eligendi
                    temporibus reprehenderit fuga quos nisi beatae et neque
                    doloribus nulla similique blanditiis labore corrupti non
                    animi facere obcaecati modi iure, maxime accusamus cumque,
                    id, consequatur quae aut ducimus! Consequatur.
                  </p>
                  <div className='project-link'>
                    <Button className='btn' icon={<LikeOutlined />}>
                      Soutenir mon projet
                    </Button>
                  </div>
                </div>
              </article>
              <Divider style={{ backgroundColor: "#fff" }} />
              {projects.map((item, index) => {
                return (
                  <article className='article-item' key={index}>
                    <div className='left'>
                      <img src={item.image} alt='project-slug' />
                    </div>
                    <div className='right'>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Button type='link' icon={<LinkOutlined />}>
                        En savoir plus
                      </Button>
                    </div>
                  </article>
                );
              })}
            </section>

            <section className='experiences'>
              <h2>Experience professionnelle</h2>
              {experience.map((item) => {
                return (
                  <article key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </section>
          </div>
          <AsideComp />
        </div>
        <FooterComp />
      </div>
    </>
  );
}

export default App;

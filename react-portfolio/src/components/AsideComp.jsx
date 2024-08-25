import {
  EnvironmentOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { educations } from "../data/data";

const AsideComp = () => {
  return (
    <>
      <aside>
        <div className='section contacts'>
          <div className='contact-item'>
            <EnvironmentOutlined />
            <span>Houplines, FRANCE</span>
          </div>
          <div className='contact-item'>
            <MailOutlined />
            <span>
              <a href=''>romain777imbrasse@gmail.com</a>
            </span>
          </div>
          <div className='contact-item'>
            <LinkOutlined />
            <span>
              <a href=''>www.siteweb.com</a>
            </span>
          </div>
        </div>
        <div className='section'>
          <h2>Compétences</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            asperiores obcaecati, odio sint aut laudantium saepe laborum tempore
            soluta numquam deleniti, explicabo sunt eum illo sit voluptas non
            quaerat molestias.
          </p>
          <div className='skills'>
            <div className='skill'>
              <span>PHP & Laravel</span>
              <div className='full'>
                <div className='percent first'></div>
              </div>
            </div>
            <div className='skill'>
              <span>Javascript - React js</span>
              <div className='full'>
                <div className='percent second'></div>
              </div>
            </div>
            <div className='skill'>
              <span>HTML, CSS, SCSS</span>
              <div className='full'>
                <div className='percent third'></div>
              </div>
            </div>
            <div className='skill'>
              <span>Python && Django</span>
              <div className='full'>
                <div className='percent forth'></div>
              </div>
            </div>
          </div>
          <Button type='link' icon={<LinkOutlined />}>
            En savoir plus sur Github
          </Button>
        </div>
        <div className='section'>
          <h2>Témoignages</h2>
          <p>
            <q>
              Romain est un trés bon développeur front-end et il est passionné par
              ce qu'il fait. Vous pouvez totalement compter sur lui pour
              réaliser vos projets !
            </q>
          </p>
          <Button type='link' icon={<LinkOutlined />}>
            En savoir plus sur LinkedIn
          </Button>
        </div>
        <div className='section'>
          <h2>Éducation</h2>
          {educations.map((item, index) => {
            return (
              <div className='education-item' key={index}>
                <h3>{item.title}</h3>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div className='section'>
          <h2>Langues</h2>
          <div className='language-item'>
            <h3>Francais</h3>
            <span>Locuteur natif</span>
            <div className='full'>
              <div className='percent first'></div>
            </div>
          </div>
          <div className='language-item'>
            <h3>Anglais</h3>
            <span>Competances professionnelles</span>
            <div className='full'>
              <div className='percent second'></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AsideComp;
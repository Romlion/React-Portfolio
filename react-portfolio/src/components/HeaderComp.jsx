import { Button } from "antd";
import profile from "../assets/images/avatar.png";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MessageOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const HeaderComp = () => {
  return (
    <header>
      <div className='left'>
        <img src={profile} alt='' />
        <div className='user-infos'>
          <h1>IMBRASSE Romain</h1>
          <h3>Developpeur front-end - mobile</h3>
          <div className='contacts'>
            <div className='contact-item'>
              <LinkedinOutlined />
            </div>
            <div className='contact-item'>
              <TwitterOutlined />
            </div>
            <div className='contact-item'>
              <GithubOutlined />
            </div>
            <div className='contact-item'>
              <FacebookOutlined />
            </div>
          </div>
        </div>
      </div>
      <div className='right'>
        <Button className='contact-btn' icon={<MessageOutlined />}>
          Contactez-moi
        </Button>
      </div>
    </header>
  );
};

export default HeaderComp;
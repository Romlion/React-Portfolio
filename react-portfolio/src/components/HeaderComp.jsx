import React from "react";
import avatar from "../assets/images/avatar.png"
import { FacebookOutlined, GithubOutlined, LinkedinOutlined, MessageOutlined, TwitterOutlined } from "@ant-design/icons";
import { Button } from "antd";

const HeaderComp = () => {
    return (
        <header>
            <div className="left">
                <img src={avatar} alt="user" />
                <div className="user-info">
                    <h1>Imbrasse Romain</h1>
                    <h3>Développeur front-end - mobile</h3>
                    <div className="contacts">
                        <div className="contact-item">
                            <LinkedinOutlined/>
                        </div>
                        <div className="contact-item">
                            <TwitterOutlined/>
                        </div>
                        <div className="contact-item">
                            <GithubOutlined/>
                        </div>
                        <div className="contact-item">
                            <FacebookOutlined/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <Button className="contact-btn" icon = { <MessageOutlined/>}>Contactez-moi</Button>
            </div>
        </header>
    )
}

export default HeaderComp
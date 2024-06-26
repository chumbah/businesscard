import React from "react";

export default function Body(){
    return(
        <div className="body-content">
                <h2 className="head">About</h2>
                <p className="abouts">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className="head">Interests</h2>
                <p className="abouts">Food expert. Music scholar. Gamer. Internet fanatic. Bbq lover. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                <h2 className="head">Skills</h2>
                <p className="abouts">Expert front-end developer excelent in React, Javascript, HTML and CSS, crafting seamless user experiences with finesse.</p>
                <ul>
                    <div className="skill-lst">
                   <a href="www.react.com"><li>React<img src="/react.png"></img></li></a>
                    <a href="www.javascript.com"><li>Javascript<img src="/js.png"></img></li></a>
                    <a href="www.html.com"><li>Html & css<img src="/hc.png"></img></li></a>
                    <a href="www.figma.com"><li>Figma designs<img src="/figma.png"></img></li></a>
                    </div>
                    </ul>    
        </div>
    )
}

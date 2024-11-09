import React from 'react';
import "../css-files/about.css"
import Link from 'next/link';

const AboutPage: React.FC = () => {
    return (
        <div className="about-container">
            <div className="about-card">
                <div className="about-image"></div>
                <div className="about-content">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">
                        Hi there! I am a passionate web developer with a flair for creating visually appealing and 
                        responsive designs I specialize in HTML CSS JavaScript and TypeScript and I love 
                        working on projects that challenge me to think outside the box
                    </p>
                    <p className="about-description">
                        When I am not coding, youa all find me exploring new design trends working on side projects 
                        or catching up on tech news. My goal is to bring ideas to life through clean code and 
                        engaging visuals
                    </p>
                    <Link href="/Project"><button className="explore-button">Explore My Work</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

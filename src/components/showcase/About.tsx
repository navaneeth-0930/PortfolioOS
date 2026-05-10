import React from 'react';
import me from '../../assets/pictures/workingAtComputer.png';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Navaneeth M</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a web developer who is currently Pursing his Degree in Computer Science and Design!
                    I am currently Based in Kerala, India and am open to full time opportunities. I have a passion for building things and am always looking for new and exciting projects to work on. I have experience with a wide range of technologies, including React, Node.js, and more. I am also a quick learner and am always looking to expand my skill set.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:navaneeth0930@gmail.com">
                        navaneeth0930@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age itself i was really curious about how things worked.I was given my first computer when i was 10 and i was immediately hooked. I started Learning about how things worked and how things are made in a computer. I was fascinated by the idea of being able to create something out of nothing and I knew that I wanted to be a part of that world. I started learning how to code and slowly but surely I started building my own projects and learning new technologies.I was fasicnated by the world of web development when i was 16 and I knew that I wanted to be a part of that world. I started learning how to build websites and web applications and I quickly fell in love with the field. I love the idea of being able to create something that can be accessed by anyone in the world and I am always looking for new and exciting projects to work on.  
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously by my senior year of high school,
                    initially learning how to build and create websites.
                    I experimented with a lot of platforms and landed my first intership at the age of 17 before my Collage year Started at {' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/company/devou-solutions/posts/?feedView=all  "
                    >
                        Devou
                    </a>
                    . I worked on many projects in there, including Building Websites for Oversease Clients unsing Wordpress,
                    multiple Local projects, SEOs, and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software"> Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2025, I got accepted into Viswajyothi College of Engineering and Technology,
                    to study Computer Science and Design. It was my first choice
                    and I was absolutely ecstatic to be going to such a great
                    university. At the end of my First year, I Did a lot of Community Works and Volunteering,
                    along with my internship at Devou, I continued to work at Devou on and off
                    for about a year and a half, until the start of my Second
                    year when I decided to focus on other opportunities.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="/projects/music">Music</Link>{' '}
                            and creating{' '}
                            <Link to="/projects/art">Digital Art & Posters </Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing video games, Traveling etc .When it comes to me i am someone who is always looking for new and exciting things to do and I am always open to trying new things. I am a very curious person and I love learning about new things, whether it's a new technology or a new hobby. I am always looking for ways to improve myself and explore evreything that the world has to offer.
                        </p>
                        <br />
                        <p>
                            In college, I was an active member in the Tinker Hub Community,
                            Where I met a lot of amazing people through
                            my involvement and thoroughly enjoyed the community.
                        </p>
                    </div>
                    
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer.
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:navaneeth0930@gmail.com.com">
                        navaneeth0930@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;

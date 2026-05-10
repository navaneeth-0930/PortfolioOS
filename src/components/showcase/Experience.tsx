import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Devou</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.devou.in/'}
                        >
                            <h4>www.devou.in</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Web Developer</h3>
                        <b>
                            <p>Summer 2025 - Summer 2026</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                     Targeted towards startups, businesses, and creators looking to scale digitally, Devou
 builds modern websites, AI-powered workflows, and scalable digital products. Developed using technologies like React, TypeScript, Framer Motion, Express, and modern automation tools, Devou focuses on fast, high-performance experiences that combine design, development, and intelligent business automation.
                </p>
                <br />
                <p>                   During my time at Devou, I worked on a wide range of projects, including building websites for overseas clients using Wordpress, multiple local projects, SEOs, and more. One of these projects is viewable on my <Link to="/projects/software">Projects</Link> page. I also got the opportunity to work on a lot of different aspects of the business, including client communication, project management, and more. I really enjoyed my time at Devou and I am grateful for the opportunity to have worked with such a great team and on such a wide range of projects. I learned a lot during my time there and I am excited to take everything I learned and apply it to future opportunities.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;

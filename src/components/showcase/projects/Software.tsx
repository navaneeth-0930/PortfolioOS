import React from 'react';
// @ts-ignore
import pearl from '../../../assets/pictures/projects/software/Pearl star.png';
// @ts-ignore
import oofdi from '../../../assets/pictures/projects/software/OOFDI.png';
// @ts-ignore
import Lab from '../../../assets/pictures/projects/software/Lab formatter.png';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>OOFDI.com</h2>
                <br />
                <p>
                   OOFDI
 was the very first real-world website I built under Devou
 and also my first official client project. This website marked the beginning of my journey into professional web development, pushing me to think beyond just coding and focus on creating a complete digital experience for a real brand. Building OOFDI challenged me creatively and technically, helping me understand client requirements, modern UI design, responsiveness, and performance optimization. More than just a project, it became the foundation that shaped my confidence as a developer and kickstarted my path into building professional digital products.
                </p>
                <br />
                <div className="captioned-image">
                    <a href={oofdi} target="_blank" rel="noreferrer">
                        <img src={oofdi} alt="OOFDI Website" />
                    </a>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> nteractive homepage of OOFDI.
Designed and developed as a modern brand-focused landing page, combining smooth animations, responsive layouts, and immersive visuals to create a strong first impression for the client.
                        </sub>
                    </p>
                </div>
                <p>
      Now for the Technical the breakdown, I developed this high-performance web
  platform using
      <strong>Next.js 15</strong> and <strong>React 19</strong>. The
  architecture
      leverages <strong>Server-Side Rendering (SSR)</strong> and the
      <strong>App Router</strong> to ensure optimal SEO and lightning-fast
  load times.
      The UI is crafted with <strong>Tailwind CSS 4</strong> for a sleek,
  responsive
      design, while <strong>Framer Motion</strong> was integrated to provide
  smooth,
      interactive animations throughout the user journey.
  </p>
  <br />
  <p>
      On the backend, I implemented <strong>Firebase</strong> for real-time
  data
      management and <strong>Vercel Blob</strong> for efficient media
  storage.
      I also integrated <strong>EmailJS</strong> for seamless client-side
  communication
      and utilized <strong>Vercel Analytics</strong> to track user
  engagement and performance
      metrics. The site is hosted as a standalone application at{' '}
      <a
          rel="noreferrer"
          target="_blank"
          href="https://www.oofdi.com/"
      >
          www.oofdi.com
      </a>, serving as a scalable and interactive digital hub for the brand.
  </p>
               
            </div>
            <div className="text-block">
                <h2>Pear Star.com</h2>
                <br />
                <p>
                    Pearl Star
 was one of the first international projects I worked on for a GCC-based client, developed using WordPress
. The project focused on building a professional digital presence for an industrial and MEP solutions company serving Saudi Arabia and the wider GCC region. Working on this website helped me gain real-world experience in client communication, responsive web design, custom WordPress development, and creating scalable business-focused websites for overseas markets. It was a major step in expanding my work from local projects to international clients.
                </p>
                <br />
                <div className="captioned-image">
                    <a href={pearl} target="_blank" rel="noreferrer">
                        <img src={pearl} alt="Pearl Star Website" />
                    </a>    
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2 :</b> Homepage of Pearl Star.
Designed as a clean and professional corporate landing page, showcasing the company’s industrial services, GCC presence, and modern business identity through structured layouts and responsive design.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                     Pearl Star is a comprehensive corporate platform built on the
      <strong>WordPress CMS</strong>, utilizing the high-performance
      <strong>Pearl Multi-Purpose Business Theme</strong>. The site features
  a
      modular architecture specifically designed for industrial and MEP
  service
      providers, leveraging <strong>WPBakery Page Builder</strong> for
  custom
      layout design and <strong>Slider Revolution</strong> for dynamic,
  high-impact
      visual storytelling.
  </p>
  <br />
  <p>
      The platform is optimized for the GCC market, featuring a fully
  responsive
      design built on <strong>Bootstrap</strong> and enhanced with
  <strong> Retina-ready</strong>
      assets. I implemented advanced navigation systems through the
      <strong>Pearl Header Builder</strong> and integrated professional
  inquiry
      management via custom <strong>Contact Form 7</strong> workflows. The
  frontend
      is powered by <strong>PHP</strong>, <strong>jQuery</strong>, and
  <strong>CSS3</strong>,
      ensuring a seamless and professional user experience across all modern
  devices.
                </p>
                <br />
                <h3>Link:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://pearl-star.com/"
                        >
                            <p>
                                <b>[Website]</b> - Pearl Star
                            </p>
                        </a>
                    </li>
                </ul>   
            </div>
            <div className="text-block">
                <h2>Lab Formstter </h2>
                <br />
                <p>
                        The Lab Formatter is a specialized utility web application designed to
  streamline the documentation process for engineering students. It
  simplifies the task of generating clean, standardized lab records for
  programming assignments.
                </p>
                <br />
                <div className="captioned-image">
                    <a href='c:\Users\Navaneeth\Downloads\Lab formatter.png' target="_blank" rel="noreferrer">
                        <img src={Lab} alt="Lab Formatter" />
                    </a>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Lab Formatter in action, generating
                            standardized lab records for programming assignments.
                        </sub>
                    </p>
                </div>
                <p>
                    I made this project as a fun project where in my collage all the resuts for the records u write should be printed down in a spceific format and i found it really annoying to write down the same thing again and again for every single lab record. So i decided to make a simple web app where you can just input the results and it will generate a clean text file for you in the correct format. It was a fun project to work on and it was really rewarding to see how much time it saved me and my friends when we had to write lab records.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/navaneeth-0930/lab-formatter"
                        >
                            <p>
                                <b>[GitHub]</b> - Lab Formatter Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://lab-formatter-vercel.vercel.app/"
                        >
                            <p>
                                <b>[Live Demo]</b> - Lab Formatter
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;

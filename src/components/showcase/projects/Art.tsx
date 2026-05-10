import React from 'react';

import batman from '../../../assets/pictures/projects/art/batman.png';
import icarus from '../../../assets/pictures/projects/art/icarus.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Digital Art & Posters</h1>
            <h3>Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                    While I love programming and software development, Art,
                    Design will always hold a special place in my
                    heart.
                </p>
                <br />
                <p>
                    Here are a few projects/things I've done  to
                    keep the artistic side of me alive. I'm always looking to
                    push myself creatively and learn new things.
                </p>
            </div>
            <div className="text-block">
                <h2>Poster Desigining</h2>
                <br />
                <p>
                    I always had a prespective about Designs and exploring Niche ones ,Sometimes Whenever i wanna jus take some time off i usually go to pintrest to explore different designs.Even tho i had this intrest i never created anything of my own nor have i tried to until one day While i was in Collage, I joined a design competition called Frame to Fabric which was organized by one of my friends.
                </p>
                <br />
                <div className="captioned-image" style={{ width: '35%' }}>
                    <img src={batman} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A Bat-man Poster Created By me
                        </sub>
                    </p>
                </div>
                <div className="captioned-image" style={{ width: '30%' }}>
                    <img src={icarus} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> An icarus Poster Created By me
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    In the Competition i realised that even i could create such art piece and that i enjoy creating these. And that was the Start of my journey into the world of digital art and design.
                </p>
                <br />
                    <br />               
                <p>
                    This page is currently a work in progress. I've recently
                    found myself wanting to make more  art recently and I
                    have some project plans and ideas in the works. Expect
                    updates to this page as I dive back into the world of digital
                    art and design.
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;

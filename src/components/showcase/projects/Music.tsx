import React, { useState } from 'react';
// @ts-ignore
import dandalions from '../../../assets/audio/Dandalions.m4a';
// @ts-ignore
import Story from '../../../assets/audio/Story_of_my_life.mp3';
// @ts-ignore
import gig2 from '../../../assets/videos/gig2.mp4';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music & Sound</h1>
            <h3>Ventures</h3>
            <br />
            <div className="text-block">
                <p>
                    Music has been a passion of mine for my whole life. When I
                    was younger, I was really into the music made by Shawn
                    Mendes, Ed Sheeran, Justin Bieber, and many more artists
                    from all kinds of genres. When I was around 15 years old, I
                    got myself a guitar and started learning how to play it and
                    cover songs from my favorite artists.
                </p>
                <br />
                <p>
                    I don't release the covers that I make publicly as I not
                    only find it difficult to finish songs, but also it's not a
                    priority of mine since I create mostly because I enjoy the
                    process of learning and creating. However, if I am going to
                    dedicate a whole page of my portfolio to my music, you bet
                    I'll have some examples to show off.
                </p>
                <br />
                <p>
                    Below are some more recent musical covers I've been working
                    on. I hope you enjoy the music.
                </p>
            </div>
            <h2>Dandelions - Ruth B</h2>
            <br />
            <p>
                Dandelions is a song by Ruth B that I covered for the first time
                when I was just learning how to play guitar and sing at the same
                time. I got the inspiration to cover this song after listening
                to another cover made by a YouTuber named Aaron Rebustes. I
                really loved his cover and wanted to make my own version of it.
            </p>
            <br />
            <p>
                At first, it was a bit confusing to play and sing at the same
                time, but with a lot of practice, I was able to get the hang of
                it and eventually got to a point where I was happy with the
                cover. I really enjoyed making this cover and it holds a special
                place in my heart since it was one of the first songs I covered.
            </p>
            <br />

            <MusicPlayer
                src={dandalions}
                title="Dandelions"
                subtitle="Ruth B - 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <br />
            <h2>Story Of My Life - One Direction</h2>
            <br />
            <p>
                I was a One Direction fan from the day I started listening to
                music, and they have played a major role in who I am today
                (music-wise). One morning, I was hit by the devastating news
                that one of the members of the band had passed away. I was
                really sad and I wanted to do a cover of one of the top-charted
                and one of my personal favorite songs of the band as a tribute
                to the band and to Liam, who passed away.
            </p>
            <br />
            <MusicPlayer
                src={Story}
                title="Story Of My Life"
                subtitle="One Direction - 2013"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                This cover holds a very special place in my heart since it was a
                tribute to one of my favorite bands and it was also a way for me
                to cope with the loss of one of the members. I really enjoyed
                making this cover and it was a great way for me to express my
                feelings and emotions through music.
            </p>
            <br />
            <h2>My First Gig in Front of a Crowd</h2>
            <br />
            <p>
                I have been playing guitar and singing for a long time, but I
                never had the opportunity to perform in front of a crowd until
                one day when I was presented with the opportunity to perform at
                an event in my college called "TinkerHack," which was a
                hackathon organized by TinkerHub focused on women, where I was
                also a mentor and I was asked to perform a song at the event
                during the break time at midnight.
            </p>
            <br />
            <div style={styles.videoGrid}>
                <div style={styles.videoContainer}>
                    <video
                        src={gig2}
                        controls
                        width="35%"
                        style={styles.video}
                    />
                    <p>
                        <sub>
                            <b>Clip 1:</b> 30s highlight from the performance
                        </sub>
                    </p>
                </div>
            </div>
            <br />

            <br />
            <p>
                I was the happiest and it was one of the best days of my life.
                It was like a dream come true, and to hear the crowd sing along
                to the song I was performing was an indescribable feeling. I
                really enjoy performing and it was a great experience for me to
                perform in front of a crowd for the first time.
            </p>
            <br />
            <h2>The Future of My Music</h2>
            <br />
            <p>
                I love to make covers and will continue to make covers as long
                as I can. I think soon enough I will be playing more public gigs
                since I feel like my personal style has slowly developed into
                something I am proud of over these last few years. I also want
                to one day make an album, but that is a long way away.
            </p>
            <br />
           
        </div>
    );
};

const styles: StyleSheetCSS = {
    videoGrid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '24px',
        marginTop: '24px',
        marginBottom: '24px',
    },
    videoContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    video: {
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.3)',
        border: '1px solid #444',
    },
};

export default MusicProjects;
    
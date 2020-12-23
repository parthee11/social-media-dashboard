import React from 'react'
import StatCard from './component/StatCard';
import './css/style.scss'
import facebookIcon from './assets/icon-facebook.svg'
import twitterIcon from './assets/icon-twitter.svg'
import instagramIcon from './assets/icon-instagram.svg'
import youtubeIcon from './assets/icon-youtube.svg'
import upIcon from './assets/icon-up.svg'
import downIcon from './assets/icon-down.svg'
import OverviewCard from './component/OverviewCard';

const data = {
    totalFollowers: '23,004',
    username: {
        facebook: '@nathanf',
        twitter: '@nathanf',
        instagram: '@realnathanf',
        youtube: 'Nathan F.',
    },
    followersBD: {
        facebook: ['1987', '12'],
        twitter: ['1044', '99'],
        instagram: ['11k', '1099'],
        youtube: ['8239', '144'],
    },
    overview: {
        facebook: {
            pageviews: ['87', '3'],
            likes: ['52', '2']
        },
        instagram: {
            likes: ['5462', '2257'],
            profviews: ['52k', '1375']
        },
        twitter: {
            retweets: ['117', '303'],
            likes: ['507', '553']
        },
        youtube: {
            likes: ['107', '19'],
            totalviews: ['1407', '12']
        }
    }
}

function darkModeHanlder() {
    setTimeout(() => {
        document.body.classList.toggle('dark');
    }, 200)
}

export default function App() {
    const { totalFollowers, username, followersBD, overview } = data;
    return (
        <div className="container">
            <header>
                <div className="header-left">
                    <h1>Social Media Dashboard</h1>
                    <p className="total-followers">Total Followers: {totalFollowers}</p>
                </div>
                <div className="header-right">
                    <div className="dark-mode">
                        <span>Dark Mode</span>
                        <span className="dark-mode-btn" onClick={darkModeHanlder} >
                            <span className="dark-mode-switch"></span>
                        </span>
                    </div>
                </div>
            </header>
            <div className="stats">

                <StatCard platform="facebook" image={facebookIcon} altText="facebook-logo" userName={username.facebook} followSubNumber={followersBD.facebook[0]} followOrSub="Followers" icon={upIcon} iconAlt="up-arrow" gainLossNum={followersBD.facebook[1]} />
                
                <StatCard platform="twitter" image={twitterIcon} altText="twitter-logo" userName={username.twitter} followSubNumber={followersBD.twitter[0]} followOrSub="Followers" icon={upIcon} iconAlt="up-arrow" gainLossNum={followersBD.twitter[1]} />
                
                <StatCard platform="instagram" image={instagramIcon} altText="instagram-logo" userName={username.instagram} followSubNumber={followersBD.instagram[0]} followOrSub="Followers" icon={upIcon} iconAlt="up-arrow" gainLossNum={followersBD.instagram[1]} />
                
                <StatCard platform="youtube" image={youtubeIcon} altText="youtube-logo" userName={username.youtube} followSubNumber={followersBD.youtube[0]} followOrSub="Subscribers" icon={downIcon} iconAlt="down-arrow" gainLossNum={followersBD.youtube[1]} />
                
            </div>
            <div className="overview">

                <h2>Overview - Today</h2>
                <div className="overview-stats">

                    <OverviewCard title="page views" image={facebookIcon} altText="facebook" number={overview.facebook.pageviews[0]} icon={upIcon} iconAlt="up-arrow" gainLossNum={overview.facebook.pageviews[1]} />
                    <OverviewCard title="likes" image={facebookIcon} altText="facebook" number={overview.facebook.likes[0]} icon={downIcon} iconAlt="down-arrow" gainLossNum={overview.facebook.likes[1]} />
                    
                    <OverviewCard title="likes" image={instagramIcon} altText="instagram" number={overview.instagram.likes[0]} icon={upIcon} iconAlt="up-arrow" gainLossNum={overview.instagram.likes[1]} />
                    <OverviewCard title="profile views" image={instagramIcon} altText="instagram" number={overview.instagram.profviews[0]} icon={upIcon} iconAlt="up-arrow" gainLossNum={overview.instagram.profviews[1]} />
                    
                    <OverviewCard title="retweets" image={twitterIcon} altText="twitter" number={overview.twitter.retweets[0]} icon={upIcon} iconAlt="up-arrow" gainLossNum={overview.twitter.retweets[1]} />
                    <OverviewCard title="likes" image={twitterIcon} altText="twitter" number={overview.twitter.likes[0]} icon={upIcon} iconAlt="up-arrow" gainLossNum={overview.twitter.likes[1]} />

                    <OverviewCard title="likes" image={youtubeIcon} altText="youtube" number={overview.youtube.likes[0]} icon={downIcon} iconAlt="down-arrow" gainLossNum={overview.youtube.likes[1]} />
                    <OverviewCard title="total views" image={youtubeIcon} altText="youtube" number={overview.youtube.totalviews[0]} icon={downIcon} iconAlt="down-arrow" gainLossNum={overview.youtube.totalviews[1]} />

                </div>

            </div>
        </div>
    )
}

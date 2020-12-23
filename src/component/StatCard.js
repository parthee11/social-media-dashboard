import React from 'react'

export default function StatCard({platform, image, altText, userName, followSubNumber, followOrSub, icon, iconAlt, gainLossNum}) {
    return (
        <div className="stat-card" id={platform}>
            <div className="username">
                <img src={image} alt={altText}/>
                <p>{userName}</p>
            </div>
            <div className="stat">
                <p className="follow-sub">{followSubNumber}</p>
                <p>{followOrSub}</p>
            </div>
            <div className="gain-loss">
                <img src={icon} alt={iconAlt}/>
                <p className="gain-loss-number">{gainLossNum} Today</p>
            </div>
        </div>
    )
}

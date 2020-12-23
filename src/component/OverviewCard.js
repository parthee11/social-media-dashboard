import React from 'react'

export default function OverviewCard({ title, image, altText, number, icon, iconAlt, gainLossNum }) {
    return (
        <div className="overview-card">
            <div className="card-head">
                <p className="title">{title}</p>
                <img src={image} alt={altText}/>
            </div>
            <div className="card-details">
                <p className="number">{number}</p>
                <div className="gain-loss">
                    <img src={icon} alt={iconAlt}/>
                    <p className="gain-loss-number">{gainLossNum}%</p>
                </div>
            </div>
        </div>
    )
}

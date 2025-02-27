import React from "react";
import { useLocation } from "react-router-dom";
import Market from "../assets/market.svg";
import Gift from "../assets/gift.svg";
import Earth from "../assets/earth.svg";
import Profile from "../assets/profile.svg";

const Navigation = () => {
    const location = useLocation();

    const getLinkStyle = (path) => {
        return location.pathname === path ? { color: "var(--tg-theme-button-color)" } : { color: "var(--tg-theme-subtitle-text-color)" };
    };

    const getIconStyle = (path) => {
        return location.pathname === path ? { filter: "invert(29%) sepia(96%) saturate(7483%) hue-rotate(194deg) brightness(100%) contrast(101%)" } : {};
    };

    return (
        <div style={{ backgroundColor: "var(--tg-theme-secondary-bg-color)", position: "fixed", bottom: 0, width: "100%", height: "10vh", display: "flex", justifyContent: "space-between", padding: "1vh 0" }}>
            <div style={{ width: "20%", textAlign: "center" }}>
                <a href="/" style={getLinkStyle("/")}>
                    <img src={Market} alt="Store" style={{ ...getLinkStyle("/"), ...getIconStyle("/") }} />
                    <p style={{ margin: "1px" }}>Store</p>
                </a>
            </div>
            <div style={{ width: "20%", textAlign: "center" }}>
                <a href="/gifts" style={getLinkStyle("/gifts")}>
                    <img src={Gift} alt="Gifts" style={{ ...getLinkStyle("/gifts"), ...getIconStyle("/gifts") }} />
                    <p style={{ margin: "1px" }}>Gifts</p>
                </a>
            </div>
            <div style={{ width: "20%", textAlign: "center" }}>
                <a href="/leaderboard" style={getLinkStyle("/leaderboard")}>
                    <img src={Earth} alt="Leaderboard" style={{ ...getLinkStyle("/leaderboard"), ...getIconStyle("/leaderboard") }} />
                    <p style={{ margin: "1px" }}>Leaderboard</p>
                </a>
            </div>
            <div style={{ width: "20%", textAlign: "center" }}>
                <a href="/profile" style={getLinkStyle("/profile")}>
                    <img src={Profile} alt="Profile" style={{ ...getLinkStyle("/profile"), ...getIconStyle("/profile") }} />
                    <p style={{ margin: "1px" }}>Profile</p>
                </a>
            </div>
        </div>
    );
}

export default Navigation;
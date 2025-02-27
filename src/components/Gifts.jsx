import React from "react";
import Navigation from "./Navigation";
import Ballon from "../assets/ballon.svg";

const Gifts = () => {
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", textAlign: "center" }}>
            <div>
                <h2 style={{ color: "var(--tg-theme-text-color)" }}>Send Gifts in Telegram</h2>
                <p style={{ color: "var(--tg-theme-hint-color)" }}>Send gifts to users that can be stored in their app profile.</p>
            </div>
            <div>
                <img src={Ballon} alt="Ballon" />
                <p style={{ color: "var(--tg-theme-text-color)" }}>You don't have any gifts yet.</p>
                <a href="/">
                    <p style={{ color: "var(--tg-theme-button-color)", cursor: "pointer" }}>Open Store</p>
                </a>
            </div>
            <Navigation />
        </div>
    );
}

export default Gifts;
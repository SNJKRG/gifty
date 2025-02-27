import React from "react";
import Ballon from "../assets/ballon.svg";

const Invoice = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ textAlign: "center" }}>
                <img src={Ballon} style={{ borderRadius: "25%" }} alt="Ballon" />
                <p style={{ color: "var(--tg-theme-text-color)" }}>Invoice from <strong>Gift App</strong></p>
                <h2 style={{ color: "var(--tg-theme-text-color)" }}>10 USDT</h2>
                <p style={{ color: "var(--tg-theme-hint-color)" }}>$10</p>
                <p style={{ color: "var(--tg-theme-text-color)" }}>Purchasing a <strong>Delicious Cake</strong> gift</p>
                <button style={{ color: "var(--tg-theme-button-text-color)", backgroundColor:"var(--tg-theme-button-color)", alignSelf:"center"}}>Pay 10 USDT</button>
            </div>       
        </div>
    );
}

export default Invoice;
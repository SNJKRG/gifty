import React from "react";
import Lottie from "lottie-react";
import Gift1Animation from "../assets/animations/gift-delicious-cake.json";

const Checkout = () => {
    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
            <div style={{ textAlign: "center", width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Lottie animationData={Gift1Animation} style={{ width: "100px", height: "100px" }} />
                </div>
                <h2 style={{ color: "var(--tg-theme-text-color)" }}>Gift purchased</h2>
                <p style={{ color: "var(--tg-theme-text-color)" }}>The <strong>Delicious Cake</strong> gift was purchased for <strong>10 USDT.</strong></p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <button style={{ color: "var(--tg-theme-button-text-color)", backgroundColor:"var(--tg-theme-button-color)", marginBottom: "10px" }}>Send Gift</button>
                    <button style={{ backgroundColor: "var(--tg-theme-button-text-color)", color:"var(--tg-theme-button-color)" }}>Open Store</button>
                </div>
            </div>       
        </div>
    );
}

export default Checkout;

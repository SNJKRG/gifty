import React from "react";
import Navigation from "./Navigation";
import Podarok from "../assets/podarok.svg";
import Gift1 from "../assets/gifts/Gift=01.svg";
import Gift2 from "../assets/gifts/Gift=02.svg";
import Gift3 from "../assets/gifts/Gift=03.svg";
import Gift4 from "../assets/gifts/Gift=04.svg";
import { Player } from '@lottiefiles/react-lottie-player';
import Gift1Animation from "../assets/animations/gift-delicious-cake.json";
import Gift2Animation from "../assets/animations/gift-green-star.json";
import Gift3Animation from "../assets/animations/gift-blue-star.json";
import Gift4Animation from "../assets/animations/gift-red-star.json";

const Card = ({ img, title, price, animation, backgroundColor }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", backgroundColor, padding: "10px", borderRadius: "10px", cursor: "pointer" }}>
            {animation ? (
                <Player
                    autoplay
                    loop
                    src={animation}
                    style={{ width: '120px', height: '120px' }}
                />
            ) : (
                <img src={img} alt={title} style={{width:"120px", height:"120px"}} />
            )}
            <h2 style={{ color: "var(--tg-theme-text-color)", textAlign: "center", whiteSpace: "nowrap" }}>{title}</h2>
            <button style={{color:"var(--tg-theme-button-text-color)", backgroundColor:"var(--tg-theme-button-color)"}}>{price}</button>
        </div>
    );
}

const Store = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", height: "100vh", width:"100%", boxSizing: "border-box"}}>
            {/* HEADER */}
            <div style={{ textAlign: "center", marginTop: "20px", whiteSpace: "nowrap" }}>
                <img src={Podarok} alt="Podarok" />
                <h2 style={{ color: "var(--tg-theme-text-color)", textAlign: "center", whiteSpace: "nowrap" }}>Buy and Send Gifts</h2>
                <p style={{ color: "var(--tg-theme-hint-color)", whiteSpace: "nowrap" }}>Unique gifts for everyone by Crypto Pay.</p>
            </div>
            {/* CARDS */}
            <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", margin: "20px"}}>
                <Card key="1" img={Gift1} title="Delicious Cake" price="10 USDT" animation={Gift1Animation} backgroundColor="var(--tg-theme-bg-color-1)"></Card>
                <Card key="2" img={Gift2} title="Green Star" price="10 USDT" animation={Gift2Animation} backgroundColor="var(--tg-theme-bg-color-2)"></Card>
                <Card key="3" img={Gift3} title="Blue Star" price="10 USDT" animation={Gift3Animation} backgroundColor="var(--tg-theme-bg-color-3)"></Card>
                <Card key="4" img={Gift4} title="Red Star" price="10 USDT" animation={Gift4Animation} backgroundColor="var(--tg-theme-bg-color-4)"></Card>
            </div>
            <Navigation />
        </div>
    );
}

export default Store;






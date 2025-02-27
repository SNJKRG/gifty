import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import Gift1 from "../assets/gifts/Gift=01.svg";
import Gift1Animation from "../assets/animations/gift-delicious-cake.json";

const Page = () => {
    const { img, title, price, animation, backgroundColor } = {
        img:{Gift1},
        title:"Delicious Cake",
        price:"10 USDT",
        animation:{Gift1Animation},
        backgroundColor:"var(--tg-theme-bg-color-1)"
    }

    return (
        <div style={{ backgroundColor, padding: "20px", borderRadius: "10px" }}>
            <div>
                {animation ? (
                    <Player
                        autoplay
                        loop
                        src={animation}
                        style={{ width: '120px', height: '120px' }}
                    />
                ) : (
                    <img src={img} style={{width:"40vw", height:"40vw"}} />
                )}
            </div>
            <div>
                <h3>{title}</h3>
                <p>Purchase this gift for the opportunity to give it to another user.</p>
                <p>{price}</p>
            </div>
            <div></div>
            <div>
                <p>Recently Actions</p>
            </div>
            <div>
                <button style={{backgroundColor: "var(--tg-theme-button-color)", color:"var(--tg-theme-button-text-color)", width:"80vw"}}>Buy a Gift</button>
            </div>
        </div>
    );
}

export default Page;
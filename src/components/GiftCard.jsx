import React from "react";

const GiftCard = (animation, img, title) => {
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", backgroundColor:"var(--tg-theme-secondary-bg-color)", padding: "10px", borderRadius: "10px", cursor: "pointer" }}>
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
            <button style={{color:"var(--tg-theme-button-text-color)", backgroundColor:"var(--tg-theme-button-color)"}}>Send</button>
        </div>
    );

}

export default GiftCard(animation, img, title);
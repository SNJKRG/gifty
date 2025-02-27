import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";

const Profile = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [language, setLanguage] = useState("EN");
    const [theme, setTheme] = useState("day");

    useEffect(() => {
        // Fetch the current Telegram user using the Telegram Web Apps API
        const tg = window.Telegram.WebApp;
        tg.ready();
        const user = tg.initDataUnsafe?.user;
        if (user) {
            setCurrentUser({
                id: user.id,
                name: user.first_name,
                score: 999, // Default score, you can update this based on your logic
                photo_url: user.photo_url // User's avatar URL
            });
        }
    }, []);

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === "EN" ? "RUS" : "EN"));
        // Add logic to translate the page content here
        const tg = window.Telegram.WebApp;
        tg.setLanguage(language === "EN" ? "ru" : "en");
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "day" ? "night" : "day"));
        document.body.className = theme === "day" ? "night-theme" : "day-theme";
        const tg = window.Telegram.WebApp;
        tg.setThemeParams(theme === "day" ? { theme: "dark" } : { theme: "light" });
    };

    return(
        <div style={{backgroundColor:"var(--tg-theme-secondary-bg-color)", height:"100vh", width:"100vw"}}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", paddingTop: "24vh" }}>
                <div className="setUpLanguage">
                    <button onClick={toggleLanguage} style={{ display: "flex", justifyContent: "space-between", width: "80px", padding: "8px", borderRadius: "20px", border: "1px solid #ccc", backgroundColor: "var(--tg-theme-secondary-bg-color)" }}>
                        <span style={{ fontWeight: language === "EN" ? "bold" : "normal", color: language === "EN" ? "var(--tg-theme-text-color)" : "var(--tg-theme-secondary-bg-color)", backgroundColor: language === "EN" ? "var(--tg-theme-bg-color)" : "var(--tg-theme-secondary-bg-color)", padding: "3px", borderRadius: "10px" }}>EN</span>
                        <span style={{ fontWeight: language === "RUS" ? "bold" : "normal", color: language === "RUS" ? "var(--tg-theme-text-color)" : "var(--tg-theme-secondary-bg-color)", backgroundColor: language === "RUS" ? "var(--tg-theme-bg-color)" : "var(--tg-theme-secondary-bg-color)", padding: "3px", borderRadius: "10px" }}>RUS</span>
                    </button>
                </div>
                {currentUser?.photo_url ? (
                    <img src={currentUser.photo_url} alt="Avatar" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%", marginLeft:"45px " }} />
                ) : null}
                <div className="setUpTheme" style={{marginLeft: "10vw"}}>
                    <button onClick={toggleTheme} style={{ display: "flex", justifyContent: "space-between", width: "80px", padding: "8px", borderRadius: "20px", border: "1px solid #ccc", backgroundColor: "var(--tg-theme-secondary-bg-color)" }}>
                        <span style={{ fontWeight: theme === "day" ? "bold" : "normal", color: theme === "day" ? "var(--tg-theme-bg-color)" : "var(--tg-theme-secondary-bg-color)", backgroundColor: theme === "day" ? "var(--tg-theme-bg-color)" : "var(--tg-theme-secondary-bg-color)", padding: "3px", borderRadius: "10px" }}>🌞</span>
                        <span style={{ fontWeight: theme === "night" ? "bold" : "normal", color: theme === "night" ? "var(--tg-theme-bg-color)" : "var(--tg-theme-secondary-bg-color)", backgroundColor: theme === "night" ? "var(--tg-theme-bg-color)" : "var(--tg-theme-secondary-bg-color)", padding: "3px", borderRadius: "10px" }}>🌜</span>
                    </button>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", marginTop: "20px" }}>
                <h2>{currentUser?.name}</h2>
                <p>{currentUser?.score} gift received</p>
            </div>
            <Navigation />
        </div>
    );
}

export default Profile;
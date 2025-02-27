import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Podarok from "../assets/podarok.svg";

const mockUsers = [
    { id: 1, name: "Alice", score: 120 },
    { id: 2, name: "Bob", score: 110 },
    { id: 3, name: "Charlie", score: 100 },
    { id: 4, name: "David", score: 90 },
    { id: 5, name: "Eve", score: 80 },
    { id: 6, name: "Frank", score: 70 },
    { id: 7, name: "Grace", score: 60 },
    { id: 8, name: "Hank", score: 50 },
    { id: 9, name: "Ivy", score: 40 },
    { id: 10, name: "Jack", score: 30 }
];

const Leaderboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

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

    let users = [...mockUsers];
    if (currentUser) {
        users.unshift(currentUser);
    }

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredUsers.sort((a, b) => b.score - a.score);

    const getMedal = (index) => {
        switch (index) {
            case 0:
                return "🥇";
            case 1:
                return "🥈";
            case 2:
                return "🥉";
            default:
                return `#${index + 1}`;
        }
    };

    return(
        <div style={{ width: "100vw", minHeight: "100vh", backgroundColor: "var(--tg-theme-secondary-bg-color)", overflowY:"none"}}>
            <Navigation />
            <input
                type="text"
                placeholder="🔍 Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ margin: "20px 20px", padding: "10px", width: "calc(95% - 40px)", height: "3vh", borderRadius: "20px", border: "1px solid #ccc", fontSize: "20px", textAlign: "center", backgroundColor:"var(--tg-theme-secondary-bg-color)", color:"var(--tg-theme-hint-color)" }}
            />
            <ul style={{ width: "100%", padding: "0 20px" }}>
                {filteredUsers.map((user, index) => (
                    <li key={user.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px", width: "90%" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "pink", marginRight: "10px", overflow: "hidden" }}>
                            {user.photo_url ? (
                                <img src={user.photo_url} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            ) : null}
                        </div>
                        <div style={{ flex: 1 }}>
                            <strong style={{ fontSize: "16px", whiteSpace: "nowrap", color:"var(--tg-theme-text-color)" }}>{user.name}</strong>
                            <div style={{ display: "flex", alignItems: "center", marginTop: "2px" }}>
                                <img src={Podarok} alt="Gift" style={{ width: "12px", height: "12px", verticalAlign: "middle" }} />
                                <p style={{ marginLeft: "5px", marginTop: "12px", fontSize: "12px", color: "var(--tg-theme-accent-text-color)", whiteSpace: "nowrap", verticalAlign: "middle" }}>{user.score} gifts</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", fontSize: "20px", color:"var(--tg-theme-hint-color)" }}>
                            {getMedal(index)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}   

export default Leaderboard;

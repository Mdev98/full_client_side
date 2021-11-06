import React from 'react';
import "./topbar.css";
import { NotificationsNone, ArrowDropDown } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Jardin-Maraicher</span>
                </div>
                <div className="topRight">
                    {/* <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div> */}
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7a47ed5-66aa-4785-bb23-dd0596a36921/d54u3wk-1167b006-d767-4dd3-9b3a-27fc622162df.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3YTQ3ZWQ1LTY2YWEtNDc4NS1iYjIzLWRkMDU5NmEzNjkyMVwvZDU0dTN3ay0xMTY3YjAwNi1kNzY3LTRkZDMtOWIzYS0yN2ZjNjIyMTYyZGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ipXIvU0MjfezKjLjS9Si826wZjGlrIyY0S3tQcO-xHc" alt="profile" className="topAvatar"/>
                    <ArrowDropDown className="loginDrop"/>
                </div>
            </div>
        </div>
    )
}

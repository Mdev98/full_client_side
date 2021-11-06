import React from 'react';
import './sidebar.css';
import SidebarList from './SidebarList';

import { MailOutline, DynamicFeed, ChatBubbleOutline } from "@mui/icons-material";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <SidebarList />
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline /> <span className="itemText">Mail</span>
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed /> <span className="itemText">Feedback</span>
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline /> <span className="itemText">Message</span>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    )
}
 
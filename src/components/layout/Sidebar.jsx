import React from 'react';
import { FaInbox, FaRegCalendar, FaRegCalendarAlt, FaChevronCircleDown } from 'react-icons/fa'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-generic">
        <li>
          <span>
            <FaInbox/>
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar/>
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt/>
          </span>
          <span>Next Week</span>
        </li>
      </ul>
      <div className="sidebar-middle">
        <span>
          <FaChevronCircleDown/>
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar-projects">

      </ul>
    </div>
  )
}
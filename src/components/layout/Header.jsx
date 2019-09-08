import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo"/>
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaTrashAlt/>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
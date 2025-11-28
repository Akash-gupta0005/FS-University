import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function DropdownAbout() {
    const [open, setOpen] = useState(false);

    // Toggle on click (useful for mobile)
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(prev => !prev);
    }

    return (
        <li
            className={`nav-item dropdown${open ? ' show' : ''}`}
            onMouseEnter={() => setOpen(true)}
            onMouseOver={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
        >
            <Link
                className="nav-link active dropdown-toggle"
                to="#"
                role="button"
                aria-expanded={open}
                onClick={handleClick}
            >
                About
            </Link>
            <ul className={`dropdown-menu${open ? ' show' : ''} bg-light`}>
                <li><Link className="dropdown-item" to="/aboutFS">About FS</Link></li>
                <li><Link className="dropdown-item" to="/aboutDev">About Developer</Link></li>
            </ul>
        </li>
    )
}
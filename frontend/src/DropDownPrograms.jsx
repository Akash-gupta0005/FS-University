import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function DropdownPrograms() {
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
                Program
            </Link>
            <ul className={`dropdown-menu${open ? ' show' : ''} bg-light`}>
                <li><Link className="dropdown-item" to="#">B.Tech</Link></li>
                <li><Link className="dropdown-item" to="#">M.Tech</Link></li>
                <li><Link className="dropdown-item" to="#">BCA</Link></li>
                <li><Link className="dropdown-item" to="#">MCA</Link></li>
                <li><Link className="dropdown-item" to="#">BBA</Link></li>
                <li><Link className="dropdown-item" to="#">MBA</Link></li>
            </ul>
        </li>
    )
}
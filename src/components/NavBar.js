"use client"

import Link  from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-logo">
          <Link href="/">
            <img src="assets/logo.png" alt="Parks Walks logo" />
          </Link>
        </div>

        <Link href="/" className="nav-title-link">
          <span className="nav-name">Parks Walks</span>
        </Link>

        <div className="nav-actions">
          <Link href="/contact" className="nav-login">
            Login
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link href="/" end="true">Home</Link>
            </li>

            <li>
              <Link href="/#service-grid">Services</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
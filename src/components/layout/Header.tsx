"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation, siteConfig } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="header">
      <div className="header-desktop">
        <div className="header-inner">
          <Link href="/" className="header-logo">
            <img src="https://coiffure.vamtam.com/wp-content/uploads/2023/01/logo.svg" alt="Coiffure" height={33} />
          </Link>

          <nav className="header-nav">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="header-nav-item"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={item.href} className="header-nav-link">
                  {item.label}
                  {item.children && (
                    <svg className="header-nav-chevron" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                    </svg>
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="header-dropdown">
                    <div className="header-dropdown-menu">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="header-dropdown-item">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
              <a href={`tel:${siteConfig.phoneHref}`} className="header-phone">
                {siteConfig.phone}
              </a>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <Link href="/" className="header-logo">
          <img src="https://coiffure.vamtam.com/wp-content/uploads/2023/01/logo.svg" alt="Coiffure" height={30} />
        </Link>
        <div className="header-mobile-actions">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="header-mobile-toggle" aria-label="Toggle menu">
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 1000 1000" fill="currentColor">
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 1000 1000" fill="currentColor">
                <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="header-mobile-menu">
          <nav className="header-mobile-nav">
            {navigation.map((item) => (
              <div key={item.label} className="header-mobile-item">
                <button onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)} className="header-mobile-btn">
                  {item.label}
                  {item.children && (
                    <svg className={`header-nav-chevron ${openDropdown === item.label ? "rotate-180" : ""}`} viewBox="0 0 448 512" fill="currentColor">
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                    </svg>
                  )}
                </button>
                {item.children && openDropdown === item.label && (
                  <div className="header-mobile-sub">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)} className="header-mobile-sub-link">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="header-mobile-footer">
              <a href={`tel:${siteConfig.phoneHref}`} className="header-phone">{siteConfig.phone}</a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary">Contact Us</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

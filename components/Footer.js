import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className="main-footer-about">
        <div className="footer-container">
          <div className="main-footer-top">
            <Link href={"/"} className='main-footer-logo'>
              <Link href="#home" className="logo">
                <i className='bx bxs-movie'></i>Sanamio
              </Link>
            </Link>
            <div className="main-footer-joingroup">
              <div className="anw-group">
                <div className="zrg-list">
                  <div className="joingroup-item"><Link href={"/"} className='zr-soicial-button dc-btn'><i className='fab fa-discord'></i></Link></div>
                  <div className="joingroup-item"><Link href={"/"} className='zr-soicial-button tl-btn'><i className='fab fa-telegram-plane'></i></Link></div>
                  <div className="joingroup-item"><Link href={"/"} className='zr-soicial-button ig-btn'><i className='fab fa-reddit-alien'></i></Link></div>
                  <div className="joingroup-item"><Link href={"/"} className='zr-soicial-button tw-btn'><i className='fab fa-twitter'></i></Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-atoz">
            <div className="footer-block">
              <span className='ftaz'>A-Z LIST</span>
              <span className="size-s">Searching anime order by alphabet name A to Z.</span>
            </div>
            <ul className="atoz-list">
              <li><Link href="/az-list">All</Link></li>
              <li><Link href="/az-list/other">#</Link></li>
              <li><Link href="/az-list/0-9">0-9</Link></li>

              <li><Link href="/az-list/A">A</Link>
              </li>

              <li><Link href="/az-list/B">B</Link>
              </li>

              <li><Link href="/az-list/C">C</Link>
              </li>

              <li><Link href="/az-list/D">D</Link>
              </li>

              <li><Link href="/az-list/E">E</Link>
              </li>

              <li><Link href="/az-list/F">F</Link>
              </li>

              <li><Link href="/az-list/G">G</Link>
              </li>

              <li><Link href="/az-list/H">H</Link>
              </li>

              <li><Link href="/az-list/I">I</Link>
              </li>

              <li><Link href="/az-list/J">J</Link>
              </li>

              <li><Link href="/az-list/K">K</Link>
              </li>

              <li><Link href="/az-list/L">L</Link>
              </li>

              <li><Link href="/az-list/M">M</Link>
              </li>

              <li><Link href="/az-list/N">N</Link>
              </li>

              <li><Link href="/az-list/O">O</Link>
              </li>

              <li><Link href="/az-list/P">P</Link>
              </li>

              <li><Link href="/az-list/Q">Q</Link>
              </li>

              <li><Link href="/az-list/R">R</Link>
              </li>

              <li><Link href="/az-list/S">S</Link>
              </li>

              <li><Link href="/az-list/T">T</Link>
              </li>

              <li><Link href="/az-list/U">U</Link>
              </li>

              <li><Link href="/az-list/V">V</Link>
              </li>

              <li><Link href="/az-list/W">W</Link>
              </li>

              <li><Link href="/az-list/X">X</Link>
              </li>

              <li><Link href="/az-list/Y">Y</Link>
              </li>

              <li><Link href="/az-list/Z">Z</Link>
              </li>
            </ul>
          </div>
          <div className="main-footer-links">
            <ul className="ulclear">
              <li><Link href={"/terms"}>Terms of service</Link></li>
              <li><Link href={"/"}>DMCA</Link></li>
              <li><Link href={"/"}>Contact</Link></li>
              <li><Link href={"/"}>Trending</Link></li>
            </ul>
          </div>
        </div>
      </div>
          <div className="main-footer-text">
            
            AniWatch does not store any files on our server, we only linked to the media which is hosted on 3rd
            party
            services.

          </div>
          <p className="footer-copyright">© AniWatch.to. All rights reserved.</p>
    </div>
  )
}

export default Footer

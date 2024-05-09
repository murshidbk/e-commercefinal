import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className="footer p-10 bg-black text-base">
    <aside>
      {/* <img src={logo} alt="" /> */}
      <h1>SHOPPER</h1>
     
    </aside> 
    <nav>
      <h6 className="footer-title text-xl text-[#f54748]">Services</h6> 
      <a className="link link-hover text-white">Branding</a>
      <a className="link link-hover text-white">Design</a>
      <a className="link link-hover text-white">Marketing</a>
      <a className="link link-hover text-white">Advertisement</a>
    </nav> 
    <nav>
      <h6 className="footer-title text-xl text-[#f54748]">Company</h6> 
      <a className="link link-hover text-white">About us</a>
      <a className="link link-hover text-white">Contact</a>
      <a className="link link-hover text-white">Jobs</a>
      <a className="link link-hover text-white">Press kit</a>
    </nav> 
    <nav>
      <h6 className="footer-title text-xl text-[#f54748]">Legal</h6> 
      <a className="link link-hover text-white">Terms of use</a>
      <a className="link link-hover text-white">Privacy policy</a>
      <a className="link link-hover text-white">Cookie policy</a>
    </nav>
  </footer>
  )
}

export default Footer

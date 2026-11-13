"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
export default function Header(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="topline">A considered selection of frozen treats &amp; business opportunities</div><div className="navwrap">
 <Link className="brand" href="/"><span className="brand-mark">BC</span><span>BOMBAY<span className="brand-light"> CREAMERY</span><small>FROZEN DESSERTS &amp; MORE</small></span></Link>
 <button className="mobile-toggle" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 <nav className={open?"main-nav open":"main-nav"} aria-label="Main navigation">{nav.map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>)}</nav>
 <a className="nav-cta" href={`tel:${site.phone}`}><Phone size={15}/> Call Us</a></div></header>
}
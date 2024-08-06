'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation clearfix">
                <li className="current dropdown">
                    <Link href="Customized-Solutions">Customized Solutions</Link>
                        <ul style={{ display: `${isActive.key === 1 ? "block" : "none"}` }}>
                        <li><Link href="Cross-Docking">Cross-Docking</Link></li>
                        <li><Link href="First-And-Final-Mile">First and Final Mile</Link></li>
                        <li><Link href="Same-Day-Courier">Same-Day Courier</Link></li>
                        <li><Link href="Managed-Services">Managed Services</Link></li>
                        <li><Link href="White-Glove-Services">White Glove Services</Link></li>
                        <li><Link href="Expedited-Fright">Expedited Fright</Link></li>
                        </ul>
                <div className="dropdown-btn" onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div>
            </li>
                <li className="dropdown">
                    <Link href="Warehousing">Warehousing</Link>
                    <ul style={{ display: `${isActive.key === 2 ? "block" : "none"}` }}>
                    <li><Link href="Fulfillment-Services">Fulfillment Services</Link></li>
                    <li><Link href="Pallet-Rework">Pallet Rework</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>
            <li className="dropdown">
                <Link href="Logistics">Logistics</Link>
                <ul style={{ display: `${isActive.key === 3 ? "block" : "none"}` }}>
                <li><Link href="Consolidation">Consolidation</Link></li>
                <li><Link href="Cross-Border">Cross-Border</Link></li>
                <li><Link href="Customs-Brokerage">Customs Brokerage</Link></li>
                <li><Link href="Freight-Brokerage">Freight Brokerage</Link></li>
                <li><Link href="Cold-Chain-Logistics">Cold Chain Logistics</Link></li>
                <li><Link href="Reverse-Logistics">Reverse Logistics</Link></li>
                </ul>
    <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div>
                </li>
                <li className="dropdown">
                    <Link href="Company">Company</Link>
                    <ul style={{ display: `${isActive.key === 4 ? "block" : "none"}` }}>
                    <li><Link href="About-Us">About Us</Link></li>
                    <li><Link href="Sustainability">Sustainability</Link></li>
                    <li><Link href="Careers">Careers</Link></li>
                    </ul>
    <div className="dropdown-btn" onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div>
                </li>
                    <li><Link href="/">Contact</Link></li>
            </ul>


        </>
    )
}

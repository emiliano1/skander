import Link from "next/link"

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li className="current dropdown"><Link href="Customized-Solutions">Customized Solutions</Link>
          <ul>
            <li><Link href="Cross-Docking">Cross-Docking</Link></li>
            <li><Link href="First-and-Final-Mile">First and Final Mile</Link></li>
            <li><Link href="Same-Day-Courier">Same-Day Courier</Link></li>
            <li><Link href="Managed-Services">Managed Services</Link></li>
            <li><Link href="White-Glove-Services">White Glove Services</Link></li>
            <li><Link href="Expedited-Fright">Expedited Fright</Link></li>
          </ul>
        </li>
        <li className="dropdown"><Link href="Warehousing">Warehousing</Link>
          <ul>
          <li><Link href="Fulfillment-Services">Fulfillment Services</Link></li>
          <li><Link href="Pallet-Rework">Pallet Rework</Link></li>
          </ul>
        </li>
        <li className="dropdown"><Link href="Logistics">Logistics</Link>
          <ul>
            <li><Link href="Consolidation">Consolidation</Link></li>
            <li><Link href="Cross-Border">Cross-Border</Link></li>
            <li><Link href="Customs-Brokerage">Customs Brokerage</Link></li>
            <li><Link href="Freight-Brokerage">Freight Brokerage</Link></li>
            <li><Link href="Cold-Chain-Logistics">Cold Chain Logistics</Link></li>
            <li><Link href="Reverse-Logistics">Reverse Logistics</Link></li>
          </ul>
        </li>
        <li className="dropdown"><Link href="Company">Company</Link>
          <ul>
            <li><Link href="About-Us">About Us</Link></li>
            <li><Link href="Sustainability">Sustainability</Link></li>
            <li><Link href="Careers">Careers</Link></li>
          </ul>
        </li>
        <li><Link href="page-contact">Contact</Link></li>
      </ul>
    </>
  )
}

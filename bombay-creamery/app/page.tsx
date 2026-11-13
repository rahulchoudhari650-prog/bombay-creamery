import Link from "next/link";
import { ArrowRight, ArrowUpRight, Snowflake, CheckCircle2 } from "lucide-react";
import { businessModels, productCategories, site } from "@/lib/site";
import BusinessCard from "@/components/BusinessCard";
import EnquiryForm from "@/components/EnquiryForm";

const categoryLinks = ["/ice-cream-products", "/products", "/kulfi-and-cones", "/kulfi-and-cones", "/family-ice-cream-tubs", "/dairy-beverages", "/catering-and-bulk-supply"];
const categoryNotes = ["A range to explore", "Frozen treats on a stick", "Classic cups and cones", "Traditional frozen favourites", "For sharing and celebrations", "Refreshing dairy beverages", "For events and larger requirements"];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-shade" />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><Snowflake size={14}/> A WORLD OF FROZEN DELIGHTS</span>
          <h1>Discover the joy of exceptional <em>frozen desserts.</em></h1>
          <p>Explore delightful ice cream flavours, frozen desserts, dairy beverages and business opportunities with Bombay Creamery.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products">Explore the range <ArrowRight size={16}/></Link>
            <Link className="button button-glass" href="/business-opportunities">Business opportunities <ArrowUpRight size={16}/></Link>
          </div>
          <div className="hero-note"><span className="hero-note-line"/> A little delight in every moment</div>
        </div>
        <div className="hero-side-card">
          <span className="hero-card-kicker">DISCOVER MORE</span>
          <strong>Something for every occasion.</strong>
          <span>Ice cream · Frozen desserts · Dairy beverages</span>
          <Link href="/products">Explore categories <ArrowUpRight size={15}/></Link>
        </div>
      </div>
      <div className="hero-bottom"><span>01 / 03</span><span>SCROLL TO EXPLORE</span></div>
    </section>

    <section className="section welcome-section">
      <div className="section-inner intro-grid">
        <div className="image-panel"><span className="image-caption">A moment worth savouring</span></div>
        <div className="split-copy">
          <span className="eyebrow">WELCOME TO BOMBAY CREAMERY</span>
          <h2>Make room for a little <em>delight.</em></h2>
          <p>Explore a portfolio spanning premium ice cream, frozen desserts, kulfi, cones, family tubs and dairy beverages. Whether you are looking for a treat, planning an event or exploring a business enquiry, discover more with Bombay Creamery.</p>
          <Link className="arrow-link" href="/about">Discover Bombay Creamery <ArrowUpRight size={16}/></Link>
          <div className="welcome-points"><span><CheckCircle2 size={16}/> Product categories</span><span><CheckCircle2 size={16}/> Business enquiries</span></div>
        </div>
      </div>
    </section>

    <section className="section cream-section">
      <div className="section-inner">
        <div className="section-heading section-heading-row">
          <div><span className="eyebrow">EXPLORE THE RANGE</span><h2>Find your kind of <em>delight.</em></h2></div>
          <p>Browse our product categories and contact the team for current product names, pack sizes and pricing.</p>
        </div>
        <div className="category-grid">{productCategories.map((c,i)=><Link className="category-card" key={c} href={categoryLinks[i]}>
          <span className="category-number">0{i+1}</span><span className="category-symbol">{["✳","❄","◒","✺","◉","◌","✧"][i]}</span>
          <div><h3>{c}</h3><span className="category-note">{categoryNotes[i]}</span></div><span className="category-arrow"><ArrowUpRight size={18}/></span>
        </Link>)}</div>
        <div className="center category-footer"><Link className="button button-dark" href="/products">View all product categories <ArrowRight size={16}/></Link></div>
      </div>
    </section>

    <section className="section business-section">
      <div className="section-inner">
        <div className="section-heading section-heading-row">
          <div><span className="eyebrow">GROW WITH BOMBAY CREAMERY</span><h2>Explore business <em>opportunities.</em></h2></div>
          <p>Find the business model that aligns with your territory, infrastructure and plans. Review the stated requirements before enquiring.</p>
        </div>
        <div className="business-grid">{businessModels.map(m=><BusinessCard key={m.slug} model={m}/>)}</div>
        <p className="business-disclaimer">Investment and margin figures are indicative details supplied for this website brief, not guaranteed returns. Confirm all commercial terms in writing.</p>
      </div>
    </section>

    <section className="feature-strip"><div className="feature-inner"><div><span className="eyebrow">YOUR NEXT STEP</span><h2>Have a business plan in mind?</h2><p>Understand the application journey and prepare the required documents.</p></div><Link className="button button-primary" href="/application-process">View application process <ArrowRight size={16}/></Link></div></section>

    <section className="section faq-section"><div className="section-inner"><div className="section-heading center"><span className="eyebrow">A FEW QUICK ANSWERS</span><h2>Good to <em>know.</em></h2></div><div className="faq-list">{[["How can I apply for a dealership?","Review the dealership information and submit the business enquiry form. The team can share the application and agreement for next steps."],["What products are available?","Categories include premium ice cream, ice pops, cups and cones, kulfi, family tubs and sundaes, flavoured milk and catering."],["What documents are required?","Aadhaar, PAN, GST and FSSAI registrations, six months bank statement and site ownership or lease agreement are listed."]].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><p className="faq-more"><Link className="arrow-link" href="/faqs">Browse all frequently asked questions <ArrowUpRight size={16}/></Link></p></div></section>

    <section className="enquiry-wrap"><div className="enquiry-heading"><span className="eyebrow">LET’S CONNECT</span><h2>Start a conversation.</h2><p>Tell us a little about your plans. Our team can help guide your next steps.</p></div><EnquiryForm/></section>

    <section className="contact-ribbon"><div className="section-inner contact-ribbon-inner"><div><span className="eyebrow">NEED TO REACH US?</span><h2>We’d be glad to hear from you.</h2></div><div className="contact-ribbon-links"><a href={`tel:${site.phone}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><Link href="/contact">Contact details <ArrowUpRight size={15}/></Link></div></div></section>
  </>;
}

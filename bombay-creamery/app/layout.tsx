import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"Bombay Creamery | Ice Cream, Frozen Desserts & Business Enquiries",template:"%s | Bombay Creamery"},description:"Explore Bombay Creamery ice cream, frozen desserts, dairy beverages and dealership, distributorship and super stockist business opportunities.",openGraph:{type:"website",siteName:site.name,title:"Bombay Creamery",description:"Ice cream, frozen desserts, dairy beverages and business opportunities."},twitter:{card:"summary_large_image"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/>{process.env.NEXT_PUBLIC_GA_ID&&<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}/>}{process.env.NEXT_PUBLIC_GA_ID&&<script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}}/>}</body></html>}

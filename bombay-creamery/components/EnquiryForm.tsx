"use client";
import { useState } from "react";
import { site } from "@/lib/site";
type Props={defaultModel?:string};
export default function EnquiryForm({defaultModel=""}:Props){
 const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
 const [error,setError]=useState("");
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault(); setError(""); const form=e.currentTarget; const data=new FormData(form);
  const mobile=String(data.get("mobile")||"").replace(/\D/g,"");
  if(!/^[6-9]\d{9}$/.test(mobile)){setError("Enter a valid 10-digit Indian mobile number beginning with 6, 7, 8 or 9.");return;}
  const email=String(data.get("email")||"");
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setError("Enter a valid email address.");return;}
  data.set("mobile",mobile); data.set("source_url",window.location.href);
  setStatus("sending");
  try{const res=await fetch(site.formEndpoint,{method:"POST",body:data,headers:{Accept:"application/json"}});
   if(!res.ok) throw new Error("Submission could not be confirmed. Please try again.");
   setStatus("success");form.reset();
  }catch(err){setStatus("error");setError(err instanceof Error?err.message:"Something went wrong. Please try again.");}
 }
 if(status==="success") return <div className="form-success" role="status"><h3>Thank you for your enquiry.</h3><p>Your details have been submitted successfully. The team can follow up using the contact information provided.</p><button className="text-button" onClick={()=>setStatus("idle")}>Submit another enquiry</button></div>;
 return <form className="enquiry-form" onSubmit={submit}>
 <div className="form-intro"><span className="eyebrow">BUSINESS ENQUIRY</span><h2>Let’s discuss your plans.</h2><p>Share a few details and the team can guide you on the next steps.</p></div>
 <div className="form-grid">
 <label>Full name *<input name="name" autoComplete="name" required placeholder="Your full name"/></label>
 <label>Mobile number *<input name="mobile" inputMode="numeric" autoComplete="tel" required maxLength={10} placeholder="10-digit mobile number"/></label>
 <label>Email address *<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label>
 <label>City *<input name="city" autoComplete="address-level2" required placeholder="City"/></label>
 <label>State *<input name="state" autoComplete="address-level1" required placeholder="State"/></label>
 <label>Business model *<select name="business_model" required defaultValue={defaultModel}><option value="" disabled>Select a model</option><option>Dealership</option><option>Distributorship</option><option>Super Stockist</option></select></label>
 <label className="full">Investment capacity<input name="investment_capacity" placeholder="Your planned investment capacity"/></label>
 <label className="full">Message<textarea name="message" rows={4} placeholder="Tell us about your location, business experience or questions."/></label>
 </div>
 <label className="consent"><input type="checkbox" name="consent" value="yes" required/> I agree to be contacted regarding this enquiry and confirm the information provided is accurate.</label>
 <input type="text" name="_gotcha" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
 {error&&<p className="form-error" role="alert">{error}</p>}
 {status==="error"&&<p className="form-error" role="alert">Submission failed. Please try again or contact us by phone or email.</p>}
 <button className="button button-primary submit-button" disabled={status==="sending"}>{status==="sending"?"Submitting…":"Submit Business Enquiry"}</button>
 <p className="form-note">Your enquiry is sent securely through Formspree. Do not include sensitive financial or identity information in this form.</p>
 </form>
}
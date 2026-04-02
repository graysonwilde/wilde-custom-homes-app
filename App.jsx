import React from 'react';

export default function App() {
  return (
    <div style={{minHeight:'100vh',background:'#f8fafc',padding:24,fontFamily:'Arial, Helvetica, sans-serif',color:'#0f172a'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <div style={{background:'#fff',border:'1px solid #e2e8f0',borderRadius:24,padding:24,boxShadow:'0 1px 3px rgba(0,0,0,.08)'}}>
          <h1 style={{marginTop:0}}>Wilde Custom Homes Web App</h1>
          <p>Your Vercel build is working now if you can see this page.</p>
          <p>This is a clean starter page so we can get the website live first.</p>

          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:24}}>
            <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:18,padding:18}}>
              <h3 style={{marginTop:0}}>Selections</h3>
              <p>Custom sections, rooms, and line items will go here.</p>
            </div>
            <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:18,padding:18}}>
              <h3 style={{marginTop:0}}>Schedule</h3>
              <p>Monthly calendar and master schedule will go here.</p>
            </div>
            <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:18,padding:18}}>
              <h3 style={{marginTop:0}}>Vendors</h3>
              <p>Vendor directory and contact details will go here.</p>
            </div>
          </div>

          <div style={{marginTop:24,padding:18,background:'#eff6ff',border:'1px solid #bfdbfe',borderRadius:18}}>
            <strong>Good news:</strong> once this page shows up on Vercel, your GitHub and Vercel connection is working.
          </div>
        </div>
      </div>
    </div>
  );
}

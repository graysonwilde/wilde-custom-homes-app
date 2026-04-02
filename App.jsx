import React from 'react';

export default function App() {
  return (
    <div style={{minHeight:'100vh',background:'#f8fafc',padding:24,fontFamily:'Arial, Helvetica, sans-serif',color:'#0f172a'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <div style={{background:'#fff',border:'1px solid #e2e8f0',borderRadius:24,padding:24,boxShadow:'0 1px 3px rgba(0,0,0,.08)'}}>
          <h1 style={{marginTop:0}}>Wilde Custom Homes Web App</h1>
          <p>This is the fixed starter build for Vercel.</p>
          <p>The earlier build failed because it included canvas-only imports that do not exist in your GitHub/Vercel project.</p>
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
            <strong>Good news:</strong> if this page deploys, your Vercel/GitHub pipeline is working. Then we can build the real shared office app on top of it.
          </div>
        </div>
      </div>
    </div>
  );
}

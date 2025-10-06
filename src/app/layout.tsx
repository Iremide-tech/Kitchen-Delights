
export const metadata = {
  title: "Kitchen Delights Portfolio",
  description: "Showcasing beautiful kitchen products in a playful, girly style.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{
        border: '8px solid var(--accent-pink)',
        borderRadius: '2rem',
        boxShadow: '0 0 40px 0 var(--accent-gold)',
        position: 'relative',
        minHeight: '100vh',
        overflow: 'auto',
      }}>
        {/* Decorative playful dots */}
        <div className="decorative" style={{ top: '2rem', left: '2rem' }} />
        <div className="decorative" style={{ top: '80%', left: '90%' }} />
        <div className="decorative" style={{ top: '50%', left: '10%' }} />
        {/* Girly heart accent */}
        <div style={{
          position: 'fixed',
          top: '1.5rem',
          right: '2rem',
          zIndex: 1,
        }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 35s-13-8.35-13-17.5S13.5 5 20 12.5 33 5 33 17.5 20 35 20 35z" fill="var(--accent-pink)" stroke="var(--accent-rose-gold)" strokeWidth="2" />
          </svg>
        </div>
        {/* Gold sparkle effect */}
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
            <circle cx="10" cy="10" r="4" fill="var(--accent-gold)" opacity="0.7" />
            <circle cx="30" cy="5" r="2" fill="var(--accent-gold)" opacity="0.5" />
            <circle cx="50" cy="15" r="3" fill="var(--accent-gold)" opacity="0.6" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}

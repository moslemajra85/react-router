import React from 'react'

const NotFound = () => {
return (
    <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ece9ff 0%, #f8f8ff 100%)',
        color: '#333'
    }}>
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 24 }}>
            <circle cx="12" cy="12" r="10" fill="#f3f4fa"/>
            <path d="M9 9h.01M15 9h.01M8 15c1.333-1 4.667-1 6 0" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="#7c3aed" strokeWidth="2"/>
        </svg>
        <h1 style={{ fontSize: 48, margin: 0, fontWeight: 700 }}>404</h1>
        <h2 style={{ fontSize: 24, margin: '16px 0 8px 0', fontWeight: 500 }}>Page Not Found</h2>
        <p style={{ fontSize: 16, color: '#666', marginBottom: 32 }}>
            Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a href="/" style={{
            padding: '10px 24px',
            background: '#7c3aed',
            color: '#fff',
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 500,
            boxShadow: '0 2px 8px rgba(124,58,237,0.08)'
        }}>
            Go Home
        </a>
    </div>
)
}

export default NotFound
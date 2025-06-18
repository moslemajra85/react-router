import React from 'react'

const Contact = () => {
    return (
        <div style={{
            minHeight: '80vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Segoe UI, Roboto, Arial, sans-serif'
        }}>
            <div style={{
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
                padding: '2.5rem 3rem',
                maxWidth: '500px',
                width: '100%'
            }}>
                <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="28" stroke="#3b3b98" strokeWidth="3" fill="#f5f7fa"/>
                        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="32" fill="#3b3b98" fontWeight="bold">∑</text>
                    </svg>
                    <h1 style={{margin: '1rem 0 0.5rem', color: '#3b3b98', fontWeight: 700, fontSize: '2rem'}}>Contact Us</h1>
                    <p style={{color: '#222f3e', fontSize: '1.1rem'}}>Mathematics Research Institute</p>
                </div>
                <div style={{marginBottom: '1.5rem', color: '#222f3e'}}>
                    <p>
                        <strong>Address:</strong><br/>
                        123 Euler Avenue,<br/>
                        Science City, 45678<br/>
                        Country
                    </p>
                    <p>
                        <strong>Email:</strong> <a href="mailto:info@mathinstitute.org" style={{color: '#3b3b98'}}>info@mathinstitute.org</a><br/>
                        <strong>Phone:</strong> <a href="tel:+1234567890" style={{color: '#3b3b98'}}>+1 (234) 567-890</a>
                    </p>
                </div>
                <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        style={{
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #c3cfe2',
                            fontSize: '1rem'
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        style={{
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #c3cfe2',
                            fontSize: '1rem'
                        }}
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        style={{
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #c3cfe2',
                            fontSize: '1rem',
                            resize: 'vertical'
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            background: 'linear-gradient(90deg, #3b3b98 0%, #00b894 100%)',
                            color: '#fff',
                            padding: '0.75rem',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }}
                    >
                        Send Message
                    </button>
                </form>
                <div style={{marginTop: '2rem', textAlign: 'center', color: '#636e72', fontSize: '0.95rem'}}>
                    <em>
                        "Mathematics is the language with which God has written the universe." – Galileo Galilei
                    </em>
                </div>
            </div>
        </div>
    );
}

export default Contact
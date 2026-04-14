import React, { useState } from 'react';

const Contact = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section className="contact" id="contact">
      <div className="contact-glow"></div>
      <div className="contact-container reveal-section revealed">
        <div className="contact-header">
          <div className="contact-tag">LET'S CONNECT</div>
          <h2 className="contact-title">
            LET'S BUILD <br/>
            <span className="contact-highlight">SOMETHING GREAT</span>
          </h2>
          <p className="contact-subtitle">
            I'm always open to discussing data projects, artificial intelligence opportunities, and innovative ideas.
          </p>
        </div>

        <div className="contact-grid">
          <a href="https://github.com/damanjeet-singh-7z" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">GH</div>
            <h3 className="contact-card-title">GitHub</h3>
            <p className="contact-card-text">Check out my repositories</p>
          </a>
          <a href="https://www.linkedin.com/in/damanjeet-singh-7z/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">IN</div>
            <h3 className="contact-card-title">LinkedIn</h3>
            <p className="contact-card-text">Connect professionally</p>
          </a>
          <a href="mailto:jeet9daman@gmail.com" className="contact-card">
            <div className="contact-icon">M</div>
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-text">Send me a message</p>
          </a>
        </div>

        <div className="contact-footer">
          <p className="footer-text">Built with Custom Styling.</p>
          <p className="footer-copy">© {new Date().getFullYear()} <span className="footer-name">Damanjeet Singh.</span></p>
        </div>
      </div>

      <div className={`chatbot-fab ${chatOpen ? 'fab-hidden' : ''}`} onClick={() => setChatOpen(true)}>
        <div className="fab-glow"></div>
        <div className="fab-pulse"></div>
        <div className="fab-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>

      {chatOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">AI</div>
              <div>
                <h4 className="chat-header-title">Virtual Assistant</h4>
                <div className="chat-header-status">
                  <div className="status-dot"></div> Online
                </div>
              </div>
            </div>
            <button className="chat-close" onClick={() => setChatOpen(false)}>×</button>
          </div>
          <div className="chat-messages">
            <div className="chat-msg assistant">
              <div className="msg-bubble">
                Hello! I'm the virtual assistant here. How can I help you regarding my builder's portfolio?
              </div>
            </div>
          </div>
          <div className="chat-quick-actions">
            <button className="quick-action-btn">View Resume</button>
            <button className="quick-action-btn">Contact Details</button>
          </div>
          <div className="chat-input-area">
            <input type="text" className="chat-input" placeholder="Type your message..." />
            <button className="chat-send">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;

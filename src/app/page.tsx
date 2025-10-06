"use client";
'use client'
import { useState } from "react";
import Modal from "./Modal";
import { products } from "./products";
import FadeIn from "./fadeIn";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalName, setModalName] = useState("");

  const handleImageClick = (image: string, name: string) => {
    setModalImage(image);
    setModalName(name);
    setModalOpen(true);
  };

  return (
    <FadeIn duration={70}>
    <main className="container">
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--foreground)' }}>
        Welcome to Iretioluwa&apos;s Kitchen Delights!
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--foreground)', marginBottom: '2rem' }}>
        Discover our playful, girly, lighthearted and affordable collection of kitchen products. We believe every kitchen should sparkle with personality and joy!
      </p>

      <section>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--foreground)' }}>Featured Products</h2>
        <FadeIn duration={100}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2rem',
        }}>
          {products.map((product) => (
            <div key={product.name} style={{
              background: 'var(--accent-pink)',
              borderRadius: '1rem',
              boxShadow: '0 2px 12px 0 var(--accent-rose-gold)',
              padding: '1rem',
              textAlign: 'center',
              position: 'relative',
              minWidth: 0,
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '56px', height: '56px', objectFit: 'contain', marginBottom: '0.8rem', borderRadius: '50%', boxShadow: '0 0 0 3px var(--accent-gold)', cursor: 'pointer', maxWidth: '100%' }}
                onClick={() => handleImageClick(product.image, product.name)}
                title="Click to enlarge"
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.5rem' }}>{product.name}</h3>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem' }}>{product.description}</p>
            </div>
          ))}
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2349013306628" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              marginTop: '1.5rem',
              background: 'var(--accent-rose-gold)',
              color: '#fff',
              fontWeight: 700,
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.75rem',
              fontSize: '1rem',
              textAlign: 'center',
              textDecoration: 'none',
              boxShadow: '0 2px 8px 0 var(--accent-gold)',
              transition: 'background 0.2s',
            }}
          >
            Message us on WhatsApp
          </a>
        </div>
        </FadeIn>
      </section>
      <hr style={{ border: 'none', borderTop: '2px dashed var(--accent-rose-gold)', margin: '3rem 0 2rem 0' }} />
      <section>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--foreground)', textAlign: 'center' }}>Contact Us</h2>
        <div style={{
          background: 'var(--accent-pink)',
          borderRadius: '1rem',
          boxShadow: '0 2px 12px 0 var(--accent-rose-gold)',
          padding: '1.2rem',
          maxWidth: '95vw',
          margin: '0 auto 2rem',
        }}>
          <p style={{ color: 'var(--foreground)', marginBottom: '1rem', fontSize: '1.1rem', textAlign: 'center' }}>
            Have a question or want a particuler product? Fill out the form below and we&apos;ll get back to you!
          </p>
          <form
            action="https://formspree.io/f/xovklpzn"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: '0.6rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--accent-rose-gold)',
                fontSize: '1rem',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                padding: '0.6rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--accent-rose-gold)',
                fontSize: '1rem',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              style={{
                padding: '0.6rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--accent-rose-gold)',
                fontSize: '1rem',
                resize: 'vertical',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--accent-gold)',
                color: '#fff',
                fontWeight: 700,
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.6rem',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px 0 var(--accent-rose-gold)',
                transition: 'background 0.2s',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} image={modalImage} name={modalName} />
    </main>
    </FadeIn>
  );
}

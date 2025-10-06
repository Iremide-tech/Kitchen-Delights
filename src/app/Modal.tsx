import React from "react";

export default function Modal({ open, onClose, image, name }: {
  open: boolean;
  onClose: () => void;
  image: string;
  name: string;
}) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }} onClick={onClose}>
      <div style={{
        background: "#fff",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 2px 24px 0 var(--accent-pink)",
        position: "relative",
        maxWidth: "90vw",
        maxHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }} onClick={e => e.stopPropagation()}>
        <img src={image} alt={name} style={{ maxWidth: "80vw", maxHeight: "70vh", borderRadius: "1rem" }} />
        <button onClick={onClose} style={{ marginTop: "1rem", background: "var(--accent-rose-gold)", color: "#fff", border: "none", borderRadius: "0.5rem", padding: "0.5rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Close</button>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from "react";


// Typage de l'état status
type Status = 'success' | 'error' | null;

const ContactForm = () => {
  // Initialisation de l'état "status" avec le type "Status"
  const [status, setStatus] = useState<Status>(null); // null = pas encore soumis, 'success' = succès, 'error' = erreur

  // Typage de l'événement e (en tant qu'événement de formulaire)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;  // Typage explicite du formulaire
    const data = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/fbd2cfe6413e21b59450c78f8001a3e5", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-5 text-white">Me contacter</h2>

      <div className="mb-3">
        <label htmlFor="name" className="text-white text-sm">Votre nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom"
          required
          className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="text-white text-sm">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="text-white text-sm">Votre message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message"
          required
          rows={5}
          className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        ></textarea>
      </div>

      {/* Anti-spam hidden field */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Nouveau message depuis ton portfolio" />

      <button
        type="submit"
        className="px-6 mb-4 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
      >
        Envoyer un message
      </button>

      {/* Message de feedback */}
      {status === "success" && (
        <p className="text-green-400 text-sm">✅ Message envoyé avec succès !</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">❌ Une erreur est survenue. Réessaie plus tard.</p>
      )}
    </form>
  );
};

export default ContactForm;

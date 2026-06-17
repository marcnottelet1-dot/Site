"use client";

import { useState } from "react";
import {
  FileText,
  Sparkles,
  MessageSquare,
  Clock,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Star,
  Leaf,
  Zap,
  Users,
  Send,
  ArrowRight,
  Wine,
  CalendarDays,
  Truck,
  Info,
  MapPin,
} from "lucide-react";

type Tab = "fiche" | "prebatch" | "message";

interface FormValues {
  nom: string;
  email: string;
  telephone: string;
  type: string;
  date: string;
  message: string;
}

// ─────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────
export default function ProApp() {
  const [activeTab, setActiveTab] = useState<Tab>("fiche");
  const [formData, setFormData] = useState<FormValues>({
    nom: "",
    email: "",
    telephone: "",
    type: "Pre Batch",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function goToOrder() {
    setFormData((f) => ({ ...f, type: "Commande Pre Batch" }));
    setActiveTab("message");
    setSent(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Arch'Ocktail] ${formData.type} — ${formData.nom}`
    );
    const body = encodeURIComponent(
      `Nom : ${formData.nom}\nEmail : ${formData.email}\nTéléphone : ${formData.telephone}\nType de demande : ${formData.type}\nDate souhaitée : ${formData.date || "Non précisée"}\n\nMessage :\n${formData.message}`
    );
    window.open(
      `mailto:contact@archocktail.com?subject=${subject}&body=${body}`
    );
    setSent(true);
  }

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "fiche", label: "Fiche Service", icon: FileText },
    { id: "prebatch", label: "Pre Batch", icon: Sparkles },
    { id: "message", label: "Message", icon: MessageSquare },
  ];

  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{ background: "#0a0807", color: "#f5f0e8" }}
    >
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-20 flex items-center justify-between px-5 pb-4"
        style={{
          paddingTop: "max(env(safe-area-inset-top), 20px)",
          background: "rgba(10,8,7,0.96)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              color: "#c9a13a",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: 2,
            }}
          >
            Arch&apos;Ocktail
          </p>
          <h1 className="font-display text-[1.35rem] font-semibold leading-none">
            Espace Pro
          </h1>
        </div>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(201,161,58,0.08)",
            border: "1px solid rgba(201,161,58,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="font-display font-bold"
            style={{ color: "#c9a13a", fontSize: 15 }}
          >
            A°
          </span>
        </div>
      </header>

      {/* ── Content ── */}
      <main
        className="flex-1 overflow-y-auto"
        style={{
          paddingBottom: "calc(env(safe-area-inset-bottom) + 76px)",
        }}
      >
        {activeTab === "fiche" && <FicheTab />}
        {activeTab === "prebatch" && <PreBatchTab onOrder={goToOrder} />}
        {activeTab === "message" && (
          <MessageTab
            formData={formData}
            setFormData={setFormData}
            sent={sent}
            setSent={setSent}
            onSubmit={handleSubmit}
          />
        )}
      </main>

      {/* ── Bottom Tab Bar ── */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: "env(safe-area-inset-bottom)",
          background: "rgba(10,8,7,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          zIndex: 30,
        }}
      >
        <div className="flex">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="flex-1 flex flex-col items-center gap-1 py-3 transition-colors duration-200"
              style={{ color: activeTab === id ? "#c9a13a" : "#42372e" }}
            >
              <Icon size={21} strokeWidth={activeTab === id ? 2 : 1.5} />
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.04em",
                  fontWeight: activeTab === id ? 600 : 400,
                }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

// ─────────────────────────────────────────────
// TAB 1 — FICHE TECHNIQUE SERVICE
// ─────────────────────────────────────────────
function FicheTab() {
  return (
    <div className="px-5 py-6 space-y-5">
      {/* Doc header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(201,161,58,0.12) 0%, rgba(201,161,58,0.03) 100%)",
          border: "1px solid rgba(201,161,58,0.16)",
          borderRadius: 18,
        }}
        className="p-5"
      >
        <Label>Document N°1</Label>
        <h2 className="font-display text-2xl font-semibold leading-snug mt-1 mb-2">
          Fiche Technique<br />Service
        </h2>
        <p style={{ color: "#7a6e64", fontSize: 13, lineHeight: 1.65 }}>
          Prestations de bartending et mixologie artisanale by Arch&apos;Ocktail.
        </p>
      </div>

      {/* Presentation */}
      <Section title="Prestation principale">
        <p style={{ color: "#c0b8ae", fontSize: 14, lineHeight: 1.75 }}>
          Arch&apos;Ocktail propose une offre complète de cocktails sur mesure pour
          vos événements privés, professionnels et institutionnels. Chaque
          service est pensé comme une expérience sensorielle singulière,
          alliant technique et esthétique.
        </p>
      </Section>

      {/* Included */}
      <Section title="Ce qui est inclus">
        <div className="space-y-2.5">
          {[
            "Déplacement & installation complète",
            "Matériel professionnel de bar",
            "Bartender expert et certifié",
            "Cocktails signatures Arch'Ocktail",
            "Alternatives sans alcool incluses",
            "Conseil carte & accord mets-cocktails",
            "Mise en scène et présentation soignée",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle
                size={15}
                style={{ color: "#c9a13a", marginTop: 2, flexShrink: 0 }}
                strokeWidth={2}
              />
              <span style={{ fontSize: 14, color: "#c0b8ae" }}>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Formats grid */}
      <Section title="Formats disponibles">
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { title: "Événementiel", sub: "Soirée, mariage, gala" },
            { title: "Atelier", sub: "Masterclass mixologie" },
            { title: "Bar à cocktails", sub: "Installation sur mesure" },
            { title: "Corporate", sub: "Teambuilding & séminaire" },
          ].map(({ title, sub }) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
              }}
              className="p-3.5"
            >
              <p
                className="font-display font-semibold"
                style={{ fontSize: 14, color: "#f5f0e8", marginBottom: 2 }}
              >
                {title}
              </p>
              <p style={{ fontSize: 11, color: "#5a4e44" }}>{sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Conditions */}
      <Section title="Conditions générales">
        <div className="space-y-3">
          {[
            { icon: Clock, text: "Réservation minimum 72h à l'avance" },
            { icon: Users, text: "À partir de 10 personnes" },
            { icon: MapPin, text: "Déplacement Île-de-France & régions" },
            { icon: CalendarDays, text: "Devis personnalisé selon événement" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: "rgba(201,161,58,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={15} style={{ color: "#c9a13a" }} strokeWidth={1.5} />
              </div>
              <span style={{ fontSize: 13, color: "#c0b8ae" }}>{text}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact strip */}
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: 14,
        }}
        className="p-4 space-y-2.5"
      >
        <div className="flex items-center gap-2.5">
          <Mail size={13} style={{ color: "#c9a13a" }} strokeWidth={1.5} />
          <span style={{ fontSize: 13, color: "#c0b8ae" }}>
            contact@archocktail.com
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone size={13} style={{ color: "#c9a13a" }} strokeWidth={1.5} />
          <span style={{ fontSize: 13, color: "#c0b8ae" }}>
            Coordonnées sur devis
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <Star size={13} style={{ color: "#c9a13a" }} strokeWidth={1.5} />
          <span style={{ fontSize: 13, color: "#c0b8ae" }}>
            archocktail.com
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// TAB 2 — PRE BATCH ARTISANAUX 40€
// ─────────────────────────────────────────────
function PreBatchTab({ onOrder }: { onOrder: () => void }) {
  return (
    <div className="px-5 py-6 space-y-5">
      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(150deg, rgba(201,161,58,0.14) 0%, rgba(10,8,7,0) 65%)",
          border: "1px solid rgba(201,161,58,0.2)",
          borderRadius: 20,
          position: "relative",
          overflow: "hidden",
        }}
        className="p-5"
      >
        <div
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,161,58,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Label>Document N°2</Label>
        <h2 className="font-display text-2xl font-semibold leading-snug mt-1 mb-0.5">
          Pre Batch Artisanaux
        </h2>
        <p
          className="font-display italic"
          style={{ color: "#c9a13a", fontSize: 14, marginBottom: 18 }}
        >
          by Arch&apos;Ocktail
        </p>
        <div className="flex items-end gap-1.5">
          <span
            className="font-display font-semibold"
            style={{ fontSize: 48, color: "#f5f0e8", lineHeight: 1 }}
          >
            40€
          </span>
          <span
            style={{ color: "#5a4e44", fontSize: 13, marginBottom: 7 }}
          >
            / batch
          </span>
        </div>
      </div>

      {/* What is */}
      <Section title="Qu'est-ce qu'un Pre Batch ?">
        <p style={{ color: "#c0b8ae", fontSize: 14, lineHeight: 1.75 }}>
          Un cocktail préparé en grande quantité à l&apos;avance, avec des
          ingrédients soigneusement dosés et assemblés par notre équipe.
          Résultat : qualité constante, service rapide, et la même signature
          artisanale à chaque verre.
        </p>
      </Section>

      {/* Composition */}
      <Section title="Composition du batch">
        <div className="space-y-2">
          {[
            { icon: Wine, label: "Volume", value: "1 litre — 6 à 8 portions" },
            {
              icon: Leaf,
              label: "Ingrédients",
              value: "Spiritueux sélectionnés, sirops maison, agrumes frais",
            },
            {
              icon: Zap,
              label: "Force",
              value: "Équilibrée — selon la recette choisie",
            },
            {
              icon: Clock,
              label: "Conservation",
              value: "5 jours au réfrigérateur",
            },
            {
              icon: Truck,
              label: "Livraison",
              value: "Retrait ou livraison selon zone",
            },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 10,
              }}
              className="flex items-start gap-3 px-3.5 py-3"
            >
              <Icon
                size={15}
                style={{ color: "#c9a13a", marginTop: 2, flexShrink: 0 }}
                strokeWidth={1.5}
              />
              <div>
                <p
                  style={{
                    fontSize: 10,
                    color: "#5a4e44",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: 13, color: "#c0b8ae" }}>{value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Flavors */}
      <Section title="Gammes disponibles">
        <div className="space-y-2">
          {[
            {
              name: "Signature Classique",
              desc: "Bourbon · agrumes · miel · notre bestseller",
            },
            {
              name: "Méditerranéen",
              desc: "Gin · fleur de sureau · citron · thym frais",
            },
            {
              name: "Épicé & Botanique",
              desc: "Mezcal · gingembre · piment · cumin fumé",
            },
            {
              name: "Virgin Batch",
              desc: "Sans alcool · shrub hibiscus · ginger beer",
            },
          ].map(({ name, desc }, i) => (
            <div
              key={name}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 12,
              }}
              className="flex items-center gap-3 p-3.5"
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 7,
                  background: "rgba(201,161,58,0.09)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#c9a13a",
                  fontWeight: 700,
                  fontSize: 13,
                  fontFamily: "var(--font-fraunces)",
                }}
              >
                {i + 1}
              </div>
              <div>
                <p
                  style={{ fontSize: 14, color: "#f5f0e8", fontWeight: 500 }}
                >
                  {name}
                </p>
                <p style={{ fontSize: 12, color: "#5a4e44", marginTop: 1 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How to order */}
      <Section title="Comment commander">
        <div className="space-y-3">
          {[
            "Choisissez votre gamme et quantité",
            "Envoyez votre demande via l'onglet Message",
            "Confirmation et devis sous 24h",
            "Règlement à la livraison ou en ligne",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(201,161,58,0.09)",
                  border: "1px solid rgba(201,161,58,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#c9a13a",
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                {i + 1}
              </div>
              <span style={{ fontSize: 13, color: "#c0b8ae" }}>{text}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Note */}
      <div
        style={{
          background: "rgba(201,161,58,0.05)",
          border: "1px solid rgba(201,161,58,0.1)",
          borderRadius: 12,
        }}
        className="flex gap-3 p-4"
      >
        <Info
          size={14}
          style={{ color: "#c9a13a", marginTop: 1, flexShrink: 0 }}
          strokeWidth={1.5}
        />
        <p style={{ fontSize: 12, color: "#7a6e64", lineHeight: 1.65 }}>
          Commande minimum 48h à l&apos;avance. Tarif dégressif à partir de 3
          batchs. Recette personnalisée possible sur demande (+10€).
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={onOrder}
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #c9a13a 0%, #a0792a 100%)",
          color: "#0a0807",
          borderRadius: 14,
          padding: "16px 20px",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "0.02em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          border: "none",
          cursor: "pointer",
        }}
      >
        Commander un Pre Batch
        <ArrowRight size={17} strokeWidth={2.5} />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// TAB 3 — MESSAGE / DEMANDE
// ─────────────────────────────────────────────
interface MessageTabProps {
  formData: FormValues;
  setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
  sent: boolean;
  setSent: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (e: React.FormEvent) => void;
}

function MessageTab({
  formData,
  setFormData,
  sent,
  setSent,
  onSubmit,
}: MessageTabProps) {
  function set(field: keyof FormValues) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => setFormData((f) => ({ ...f, [field]: e.target.value }));
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: "14px 16px",
    color: "#f5f0e8",
    fontSize: 14,
    outline: "none",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    WebkitAppearance: "none",
  };

  if (sent) {
    return (
      <div className="px-5 py-16 flex flex-col items-center text-center gap-5">
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: "rgba(201,161,58,0.09)",
            border: "1px solid rgba(201,161,58,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckCircle
            size={34}
            style={{ color: "#c9a13a" }}
            strokeWidth={1.5}
          />
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold mb-2">
            Message envoyé
          </h2>
          <p
            style={{
              color: "#7a6e64",
              fontSize: 14,
              lineHeight: 1.65,
              maxWidth: 270,
            }}
          >
            Nous reviendrons vers vous sous 24h. Merci pour votre confiance.
          </p>
        </div>
        <button
          onClick={() => setSent(false)}
          style={{
            marginTop: 8,
            padding: "11px 28px",
            border: "1px solid rgba(201,161,58,0.22)",
            borderRadius: 10,
            background: "transparent",
            color: "#c9a13a",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Nouveau message
        </button>
      </div>
    );
  }

  return (
    <div className="px-5 py-6 space-y-5">
      {/* Doc header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(201,161,58,0.08) 0%, rgba(201,161,58,0.02) 100%)",
          border: "1px solid rgba(201,161,58,0.12)",
          borderRadius: 18,
        }}
        className="p-5"
      >
        <Label>Document N°3</Label>
        <h2 className="font-display text-2xl font-semibold leading-snug mt-1 mb-2">
          Nous contacter
        </h2>
        <p style={{ color: "#7a6e64", fontSize: 13, lineHeight: 1.65 }}>
          Demande de devis, commande Pre Batch ou message — réponse sous 24h.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-3">
        <Field label="Votre nom">
          <input
            style={inputStyle}
            type="text"
            placeholder="Prénom Nom"
            value={formData.nom}
            onChange={set("nom")}
            required
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Email">
            <input
              style={inputStyle}
              type="email"
              placeholder="email@exemple.fr"
              value={formData.email}
              onChange={set("email")}
              required
            />
          </Field>
          <Field label="Téléphone">
            <input
              style={inputStyle}
              type="tel"
              placeholder="06 XX XX XX XX"
              value={formData.telephone}
              onChange={set("telephone")}
            />
          </Field>
        </div>

        <Field label="Type de demande">
          <select
            style={{ ...inputStyle, appearance: "none" as const }}
            value={formData.type}
            onChange={set("type")}
          >
            <option>Pre Batch</option>
            <option>Commande Pre Batch</option>
            <option>Événement & Bar à cocktails</option>
            <option>Atelier Mixologie</option>
            <option>Corporate & Séminaire</option>
            <option>Devis personnalisé</option>
            <option>Autre demande</option>
          </select>
        </Field>

        <Field label="Date souhaitée (optionnel)">
          <input
            style={{
              ...inputStyle,
              colorScheme: "dark",
            }}
            type="date"
            value={formData.date}
            onChange={set("date")}
          />
        </Field>

        <Field label="Votre message">
          <textarea
            style={{ ...inputStyle, minHeight: 112, resize: "none" }}
            placeholder="Décrivez votre demande, l'occasion, le nombre de personnes…"
            value={formData.message}
            onChange={set("message")}
            required
          />
        </Field>

        <button
          type="submit"
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #c9a13a 0%, #a0792a 100%)",
            color: "#0a0807",
            borderRadius: 14,
            padding: "16px 20px",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.02em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            border: "none",
            cursor: "pointer",
            marginTop: 4,
          }}
        >
          <Send size={16} strokeWidth={2.5} />
          Envoyer le message
        </button>
      </form>

      {/* Contact alternatives */}
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: 12,
        }}
        className="p-4 space-y-3"
      >
        <p
          style={{
            fontSize: 10,
            color: "#5a4e44",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Ou directement
        </p>
        <a
          href="mailto:contact@archocktail.com"
          className="flex items-center gap-2.5"
        >
          <Mail size={13} style={{ color: "#c9a13a" }} strokeWidth={1.5} />
          <span style={{ fontSize: 13, color: "#c0b8ae" }}>
            contact@archocktail.com
          </span>
        </a>
        <a
          href="https://archocktail.com"
          className="flex items-center gap-2.5"
        >
          <ChevronRight
            size={13}
            style={{ color: "#c9a13a" }}
            strokeWidth={2}
          />
          <span style={{ fontSize: 13, color: "#c0b8ae" }}>
            archocktail.com
          </span>
        </a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SHARED HELPERS
// ─────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 10,
        letterSpacing: "0.16em",
        color: "#c9a13a",
        fontWeight: 600,
        textTransform: "uppercase",
      }}
    >
      {children}
    </p>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p
        style={{
          fontSize: 10,
          letterSpacing: "0.14em",
          color: "#5a4e44",
          fontWeight: 600,
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 10,
          letterSpacing: "0.09em",
          color: "#5a4e44",
          fontWeight: 600,
          textTransform: "uppercase",
          marginBottom: 7,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

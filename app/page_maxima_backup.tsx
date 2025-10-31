"use client";

import {
  Eye,
  Star,
  Moon,
  Shield,
  Crystal,
  Compass,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: HeartHandshake,
    title: "Amarres de Amor y Endulzamientos Poderosos",
    description:
      "¿Sientes que la llama se apaga o que tu pareja se aleja? Te ofrezco la solución mística y efectiva. Con mis secretos ancestrales, atraeré a tu ser amado y restauraré la pasión y la fidelidad en tu vida. ¡Tu felicidad es mi misión divina!",
    image: "/images/amor-amarres.jpg",
    alt: "Amarres de amor y endulzamientos poderosos",
  },
  {
    icon: HeartCrack,
    title: "¿Tu Relación está en Crisis? ¡Hay Esperanza!",
    description:
      "Las discusiones, los celos y la falta de comunicación rompen el amor. No permitas que el dolor te consuma. Soy tu guía para romper ese ciclo de peleas y traer la armonía y el entendimiento a tu hogar. Una consulta revelará la verdad oculta.",
    image: "/images/crisis-pareja.jpg",
    alt: "Relación en crisis, terapia de pareja",
  },
  {
    icon: ShieldOff,
    title: "Bloqueos, Envidias y Mal de Ojo",
    description:
      "¿Sientes que nada te sale bien? ¿Tu camino está lleno de obstáculos inesperados? Libérate de esas energías pesadas y negativas que te impiden avanzar en el amor y el dinero. Realizo limpiezas energéticas profundas para que el éxito y la fortuna fluyan de nuevo.",
    image: "/images/mal-ojo.jpg",
    alt: "Protección contra mal de ojo y envidias",
  },
  {
    icon: Sparkles,
    title: "Han Intentado Dañarte: Rompe Todo Mal",
    description:
      "Si te han hecho un mal, un trabajo oscuro o una brujería, no esperes a que te destruya. Con mi poder y mis rituales, romperemos y devolveremos todo mal que te hayan enviado. Tu protección y bienestar son mi prioridad. ¡Despeja tu camino de cualquier maldición!",
    image: "/images/proteccion.jpg",
    alt: "Protección espiritual y rompe maldiciones",
  },
];

const serviceIcons = [
  { icon: BookHeart, label: "Tarot" },
  { icon: HeartHandshake, label: "Amarres" },
  { icon: MoonStar, label: "Hechizos" },
  { icon: ShieldCheck, label: "Limpiezas" },
];

export default function HomePage() {
  const handleWhatsAppClick = () => {
    window.open("https://w.app/maximalapitonisadelamor", "_blank");
  };

  return (
    <main className="relative min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-7xl font-headline font-bold mb-4 gradient-text">
            Máxima La Pitonisa del Amor
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            20 años creando destinos de amor
          </p>
        </header>

        {/* Services Icons Section */}
        <section className="text-center mb-12 animate-fade-in-up">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6">
            {serviceIcons.map((service, index) => (
              <div key={service.label} className="flex items-center gap-2">
                <service.icon className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">
                  {service.label}
                </span>
                {index < serviceIcons.length - 1 && (
                  <span className="text-primary ml-4 hidden md:inline">◆</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-lg text-accent font-medium">
            Tu destino sentimental comienza aquí.
          </p>
        </section>

        {/* WhatsApp CTA Button */}
        <section className="text-center mb-16 animate-fade-in-up">
          <button
            onClick={handleWhatsAppClick}
            className="whatsapp-btn text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Contactar por WhatsApp
          </button>
        </section>

        {/* Services Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="flex items-center gap-3 text-primary font-headline text-xl">
                  <service.icon className="w-6 h-6 flex-shrink-0" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed text-left">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-border pt-8 animate-fade-in-up">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Máxima La Pitonisa del Amor. Todos los
            derechos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
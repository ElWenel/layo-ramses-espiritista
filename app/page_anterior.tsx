"use client";

import { Eye, Star, Moon, Shield, Sparkles, Compass, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Eye,
    title: "Lectura de Cartas del Tarot",
    description:
      "Descubre los misterios de tu destino a través de las cartas sagradas. Con el poder ancestral del tarot, revelaré los secretos de tu pasado, presente y futuro. Cada carta cuenta una historia, cada símbolo guía tu camino hacia la verdad que buscas.",
    image: "/images/amor-amarres.jpg",
    alt: "Lectura de cartas del tarot",
  },
  {
    icon: Star,
    title: "Consulta Astrológica Personalizada",
    description:
      "Las estrellas han escrito tu destino desde el momento de tu nacimiento. Permíteme leer el mapa celestial de tu alma y revelarte los secretos que los astros guardan para ti. Tu carta astral es la llave para entender tu propósito en este universo.",
    image: "/images/crisis-pareja.jpg",
    alt: "Consulta astrológica personalizada",
  },
  {
    icon: Sparkles,
    title: "Limpieza Energética y Protección Espiritual",
    description:
      "Si sientes que energías negativas te rodean, que la mala suerte te persigue o que algo bloquea tu camino, es momento de purificar tu aura. Realizo limpiezas profundas que liberan tu espíritu y crean un escudo protector a tu alrededor.",
    image: "/images/mal-ojo.jpg",
    alt: "Limpieza energética y protección espiritual",
  },
  {
    icon: Moon,
    title: "Rituales Lunares y Trabajos Esotéricos",
    description:
      "Los ciclos de la luna rigen las energías del cosmos. Aprovecho el poder de cada fase lunar para realizar trabajos específicos: atraer abundancia en luna nueva, fortalecer relaciones en luna llena, liberar lo que no sirve en luna menguante.",
    image: "/images/proteccion.jpg",
    alt: "Rituales lunares y trabajos esotéricos",
  },
];

const serviceIcons = [
  { icon: Eye, label: "Tarot" },
  { icon: Star, label: "Astrología" },
  { icon: Moon, label: "Rituales" },
  { icon: Shield, label: "Protección" },
];

export default function HomePage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/layoramses", "_blank");
  };

  return (
    <main className="relative min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-7xl font-headline font-bold mb-4 gradient-text">
            Layo Ramses Espiritista
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Guía espiritual y lector de los astros
          </p>
        </header>

        {/* Services Icons Section */}
        <section className="text-center mb-12 animate-fade-in-up">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6">
            {serviceIcons.map((service, index) => (
              <div key={service.label} className="flex items-center gap-2">
                <service.icon className="w-6 h-6 text-primary zodiac-symbol" />
                <span className="text-foreground font-medium">
                  {service.label}
                </span>
                {index < serviceIcons.length - 1 && (
                  <span className="text-primary ml-4 hidden md:inline">✦</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-lg text-accent font-medium">
            Los misterios del cosmos revelan tu verdadero destino.
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
            Consulta Espiritual por WhatsApp
          </button>
        </section>

        {/* Services Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 esoteric-border"
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
                  <service.icon className="w-6 h-6 flex-shrink-0 zodiac-symbol" />
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

        {/* Mystical Quote Section */}
        <section className="text-center mb-16 animate-fade-in-up">
          <div className="max-w-4xl mx-auto p-8 rounded-lg esoteric-border">
            <blockquote className="text-xl md:text-2xl font-headline italic gradient-text mb-4">
              &quot;En el silencio de las estrellas se encuentran las respuestas
              que el alma busca. Cada constelación cuenta una historia, cada
              planeta susurra secretos del destino.&quot;
            </blockquote>
            <cite className="text-muted-foreground text-lg">— Layo Ramses</cite>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-border pt-8 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            © {new Date().getFullYear()} Layo Ramses Espiritista. Todos los
            derechos reservados.
          </p>
          <p className="text-sm text-accent">
            ✦ Los astros nunca mienten, solo hay que saber escucharlos ✦
          </p>
        </footer>
      </div>
    </main>
  );
}

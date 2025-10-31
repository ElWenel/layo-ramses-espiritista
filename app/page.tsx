"use client";

import React, { useState } from "react";
import {
  Eye,
  Star,
  Moon,
  Shield,
  Sparkles,
  Play,
  Quote,
  Camera,
  MessageCircle,
  Phone,
  MapPin,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Eye,
    title: "Lecturas de Cartas Tarot",
    description:
      "A través de las cartas del tarot, te revelo los mensajes del universo sobre tu camino. Cada carta cuenta una historia única que te ayudará a tomar las decisiones correctas y encontrar claridad en los momentos de confusión.",
    image: "/images/lectura-de-tarot.jpeg",
    alt: "Lecturas de cartas tarot",
  },
  {
    icon: Star,
    title: "¿Tu Relación está en Crisis? ¡Hay Esperanza!",
    description:
      "Las discusiones, los celos y la falta de comunicación rompen el amor. No permitas que el dolor te consuma. Soy tu guía para romper ese ciclo de peleas y traer la armonía y el entendimiento a tu hogar. Una consulta revelará la verdad oculta.",
    image: "/images/crisis-pareja.jpg",
    alt: "Consulta para crisis de pareja",
  },
  {
    icon: Sparkles,
    title: "Limpieza Energética y Protección",
    description:
      "Purifica tu aura y libera las energías negativas que bloquean tu camino hacia el éxito y la felicidad.",
    image: "/images/mal-ojo.jpg",
    alt: "Limpieza energética y protección espiritual",
  },
  {
    icon: Moon,
    title: "Sabiduría del Curandero de Cuevas",
    description:
      "Despierta la energía antigua que habita en las profundidades de la Tierra. A través de rituales de sanación, conexión con los elementos y el poder de las piedras, limpia tu espíritu, libera cargas y renueva tu destino bajo la guía de la cueva sagrada.",
    image: "/images/cuevas.jpg",
    alt: "Sabiduría del curandero de cuevas",
  },
];

const testimonials = [
  {
    name: "María Elena",
    text: "Layo Ramses cambió mi vida completamente. Sus predicciones fueron exactas y su guía espiritual me ayudó a encontrar mi camino.",
    rating: 5,
    service: "Tarot",
  },
  {
    name: "Carlos Montenegro",
    text: "Increíble precisión en la lectura astrológica. Todo lo que me dijo se cumplió al pie de la letra. Altamente recomendado.",
    rating: 5,
    service: "Astrología",
  },
  {
    name: "Ana Sofía",
    text: "La limpieza energética fue transformadora. Siento una paz y claridad mental que no tenía hace años.",
    rating: 5,
    service: "Limpieza Energética",
  },
];

const galleryImages = [
  {
    src: "/images/1.jpg",
    alt: "Layo Ramses - Trabajo espiritual",
    description: "Momento de consulta",
  },
  {
    src: "/images/2.jpg",
    alt: "Layo Ramses - Sesión esotérica",
    description: "Conexión espiritual",
  },
  {
    src: "/images/3.jpg",
    alt: "Layo Ramses - Rituales sagrados",
    description: "Ceremonias místicas",
  },
  {
    src: "/images/4.jpg",
    alt: "Layo Ramses - Sabiduría ancestral",
    description: "Tradiciones milenarias",
  },
  {
    src: "/images/5.jpg",
    alt: "Layo Ramses - Lectura de cartas",
    description: "Revelando el destino",
  },
  {
    src: "/images/6.jpg",
    alt: "Layo Ramses - Maestro espiritista",
    description: "Guía espiritual",
  },
];

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string>("");

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/layoramses", "_blank");
  };

  const handleVideoPlay = (videoId: string) => {
    setCurrentVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const getVideoSource = (videoId: string) => {
    switch (videoId) {
      case "contenido":
        return "/images/video_contenido.mp4";
      case "historia":
      default:
        return "/images/video.mp4";
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="hero-section-enhanced min-h-screen relative overflow-hidden">
        {/* Background with Layo's images */}
        <div className="hero-background">
          {/* Primera imagen - centro_layo.png a la derecha */}
          <div className="hero-image-container-right">
            <img
              src="/images/centro_layo.png"
              alt="Layo Ramses Espiritista"
              className="hero-main-image-right"
            />
            <div className="hero-image-fade-right"></div>
          </div>

          {/* Segunda imagen - layo.png */}
          <div className="hero-image-container-left">
            <img
              src="/images/layo.png"
              alt="Layo Ramses"
              className="hero-secondary-image"
            />
            <div className="hero-image-fade-left"></div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="hero-content-wrapper relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-content animate-fade-in-down">
              {/* Mystical elements */}
              <div className="mystical-ornament mb-6">
                <span className="text-accent text-2xl">✧</span>
                <span className="text-primary text-xl mx-4">◇</span>
                <span className="text-accent text-2xl">✧</span>
              </div>

              <h1 className="hero-title text-6xl md:text-8xl font-headline font-bold mb-4 gradient-text-enhanced">
                Layo Ramses
              </h1>

              <div className="hero-subtitle-container mb-6">
                <h2 className="text-3xl md:text-4xl text-primary mb-2 font-headline maestro-text">
                  Maestro Espiritista
                </h2>
                <div className="mystical-line">
                  <span className="text-accent">━━━</span>
                  <span className="text-primary mx-4">◇</span>
                  <span className="text-accent">━━━</span>
                </div>
              </div>

              <div className="hero-description mb-8">
                <p className="text-xl md:text-2xl text-foreground mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
                  ◆{" "}
                  <span className="text-primary font-bold">
                    Maestro de los Antiguos Misterios
                  </span>{" "}
                  ◆
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
                  Con más de{" "}
                  <span className="text-accent font-bold">
                    20 años de experiencia
                  </span>{" "}
                  guiando almas perdidas hacia su verdadero destino. Las cartas
                  Tarot, los astros y los rituales ancestrales revelan los
                  secretos que el universo guarda para ti.
                </p>
                <div className="hero-specialties grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto text-sm">
                  <div className="specialty-item">
                    <span className="text-primary">✦</span> Tarot
                  </div>
                  <div className="specialty-item">
                    <span className="text-accent">☾</span> Rituales Lunares
                  </div>
                  <div className="specialty-item">
                    <span className="text-primary">⚔</span> Protección
                  </div>
                  <div className="specialty-item">
                    <span className="text-accent">✧</span> Limpiezas
                  </div>
                </div>
              </div>

              <div className="hero-cta-section">
                <div className="urgency-message mb-6 p-4 rounded-lg bg-accent/10 border border-accent/30 max-w-2xl mx-auto">
                  <p className="text-accent font-bold text-lg mb-2">
                    ◆ ¡Consulta Disponible HOY! ◆
                  </p>
                  <p className="text-foreground text-sm">
                    No dejes que las dudas te consuman. El universo tiene
                    respuestas para ti.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button
                    onClick={handleWhatsAppClick}
                    className="whatsapp-btn-hero text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Consulta GRATIS por WhatsApp
                  </button>
                  <button
                    onClick={() => handleVideoPlay("contenido")}
                    className="cosmic-btn-hero text-primary border-2 border-primary font-bold py-4 px-6 rounded-full text-base inline-flex items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Play className="w-5 h-5" />
                    Presentación
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="trust-indicators flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">★★★★★</span>
                    <span>500+ Consultas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">◇</span>
                    <span>100% Confidencial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">♦</span>
                    <span>Atención en Perú</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating mystical elements */}
        <div className="floating-elements">
          <div className="floating-symbol floating-symbol-1">✧</div>
          <div className="floating-symbol floating-symbol-2">◇</div>
          <div className="floating-symbol floating-symbol-3">✦</div>
          <div className="floating-symbol floating-symbol-4">◆</div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 gradient-text">
              Conoce a Layo Ramses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un viaje espiritual que comenzó hace dos décadas, guiado por los
              antiguos misterios del cosmos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="mystical-quote p-6 rounded-lg esoteric-border">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <blockquote className="text-lg italic text-foreground mb-4">
                  "En el silencio de las estrellas se encuentran las respuestas
                  que el alma busca. Cada constelación cuenta una historia, cada
                  planeta susurra secretos del destino."
                </blockquote>
                <cite className="text-accent font-medium">— Layo Ramses</cite>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-headline text-primary">
                  Mi Misión Espiritual
                </h3>
                <p className="text-foreground leading-relaxed">
                  Durante más de 20 años, he dedicado mi vida a descifrar los
                  misterios del universo. Mi don natural, combinado con el
                  estudio profundo de las tradiciones esotéricas ancestrales, me
                  permite ser un puente entre tu alma y la sabiduría cósmica.
                </p>
                <p className="text-foreground leading-relaxed">
                  Cada consulta es un viaje sagrado hacia tu verdadero
                  propósito, donde las cartas del tarot egipcio y la posición de
                  los astros revelan los caminos que el destino ha trazado para
                  ti.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden esoteric-border">
                <img
                  src="/images/mision.jpg"
                  alt="Layo Ramses - Maestro Espiritista en su misión espiritual"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 gradient-text">
              Conoce Mi Trabajo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre cómo las artes místicas pueden transformar tu vida
            </p>
          </div>

          <div className="flex justify-center">
            <div
              className="video-card group cursor-pointer max-w-2xl w-full"
              onClick={() => handleVideoPlay("contenido")}
            >
              <div className="aspect-video relative rounded-lg overflow-hidden esoteric-border">
                <img
                  src="/images/mi_trabajo.jpg"
                  alt="Mi Trabajo Espiritual"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="play-button bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-4 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-headline text-xl mb-2">
                    Mi Trabajo
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 gradient-text">
              Galería Espiritual
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Momentos capturados en el arte de la consulta espiritual
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item group relative aspect-square rounded-lg overflow-hidden esoteric-border cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 gradient-text">
              Servicios Espirituales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada consulta es un viaje único hacia el descubrimiento de tu
              verdadero destino
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 esoteric-border"
              >
                <CardHeader className="pb-4">
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
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
                  <p className="text-foreground leading-relaxed text-left mb-6">
                    {service.description}
                  </p>
                  <div className="flex justify-center">
                    <button className="cosmic-btn-small text-primary border border-primary px-6 py-2 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      Reservar
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 gradient-text">
              Testimonios Auténticos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Las palabras de quienes han encontrado su camino a través de la
              sabiduría cósmica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card esoteric-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <blockquote className="text-foreground italic mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <cite className="text-primary font-medium not-italic">
                      {testimonial.name}
                    </cite>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.service}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 gradient-text">
              Inicia Tu Consulta
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              El cosmos espera para revelarte sus secretos. Da el primer paso
              hacia tu transformación espiritual
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="contact-method p-6 rounded-lg esoteric-border text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-headline text-lg mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">
                Respuesta inmediata
              </p>
            </div>
            <div className="contact-method p-6 rounded-lg esoteric-border text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-headline text-lg mb-2">Llamada</h3>
              <p className="text-muted-foreground text-sm">Consulta directa</p>
            </div>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="whatsapp-btn-large text-white font-bold py-6 px-12 rounded-full text-xl inline-flex items-center gap-4 hover:scale-105 transition-all duration-300 mx-auto"
          >
            <MessageCircle className="w-8 h-8" />
            Comenzar Consulta Espiritual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-headline gradient-text mb-4">
              Layo Ramses Espiritista
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Maestro en las artes místicas, guía espiritual dedicado a revelar
              los misterios del cosmos y acompañarte en tu viaje hacia el
              autodescubrimiento.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">
              © {new Date().getFullYear()} Layo Ramses Espiritista. Todos los
              derechos reservados.
            </p>
            <p className="text-sm text-accent">
              ✦ Los astros nunca mienten, solo hay que saber escucharlos ✦
            </p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4 bg-card rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              controls
              autoPlay
              muted={currentVideoId === "contenido"}
              className="w-full h-auto"
              style={{ maxHeight: "80vh" }}
            >
              <source src={getVideoSource(currentVideoId)} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      )}
    </main>
  );
}

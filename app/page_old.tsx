"use client";"use client";



import {import {

  Eye,  BookHeart,

  Zap,  HeartHandshake,

  Moon,  MoonStar,

  Shield,  ShieldCheck,

  Star,  HeartCrack,

  Crystal,  ShieldOff,

  Compass,  Sparkles,

} from "lucide-react";} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



const services = [const services = [

  {  {

    icon: Eye,    icon: HeartHandshake,

    title: "Lectura de Cartas del Tarot Egipcio",    title: "Amarres de Amor y Endulzamientos Poderosos",

    description:    description:

      "Descubre los misterios de tu destino a través de las cartas sagradas. Con el poder ancestral del tarot egipcio, revelaré los secretos de tu pasado, presente y futuro. Cada carta cuenta una historia, cada símbolo guía tu camino hacia la verdad que buscas.",      "¿Sientes que la llama se apaga o que tu pareja se aleja? Te ofrezco la solución mística y efectiva. Con mis secretos ancestrales, atraeré a tu ser amado y restauraré la pasión y la fidelidad en tu vida. ¡Tu felicidad es mi misión divina!",

    image: "/images/amor-amarres.jpg",    image: "/images/amor-amarres.jpg",

    alt: "Lectura de cartas del tarot egipcio",    alt: "Amarres de amor y endulzamientos poderosos",

  },  },

  {  {

    icon: Star,    icon: HeartCrack,

    title: "Consulta Astrológica Personalizada",    title: "¿Tu Relación está en Crisis? ¡Hay Esperanza!",

    description:    description:

      "Las estrellas han escrito tu destino desde el momento de tu nacimiento. Permíteme leer el mapa celestial de tu alma y revelarte los secretos que los astros guardan para ti. Tu carta astral es la llave para entender tu propósito en este universo.",      "Las discusiones, los celos y la falta de comunicación rompen el amor. No permitas que el dolor te consuma. Soy tu guía para romper ese ciclo de peleas y traer la armonía y el entendimiento a tu hogar. Una consulta revelará la verdad oculta.",

    image: "/images/crisis-pareja.jpg",    image: "/images/crisis-pareja.jpg",

    alt: "Consulta astrológica personalizada",    alt: "Relación en crisis, terapia de pareja",

  },  },

  {  {

    icon: Crystal,    icon: ShieldOff,

    title: "Limpieza Energética y Protección Espiritual",    title: "Bloqueos, Envidias y Mal de Ojo",

    description:    description:

      "Si sientes que energías negativas te rodean, que la mala suerte te persigue o que algo bloquea tu camino, es momento de purificar tu aura. Realizo limpiezas profundas que liberan tu espíritu y crean un escudo protector a tu alrededor.",      "¿Sientes que nada te sale bien? ¿Tu camino está lleno de obstáculos inesperados? Libérate de esas energías pesadas y negativas que te impiden avanzar en el amor y el dinero. Realizo limpiezas energéticas profundas para que el éxito y la fortuna fluyan de nuevo.",

    image: "/images/mal-ojo.jpg",    image: "/images/mal-ojo.jpg",

    alt: "Limpieza energética y protección espiritual",    alt: "Protección contra mal de ojo y envidias",

  },  },

  {  {

    icon: Moon,    icon: Sparkles,

    title: "Rituales Lunares y Trabajos Esotéricos",    title: "Han Intentado Dañarte: Rompe Todo Mal",

    description:    description:

      "Los ciclos de la luna rigen las energías del cosmos. Aprovecho el poder de cada fase lunar para realizar trabajos específicos: atraer abundancia en luna nueva, fortalecer relaciones en luna llena, liberar lo que no sirve en luna menguante.",      "Si te han hecho un mal, un trabajo oscuro o una brujería, no esperes a que te destruya. Con mi poder y mis rituales, romperemos y devolveremos todo mal que te hayan enviado. Tu protección y bienestar son mi prioridad. ¡Despeja tu camino de cualquier maldición!",

    image: "/images/proteccion.jpg",    image: "/images/proteccion.jpg",

    alt: "Rituales lunares y trabajos esotéricos",    alt: "Protección espiritual y rompe maldiciones",

  },  },

];];



const serviceIcons = [const serviceIcons = [

  { icon: Eye, label: "Tarot" },  { icon: BookHeart, label: "Tarot" },

  { icon: Star, label: "Astrología" },  { icon: HeartHandshake, label: "Amarres" },

  { icon: Moon, label: "Rituales" },  { icon: MoonStar, label: "Hechizos" },

  { icon: Shield, label: "Protección" },  { icon: ShieldCheck, label: "Limpiezas" },

];];



export default function HomePage() {export default function HomePage() {

  const handleWhatsAppClick = () => {  const handleWhatsAppClick = () => {

    window.open("https://w.app/layoramses", "_blank");    window.open("https://w.app/maximalapitonisadelamor", "_blank");

  };  };



  return (  return (

    <main className="relative min-h-screen py-8 px-4">    <main className="relative min-h-screen py-8 px-4">

      <div className="max-w-6xl mx-auto">      <div className="max-w-6xl mx-auto">

        {/* Header */}        {/* Header */}

        <header className="text-center mb-12 animate-fade-in-down">        <header className="text-center mb-12 animate-fade-in-down">

          <h1 className="text-4xl md:text-7xl font-headline font-bold mb-4 gradient-text">          <h1 className="text-4xl md:text-7xl font-headline font-bold mb-4 gradient-text">

            Layo Ramses Espiritista            Máxima La Pitonisa del Amor

          </h1>          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-6">          <p className="text-lg md:text-xl text-muted-foreground mb-6">

            Guía espiritual y lector de los astros            20 años creando destinos de amor

          </p>          </p>

        </header>        </header>



        {/* Services Icons Section */}        {/* Services Icons Section */}

        <section className="text-center mb-12 animate-fade-in-up">        <section className="text-center mb-12 animate-fade-in-up">

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6">          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6">

            {serviceIcons.map((service, index) => (            {serviceIcons.map((service, index) => (

              <div key={service.label} className="flex items-center gap-2">              <div key={service.label} className="flex items-center gap-2">

                <service.icon className="w-6 h-6 text-primary zodiac-symbol" />                <service.icon className="w-6 h-6 text-primary" />

                <span className="text-foreground font-medium">                <span className="text-foreground font-medium">

                  {service.label}                  {service.label}

                </span>                </span>

                {index < serviceIcons.length - 1 && (                {index < serviceIcons.length - 1 && (

                  <span className="text-primary ml-4 hidden md:inline">✦</span>                  <span className="text-primary ml-4 hidden md:inline">◆</span>

                )}                )}

              </div>              </div>

            ))}            ))}

          </div>          </div>

          <p className="text-lg text-accent font-medium">          <p className="text-lg text-accent font-medium">

            Los misterios del cosmos revelan tu verdadero destino.            Tu destino sentimental comienza aquí.

          </p>          </p>

        </section>        </section>



        {/* WhatsApp CTA Button */}        {/* WhatsApp CTA Button */}

        <section className="text-center mb-16 animate-fade-in-up">        <section className="text-center mb-16 animate-fade-in-up">

          <button          <button

            onClick={handleWhatsAppClick}            onClick={handleWhatsAppClick}

            className="whatsapp-btn text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"            className="whatsapp-btn text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300"

          >          >

            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">

              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />

            </svg>            </svg>

            Consulta Espiritual por WhatsApp            Contactar por WhatsApp

          </button>          </button>

        </section>        </section>



        {/* Services Grid */}        {/* Services Grid */}

        <section className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">        <section className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">

          {services.map((service, index) => (          {services.map((service, index) => (

            <Card            <Card

              key={index}              key={index}

              className="service-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 esoteric-border"              className="service-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"

            >            >

              <CardHeader className="pb-4">              <CardHeader className="pb-4">

                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">

                  {/* eslint-disable-next-line @next/next/no-img-element */}                  {/* eslint-disable-next-line @next/next/no-img-element */}

                  <img                  <img

                    src={service.image}                    src={service.image}

                    alt={service.alt}                    alt={service.alt}

                    className="w-full h-full object-cover"                    className="w-full h-full object-cover"

                  />                  />

                </div>                </div>

                <CardTitle className="flex items-center gap-3 text-primary font-headline text-xl">                <CardTitle className="flex items-center gap-3 text-primary font-headline text-xl">

                  <service.icon className="w-6 h-6 flex-shrink-0 zodiac-symbol" />                  <service.icon className="w-6 h-6 flex-shrink-0" />

                  {service.title}                  {service.title}

                </CardTitle>                </CardTitle>

              </CardHeader>              </CardHeader>

              <CardContent>              <CardContent>

                <p className="text-foreground leading-relaxed text-left">                <p className="text-foreground leading-relaxed text-left">

                  {service.description}                  {service.description}

                </p>                </p>

              </CardContent>              </CardContent>

            </Card>            </Card>

          ))}          ))}

        </section>        </section>



        {/* Mystical Quote Section */}        {/* Footer */}

        <section className="text-center mb-16 animate-fade-in-up">        <footer className="text-center border-t border-border pt-8 animate-fade-in-up">

          <div className="max-w-4xl mx-auto p-8 rounded-lg esoteric-border">          <p className="text-muted-foreground">

            <blockquote className="text-xl md:text-2xl font-headline italic gradient-text mb-4">            © {new Date().getFullYear()} Máxima La Pitonisa del Amor. Todos los

              &quot;En el silencio de las estrellas se encuentran las respuestas que el alma busca.             derechos reservados.

              Cada constelación cuenta una historia, cada planeta susurra secretos del destino.&quot;          </p>

            </blockquote>        </footer>

            <cite className="text-muted-foreground text-lg">— Layo Ramses</cite>      </div>

          </div>    </main>

        </section>  );

}

        {/* Footer */}
        <footer className="text-center border-t border-border pt-8 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            © {new Date().getFullYear()} Layo Ramses Espiritista. Todos los derechos reservados.
          </p>
          <p className="text-sm text-accent">
            ✦ Los astros nunca mienten, solo hay que saber escucharlos ✦
          </p>
        </footer>
      </div>
    </main>
  );
}
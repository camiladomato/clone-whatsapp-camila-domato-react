const users = [
  {
    name: "Camila Domato",
    img: "https://github.com/camiladomato.png",
    email: "camiladomato@gmail.com",
    password: "utn123",
    contactos: [
      {
        id: 1,
        nombre: "Damian Benitez",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        lastConnect: "11:25",
        mensajes: [
          { id: 101, sender: "contact", text: "Hola Camila, ¿tenés los diseños?", time: "11:15" },
          { id: 102, sender: "me", text: "Sí, estoy terminando el Aside", time: "11:18" },
          { id: 103, sender: "contact", text: "Dale, quedo atento al ultimo msj", time: "11:20" }
        ]
      },
      {
        id: 2,
        nombre: "Sara Gómez",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        lastConnect: "10:50",
        mensajes: [
          { id: 201, sender: "me", text: "¿Confirmamos la sala de hoy?", time: "10:30" },
          { id: 202, sender: "contact", text: "Nos vemos en la reunión", time: "10:45" }
        ]
      },
      {
        id: 3,
        nombre: "Nicolas Perez",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        lastConnect: "09:20",
        mensajes: [
          { id: 301, sender: "me", text: "Fijate si te llegó el PDF", time: "09:05" },
          { id: 302, sender: "contact", text: "Enviado el archivo, recibido!", time: "09:15" }
        ]
      },
      {
        id: 4,
        nombre: "Ana Martínez",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        lastConnect: "12:45",
        mensajes: [
          { id: 401, sender: "contact", text: "Subí los cambios a Vercel", time: "12:15" },
          { id: 402, sender: "contact", text: "¿Viste el nuevo diseño?", time: "12:30" }
        ]
      },
      {
        id: 5,
        nombre: "Lucas Silva",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        lastConnect: "14:30",
        mensajes: [
          { id: 501, sender: "me", text: "Lucas, ¿podemos hablar 5 min?", time: "14:00" },
          { id: 502, sender: "contact", text: "Mañana te llamo sin falta", time: "14:15" }
        ]
      },
      {
        id: 6,
        nombre: "Carla Rodriguez",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
        lastConnect: "15:10",
        mensajes: [
          { id: 601, sender: "me", text: "Ya terminé los componentes de React", time: "14:50" },
          { id: 602, sender: "contact", text: "Excelente trabajo con React", time: "15:00" }
        ]
      },
      {
        id: 7,
        nombre: "Marcos Diaz",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
        lastConnect: "17:00",
        mensajes: [
          { id: 701, sender: "contact", text: "Te anoté en la lista de invitados", time: "16:30" },
          { id: 702, sender: "contact", text: "Confirmado el evento de hoy", time: "16:45" }
        ]
      },
      {
        id: 8,
        nombre: "Sofia Lopez",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
        lastConnect: "18:40",
        mensajes: [
          { id: 801, sender: "me", text: "No encuentro el link del proyecto", time: "18:10" },
          { id: 802, sender: "contact", text: "Te pasé el repo por mail", time: "18:20" }
        ]
      },
      {
        id: 9,
        nombre: "Julián Castro",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop",
        lastConnect: "19:15",
        mensajes: [
          { id: 901, sender: "me", text: "¿Sale ese café?", time: "18:50" },
          { id: 902, sender: "contact", text: "Dale, hablamos luego.", time: "19:05" }
        ]
      },
      {
        id: 10,
        nombre: "Valeria Ruiz",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
        lastConnect: "20:00",
        mensajes: [
          { id: 1001, sender: "me", text: "Tengo los iconos listos", time: "19:30" },
          { id: 1002, sender: "contact", text: "¿Me pasas el link de Figma?", time: "19:40" }
        ]
      }
    ]
  },
  {
    name: "Mateo Ricci",
    img: "https://unavatar.io/github/mricci",
    email: "mateoricci@gmail.com",
    password: "backend123",
    contactos: [
      {
        id: 1,
        nombre: "Camila Domato",
        img: "https://github.com/camiladomato.png",
        lastConnect: "12:00",
        mensajes: [
          { id: 101, sender: "contact", text: "Mateo, ¿subiste el endpoint de login?", time: "11:45" },
          { id: 102, sender: "me", text: "Sí, ya está en el repo, probalo.", time: "11:50" }
        ]
      },
      {
        id: 11,
        nombre: "Franco Dev",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop",
        lastConnect: "14:20",
        mensajes: [
          { id: 1101, sender: "contact", text: "Hay un error en la base de datos", time: "14:00" },
          { id: 1102, sender: "me", text: "Ya lo estoy revisando, parece un timeout", time: "14:10" }
        ]
      }
    ]
  },
  {
    name: "Martina Varela",
    img: "https://unavatar.io/github/martinav",
    email: "martinav@gmail.com",
    password: "prod123",
    contactos: [
      {
        id: 12,
        nombre: "Agustin Silva",
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop",
        lastConnect: "10:00",
        mensajes: [
          { id: 1201, sender: "me", text: "¿Cómo venimos para el sprint?", time: "09:30" },
          { id: 1202, sender: "contact", text: "Todo en orden, llegamos bien.", time: "09:45" }
        ]
      },
      {
        id: 13,
        nombre: "Elena Paz",
        img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop",
        lastConnect: "16:30",
        mensajes: [
          { id: 1301, sender: "contact", text: "Marti, ¿tenés el feedback del cliente?", time: "16:15" },
          { id: 1302, sender: "me", text: "Me lo mandan mañana a primera hora.", time: "16:20" }
        ]
      }
    ]
  }
];

export { users };
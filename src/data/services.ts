export type Service = { name: string; minutes: number; price: number; from?: boolean };
export type CategoryId = "manos" | "pies" | "pestanas";
export type ServiceCategory = { id: CategoryId; title: string; img: string; groups: { title: string; services: Service[] }[] };

export const CATEGORIES: ServiceCategory[] = [
  {
    "id": "manos",
    "title": "Manicura",
    "img": "/maps_09.jpg",
    "groups": [
      {
        "title": "Manicura",
        "services": [
          {
            "name": "Exprés",
            "minutes": 30,
            "price": 15.9
          },
          {
            "name": "Rusa",
            "minutes": 90,
            "price": 28.9
          },
          {
            "name": "Rusa spa",
            "minutes": 90,
            "price": 32.9
          },
          {
            "name": "Rusa sin esmalte",
            "minutes": 60,
            "price": 20.9
          },
          {
            "name": "Rusa spa sin esmalte",
            "minutes": 60,
            "price": 22.9
          },
          {
            "name": "Japonesa",
            "minutes": 30,
            "price": 20.9
          },
          {
            "name": "Retirada semipermanente manos",
            "minutes": 30,
            "price": 12.9
          },
          {
            "name": "Tratamiento onicofagia",
            "minutes": 180,
            "price": 45.9
          },
          {
            "name": "Corrección estructura",
            "minutes": 10,
            "price": 1.0
          },
          {
            "name": "Niños-Manicura",
            "minutes": 30,
            "price": 12.9
          }
        ]
      },
      {
        "title": "Uñas gel / acrygel",
        "services": [
          {
            "name": "Extensiones soft gel",
            "minutes": 90,
            "price": 40.9
          },
          {
            "name": "Extensiones acrygel S-M",
            "minutes": 120,
            "price": 47.9
          },
          {
            "name": "Extensiones acrygel L-XL",
            "minutes": 150,
            "price": 56.9
          },
          {
            "name": "Relleno soft gel",
            "minutes": 90,
            "price": 32.9
          },
          {
            "name": "Relleno acrygel S-M",
            "minutes": 90,
            "price": 39.9
          },
          {
            "name": "Relleno acrygel L-XL",
            "minutes": 120,
            "price": 48.9
          },
          {
            "name": "Retirada soft gel",
            "minutes": 60,
            "price": 22.9
          },
          {
            "name": "Retirada acrygel",
            "minutes": 90,
            "price": 22.9
          },
          {
            "name": "Retirada soft gel/acrygel/semi+manicura rusa",
            "minutes": 90,
            "price": 30.9
          },
          {
            "name": "Extensión 1 uña",
            "minutes": 10,
            "price": 3.5
          },
          {
            "name": "Parche por uña",
            "minutes": 10,
            "price": 2.5
          }
        ]
      },
      {
        "title": "Decoración · Extras",
        "services": [
          {
            "name": "Puntos y líneas por uña",
            "minutes": 30,
            "price": 0.5
          },
          {
            "name": "Cambio de color",
            "minutes": 5,
            "price": 1.0
          },
          {
            "name": "Purpurina",
            "minutes": 5,
            "price": 1.0
          },
          {
            "name": "Básica",
            "minutes": 5,
            "price": 2.5
          },
          {
            "name": "Puntos y líneas manos",
            "minutes": 30,
            "price": 3.0
          },
          {
            "name": "Francesa clásica",
            "minutes": 5,
            "price": 3.0
          },
          {
            "name": "Premium o doble francesa",
            "minutes": 15,
            "price": 3.5
          },
          {
            "name": "3D",
            "minutes": 30,
            "price": 5.0
          },
          {
            "name": "Diseño elaborado por uña",
            "minutes": 30,
            "price": 5.0
          },
          {
            "name": "Francesa sonrisa",
            "minutes": 10,
            "price": 5.0
          },
          {
            "name": "Glazed",
            "minutes": 10,
            "price": 5.0
          },
          {
            "name": "Ojo de gato",
            "minutes": 10,
            "price": 8.0
          },
          {
            "name": "Babyboomer/Aurora",
            "minutes": 15,
            "price": 10.0
          },
          {
            "name": "Múltiple",
            "minutes": 30,
            "price": 10.0
          }
        ]
      }
    ]
  },
  {
    "id": "pies",
    "title": "Pedicura",
    "img": "/maps_08.jpg",
    "groups": [
      {
        "title": "Pedicura",
        "services": [
          {
            "name": "Exprés",
            "minutes": 30,
            "price": 20.9
          },
          {
            "name": "Rusa",
            "minutes": 90,
            "price": 39.9
          },
          {
            "name": "Rusa spa",
            "minutes": 90,
            "price": 42.9
          },
          {
            "name": "Rusa sin esmaltar",
            "minutes": 60,
            "price": 35.9
          },
          {
            "name": "Rusa spa sin esmaltar",
            "minutes": 60,
            "price": 38.9
          },
          {
            "name": "Retirada semipermanente pies",
            "minutes": 30,
            "price": 12.9
          },
          {
            "name": "Reconstrucción 1 uña pie",
            "minutes": 10,
            "price": 4.0
          }
        ]
      }
    ]
  },
  {
    "id": "pestanas",
    "title": "Extensiones y lifting de pestañas",
    "img": "/pestanas-volumen.jpg",
    "groups": [
      {
        "title": "Lifting de pestañas",
        "services": [
          {
            "name": "Lifting coreano+tinte",
            "minutes": 90,
            "price": 50.0
          }
        ]
      },
      {
        "title": "Extensiones de pestañas",
        "services": [
          {
            "name": "Clásicas · Set",
            "minutes": 135,
            "price": 45.0
          },
          {
            "name": "Clásicas · Relleno",
            "minutes": 90,
            "price": 30.0
          },
          {
            "name": "Efecto rímel · Set",
            "minutes": 150,
            "price": 55.0
          },
          {
            "name": "Efecto rímel · Relleno",
            "minutes": 90,
            "price": 35.0
          },
          {
            "name": "Aura · Set",
            "minutes": 150,
            "price": 70.0
          },
          {
            "name": "Aura · Relleno",
            "minutes": 90,
            "price": 45.0
          },
          {
            "name": "Brasileño · Set",
            "minutes": 195,
            "price": 75.0
          },
          {
            "name": "Brasileño · Relleno",
            "minutes": 120,
            "price": 50.0
          },
          {
            "name": "Egipcio 6D · Set",
            "minutes": 210,
            "price": 85.0
          },
          {
            "name": "Egipcio 6D · Relleno",
            "minutes": 120,
            "price": 60.0
          },
          {
            "name": "Griego 5D · Set",
            "minutes": 210,
            "price": 95.0
          },
          {
            "name": "Griego 5D · Relleno",
            "minutes": 120,
            "price": 55.0
          },
          {
            "name": "Retirada pestañas",
            "minutes": 60,
            "price": 15.0
          },
          {
            "name": "Retirada + nueva puesta mismo día",
            "minutes": 60,
            "price": 5.0,
            "from": true
          }
        ]
      },
      {
        "title": "Cejas",
        "services": [
          {
            "name": "Laminado+henna+depilación",
            "minutes": 80,
            "price": 40.0
          },
          {
            "name": "Henna Ombre Brown+diseño+depilación",
            "minutes": 90,
            "price": 45.0
          },
          {
            "name": "Depilación cejas Prémium",
            "minutes": 60,
            "price": 20.0
          },
          {
            "name": "Depilación cejas exprés",
            "minutes": 30,
            "price": 13.0
          }
        ]
      },
      {
        "title": "Depilación facial",
        "services": [
          {
            "name": "Pack facial+labio sup+patillas+mentón",
            "minutes": 90,
            "price": 20.0
          },
          {
            "name": "Depilación labio sup cera",
            "minutes": 15,
            "price": 5.0
          }
        ]
      }
    ]
  }
];

export const formatPrice = (service: Service) => `${service.from ? "Desde " : ""}${service.price.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;

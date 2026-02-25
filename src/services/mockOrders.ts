import { type Order } from "../types/order";

export const mockOrders: Order[] = [
  {
    id: "1673",
    customerName: "Rafaela Silva",
    createdAt: new Date().toISOString(),
    status: "NOVO",
    total: 150,
    items: [
      { 
        name: "Camiseta", 
        quantity: 1, 
        price: 50 },
      { 
        name: "Regata", 
        quantity: 1, 
        price: 50 },
      { 
        name: "Bermuda", 
        quantity: 1, 
        price: 50 }
    ],
    itemsCount: 3,
  },

  {
    id: "7634",
    customerName: "Maria Souza",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    status: "CONCLUIDO",
    total: 480,
    items: [
      { 
        name: "Tênis Esportivo", 
        quantity: 6, 
        price: 80 
      }
    ],
    itemsCount: 6,
  },

  {
    id: "8735",
    customerName: "Leandro Costa",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    status: "PROCESSANDO",
    total: 400,
    items: [
      {  
        name: "Jaqueta", 
        quantity: 4, 
        price: 100 
      }
    ],
    itemsCount: 4,
  },

  {
    id: "7365",
    customerName: "Clara Soares",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    status: "NOVO",
    total: 150,
    items: [
      { 
        name: "Vestido", 
        quantity: 2, 
        price: 75 
      }
    ],
    itemsCount: 2,
  },

  {
    id: "8723",
    customerName: "Rafael Almeida",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
    status: "PROCESSANDO",
    total: 300,
    items: [
      { 
        name: "Tênis Casual", 
        quantity: 3, 
        price: 100 
      }
    ],
    itemsCount: 3,
  },

  {
    id: "1563",
    customerName: "Fernanda Lima",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    status: "CONCLUIDO",
    total: 100,
    items: [
      { 
        name: "Saia", 
        quantity: 1, 
        price: 50 
      },
      { 
        name: "Blusa", 
        quantity: 1, 
        price: 50
      }
    ],
    itemsCount: 2,
  },

  {
    id: "9875",
    customerName: "Bruno Martins",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(),
    status: "NOVO",
    total: 300,
    items: [
      { 
        name: "Tênis de Corrida", 
        quantity: 3, 
        price: 100 
      }
    ],
    itemsCount: 3,
  },

  {
    id: "1987",
    customerName: "Juliana Rocha",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    status: "PROCESSANDO",
    total: 200,
    items: [
      {  
        name: "Calça Jeans", 
        quantity: 1, 
        price: 200 
      }
    ],
    itemsCount: 1,
  },

  {
    id: "9092",
    customerName: "Carlos Eduardo",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 84).toISOString(),
    status: "CONCLUIDO",
    total: 160,
    items: [
      {  
        name: "Tênis Basquete", 
        quantity: 2, 
        price: 80
      }
    ],
    itemsCount: 2,
  },

  {
    id: "1654",
    customerName: "Patrícia Gomes",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
    status: "PROCESSANDO",
    total: 100,
    items: [
      { 
        name: "Blazer", 
        quantity: 1, 
        price: 100
      }
    ],
    itemsCount: 1,
  },

  {
    id: "9834",
    customerName: "Leonardo Ferreira",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 108).toISOString(),
    status: "PROCESSANDO",
    total: 800,
    items: [
      {
        name: "Jaqueta de Couro", 
        quantity: 1, 
        price: 800
      }
    ],
    itemsCount: 1,
  },

  {
    id: "7843",
    customerName: "Camila Nunes",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
    status: "CANCELADO",
    total: 400,
    items: [
      { 
        name: "Moletom Canguru", 
        quantity: 2, 
        price: 200 
      }
    ],
    itemsCount: 2,
  },

  {
    id: "5684",
    customerName: "Lucas Barbosa",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 132).toISOString(),
    status: "CANCELADO",
    total: 500,
    items: [
      { 
        name: "Jaqueta Jeans", 
        quantity: 2, 
        price: 250 
      }
    ],
    itemsCount: 2,
  },

  {
    id: "8945",
    customerName: "Aline Ribeiro",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 144).toISOString(),
    status: "CONCLUIDO",
    total: 400,
    items: [
      {  
        name: "Tênis Casual", 
        quantity: 4, 
        price: 100 
      }
    ],
    itemsCount: 4,
  },

  {
    id: "6845",
    customerName: "Gustavo Henrique",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 156).toISOString(),
    status: "NOVO",
    total: 600,
    items: [
      { 
        name: "Jaqueta de Couro", 
        quantity: 1, 
        price: 600 
      }
    ],
    itemsCount: 1,
  },

  {
    id: "8094",
    customerName: "Bianca Castro",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 168).toISOString(),
    status: "CANCELADO",
    total: 200,
    items: [
      { 
        name: "Shorts", 
        quantity: 2, 
        price: 100
      }
    ],
    itemsCount: 2,
  },

  {
    id: "7984",
    customerName: "Thiago Mendes",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 180).toISOString(),
    status: "NOVO",
    total: 800,
    items: [
      { 
        name: "Tênis Importado", 
        quantity: 2, 
        price: 400 
      }
    ],
    itemsCount: 2,
  },

  {
    id: "7956",
    customerName: "Vanessa Oliveira",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 192).toISOString(),
    status: "CONCLUIDO",
    total: 355,
    items: [
      { 
        name: "Blusa Social", 
        quantity: 1, 
        price: 155 
      },
      { 
        name: "Calça Alfaiataria", 
        quantity: 1, 
        price: 200 
      }
    ],
    itemsCount: 2,
  },

  {
    id: "7544",
    customerName: "Eduardo Santos",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 204).toISOString(),
    status: "CONCLUIDO",
    total: 740,
    items: [
      { 
        name: "Tênis Premium", 
        quantity: 4, 
        price: 185 
      }
    ],
    itemsCount: 4,
  },

  {
    id: "8798",
    customerName: "Larissa Monteiro",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 216).toISOString(),
    status: "CANCELADO",
    total: 300,
    items: [
      { 
        name: "Vestido Longo", 
        quantity: 2, 
        price: 150 
      }
    ],
    itemsCount: 2,
  },
];
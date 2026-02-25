export type OrderStatus = "NOVO" | "PROCESSANDO" | "CONCLUIDO" | "CANCELADO";

export type Order = {
  id: string;
  customerName: string;
  createdAt: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
  itemsCount: number;
}

export type OrderItem = {
  name: string;
  quantity: number;
  price: number;
}
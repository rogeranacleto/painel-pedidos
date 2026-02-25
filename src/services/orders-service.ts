import { mockOrders } from "./mockOrders";
import type { Order, OrderStatus } from "../types/order";

const ordersList: Order[] = [...mockOrders];

const simulateRequestDelay = <ResponseType>(responseData: ResponseType): Promise<ResponseType> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFailRequest = Math.random() < 0.1;
      if (shouldFailRequest) {
        reject(
          new Error("Erro na requisição, tente novamente mais tarde")
        );
      }
      resolve(responseData);
    }, 800);
  });

export const ordersService = {
  getOrders: async (): Promise<Order[]> => {
    return simulateRequestDelay(ordersList);
  },

  getOrderById: async (orderId: string): Promise<Order | undefined> => {
    const foundOrder = ordersList.find((order) => order.id === orderId);
    return simulateRequestDelay(foundOrder);
  },

  updateOrderStatus: async (orderId: string, newStatus: OrderStatus): Promise<Order | undefined> => {
    const orderIndex = ordersList.findIndex((order) => order.id === orderId);
    if (orderIndex !== -1) {
      ordersList[orderIndex].status = newStatus;
    }
    const updatedOrder = ordersList[orderIndex];
    return simulateRequestDelay(updatedOrder);
  },
};
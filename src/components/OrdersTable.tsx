import type { Order } from "../types/order";
import { StatusBadge } from "./StatusBadge";

interface OrdersTableProps {
  orders: Order[];
  onRowClick: (orderId: string) => void;
}

export function OrdersTable({ orders, onRowClick }: OrdersTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-0.5 border-[#ada8a8] bg-white shadow-lg">
      <table className="min-w-full">
        <thead className="bg-[#d8d4d427]">
          <tr>
            <th className="text-left p-7.5 font-medium border-b border-[#ada8a8]">
              ID do pedido
            </th>
            <th className="text-left p-7.5 font-medium border-b border-[#ada8a8]">
              Cliente
            </th>
            <th className="text-left p-7.5 font-medium border-b border-[#ada8a8]">
              Data do pedido
            </th>
            <th className="text-left p-7.5 font-medium border-b border-[#ada8a8]">
              Total
            </th>
            <th className="text-left p-7.5 font-medium border-b border-[#ada8a8]">
              Itens
            </th>
            <th className="text-left p-7.5 font-medium border-b border-[#ada8a8]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b cursor-pointer hover:bg-[#ada8a827] duration-300 ease-in-out"
              onClick={() => onRowClick(order.id)}
            >
              <td className="p-6 font-semibold border-b border-[#ada8a8]">
                {order.id}
              </td>
              <td className="p-6 font-semibold border-b border-[#ada8a8]">
                {order.customerName}
              </td>
              <td className="p-6 text-sm border-b border-[#ada8a8]">
                <span className="text-[#837f7f]">
                  {new Date(order.createdAt).toLocaleDateString("pt-BR")}
                </span>
              </td>
              <td className="p-6 text-sm text-[#837f7f] border-b border-[#ada8a8]">
                {order.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="p-6 text-sm text-[#837f7f] border-b border-[#ada8a8]">
                {order.itemsCount}
              </td>
              <td className="p-6 border-b border-[#ada8a8]">
                <StatusBadge status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

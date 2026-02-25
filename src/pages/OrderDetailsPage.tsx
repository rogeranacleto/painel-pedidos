import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { ordersService } from "../services/orders-service";
import { IoMdArrowRoundBack } from "react-icons/io";
import type { Order } from "../types/order";
import { TailSpin } from "react-loader-spinner";
import { StatusBadge } from "../components/StatusBadge";
import { ConfirmModal } from "../components/ConfirmModal";
import toast from "react-hot-toast";

export function OrderDetailsPage() {
const { orderId } = useParams();
const navigate = useNavigate();
const [order, setOrder] = useState<Order | null>(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const fetchOrder = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      if (!orderId) return;
      const data = await ordersService.getOrderById(orderId);
      if (!data) {
        setError("Pedido não encontrado");
        return;
      }
      setOrder(data);
    } catch (error) {
      setError(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [orderId]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);
  
  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center mt-50">
        <TailSpin
          height="80"
          width="80"
          color="#EAEBEE"
          ariaLabel="tail-spin-loading"
          visible={isLoading}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 flex justify-center">
        <div className="flex flex-col items-center mt-12">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchOrder}
            className="px-4 py-2 bg-[#0e1df5bd] hover:bg-[#0e1ef5] duration-500 ease-in-out text-white rounded-2xl cursor-pointer"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

if (!order) return null;

async function handleStatusChange(newStatus: Order["status"]) {
  if (!order) return;
  try {
    await ordersService.updateOrderStatus(order.id, newStatus);
    setOrder({...order, status: newStatus,});
    toast.success("Status do pedido alterado com sucesso!");
  } catch (error) {
    setError(`${error}`);
    toast.error(`Erro ao alterar status do pedido ${error}`);
  }
}

function getNextStatus(status: Order["status"]) {
  if (status === "NOVO") return "PROCESSANDO";
  if (status === "PROCESSANDO") return "CONCLUIDO";
  return null;
}

async function confirmCancel() {
  if (!order) return;
  try {
    await ordersService.updateOrderStatus(order.id, "CANCELADO");
    setOrder({...order, status: "CANCELADO",});
    setIsCancelModalOpen(false);
    toast.success("Pedido cancelado com sucesso!");
  } catch (error) {
    setError(`${error}`);
    toast.error(`Erro ao cancelar pedido ${error}`);
  }
}

return (
  <div className="p-5 bg-[#f5f7fa] min-h-screen max-w-screen">
    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 mt-15 shadow-2xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-black flex items-center gap-2 cursor-pointer bg-[#f5f7fa] px-3.5 py-2 rounded-2xl hover:scale-110 duration-300 ease-in-out text-sm"
      >
        <IoMdArrowRoundBack />
        Voltar
      </button>
      <h1 className="text-2xl font-medium mb-6">Pedido  ID {order.id}</h1>
      <div className="space-y-2 mb-6">
        <p className="font-medium">
          Cliente: <span className="font-normal">{order.customerName}</span>
        </p>
        <p className="font-medium">
          Data do pedido:{" "}
          <span className="font-normal">
            {new Date(order.createdAt).toLocaleDateString("pt-BR")}
          </span>
        </p>
        <p className="flex gap-2 items-center">
          <span className="font-medium">Status:</span>
          <div>
          <StatusBadge status={order.status} />
          </div>
        </p>
        <p className="font-medium">
          Total:{" "}
          <span className="font-normal">
            {order.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <p className="font-medium">
          Quantidade de itens:{" "}
          <span className="font-normal">{order.itemsCount}</span>
        </p>
      </div>
      <h2 className="text-xl font-semibold mb-4">Itens do Pedido</h2>
      <div className="space-y-3">
        {order.items.map((item) => (
          <div className="border border-solid border-[#ada8a8] rounded-lg p-4 flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                Quantidade: {item.quantity}
              </p>
            </div>
            <p className="font-semibold">
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-4 mt-4">Ações</h2>
      <div className="flex items-center gap-4 mb-6">
        {getNextStatus(order.status) && (
          <select
            onChange={(e) =>
              handleStatusChange(e.target.value as Order["status"])
            }
            value={""}
            className="px-3 py-2 rounded border border-solid border-[#ada8a8]"
          >
            <option value="" disabled>
              Alterar status
            </option>
            <option value={getNextStatus(order.status)!}>
              {getNextStatus(order.status)}
            </option>
          </select>
        )}
        {(order.status === "NOVO" || order.status === "PROCESSANDO") && (
          <button
            onClick={() => setIsCancelModalOpen(true)}
            className="px-4 py-2 bg-[#ca0e0ea1] text-white rounded cursor-pointer hover:bg-[#ca0e0e] duration-500 ease-in-out"
          >
            Cancelar Pedido
          </button>
        )}
        {(order.status === "CONCLUIDO" || order.status === "CANCELADO") && (
          <p className="text-[#ada8a8]">
            Pedido finalizado. Nenhuma ação disponível.
          </p>
        )}
      </div>
    </div>
    <ConfirmModal
      isOpen={isCancelModalOpen}
      title="Cancelar pedido"
      description="Tem certeza que deseja cancelar este pedido? Essa ação não pode ser desfeita."
      onConfirm={confirmCancel}
      onCancel={() => setIsCancelModalOpen(false)}
    />
  </div>
);
}

import { useEffect, useState } from "react";
import { ordersService } from "../services/orders-service";
import { type Order } from "../types/order";
import { useNavigate } from "react-router-dom";
import { OrdersTable } from "../components/OrdersTable";
import { TailSpin } from "react-loader-spinner";
import { IoMdSearch } from "react-icons/io";

export function OrdersListPage() {
const [orders, setOrders] = useState<Order[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [searchQuery, setSearchQuery] = useState("");
const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
const [statusFilter, setStatusFilter] = useState<string>("TODOS");
const navigate = useNavigate();
const [currentPage, setCurrentPage] = useState(1);

async function fetchOrders() {
try {
    setIsLoading(true);
    setError(null);
    const data = await ordersService.getOrders();
    setOrders(data);
} catch (error) {
    setError(`${error}`);
} finally {
    setIsLoading(false);
}
}

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

useEffect(() => {
  setCurrentPage(1);
}, [debouncedSearchQuery, statusFilter]);

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
            onClick={fetchOrders}
            className="px-4 py-2 bg-[#0e1df5bd] hover:bg-[#0e1ef5] duration-500 ease-in-out text-white rounded-2xl cursor-pointer"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return <div className="p-6 text-center mt-12 text-[#ada8a8]">Nenhum pedido encontrado.</div>;
  }

const filteredOrders = orders.filter((order) => {
const normalizedSearchQuery = debouncedSearchQuery.toLowerCase();
const matchesSearch = order.customerName.toLowerCase().includes(normalizedSearchQuery) || order.id.includes(normalizedSearchQuery);
const matchesStatus = statusFilter === "TODOS" || order.status === statusFilter;
return matchesSearch && matchesStatus;
});

const sortedOrders = [...filteredOrders].sort((firstOrder, secondOrder) => {
const firstOrderDate = new Date(firstOrder.createdAt).getTime();
const secondOrderDate = new Date(secondOrder.createdAt).getTime();
return secondOrderDate - firstOrderDate;
});

const itemsPerPage = 10;
const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedOrders = sortedOrders.slice(startIndex, endIndex);

return (
  <div className="p-6 min-h-100vh max-w-screen min-h-screen bg-[#f5f7fa]">
    <h1 className="text-3xl font-medium mb-4">Painel de Pedidos</h1>
    <div className="mb-4 flex gap-2 relative">
      <input
        type="text"
        placeholder="Buscar por cliente ou ID do pedido"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="w-full max-w-md px-4 py-2 rounded-lg border border-0.5 border-[#ada8a8]"
      />
      <IoMdSearch className="absolute left-100 top-1.5 text-3xl text-[#ada8a8]" />
      <select
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
        className=" px-1 py-2 rounded-lg border border-0.5 border-[#ada8a8]"
      >
        <option value="TODOS">Todos</option>
        <option value="NOVO">Novo</option>
        <option value="PROCESSANDO">Processando</option>
        <option value="CONCLUIDO">Concluido</option>
        <option value="CANCELADO">Cancelado</option>
      </select>
    </div>
    <OrdersTable
      orders={paginatedOrders}
      onRowClick={(orderId) => navigate(`/order/${orderId}`)}
    />
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((previousPage) => previousPage - 1)}
        className="px-3 py-1 rounded border border-[#7e7979] disabled:opacity-50 text-sm cursor-pointer"
      >
        Anterior
      </button>

      <span className="text-sm text-[#7e7979] ">
        Página {currentPage} de {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((previousPage) => previousPage + 1)}
        className="px-3 py-1 rounded border border-[#7e7979] disabled:opacity-50 text-sm cursor-pointer"
      >
        Próxima
      </button>
    </div>
  </div>
);
}
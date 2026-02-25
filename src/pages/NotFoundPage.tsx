import { Link } from "react-router-dom"
export function NotFoundPage(){
    return (
      <div className="min-w-screen max-w-screen">
        <div className="flex flex-col items-center mt-50">
          <h1 className="text-6xl font-medium">404</h1>
          <p className="text-4xl font-medium">Not Found Page</p>
          <p className="text-[#ada8a8] max-w-lg text-center mt-4">Página não encontrada. Clique no botão abaixo para ir para a tabela de pedidos.</p>
          <Link
            to={"/"}
            className="px-4 py-2 mt-5 bg-[#0e1df5bd] hover:bg-[#0e1ef5] duration-500 ease-in-out text-white rounded-2xl cursor-pointer"
          >
            Voltar
          </Link>
        </div>
      </div>
    );
}
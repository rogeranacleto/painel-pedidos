import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { WiMoonNew } from "react-icons/wi";
import type { Order } from "../types/order";

interface StatusBadgeProps {
  status: Order["status"];
}

export function StatusBadge({ status }: StatusBadgeProps) {
  let color = "";
  let Icon = null;
  let label = "";

  switch (status) {
    case "CONCLUIDO":
      color = "#018f0d";
      Icon = IoIosCheckmarkCircleOutline;
      label = "Concluido";
      break;
    case "NOVO":
      color = "#dad605";
      Icon = WiMoonNew;
      label = "Novo";
      break;
    case "CANCELADO":
      color = "#c70707";
      Icon = MdOutlineCancel;
      label = "Cancelado";
      break;
    case "PROCESSANDO":
      color = "#026af1";
      Icon = FaSpinner;
      label = "Processando";
      break;
    default:
      color = "#000";
      label = status;
  }

  return (
    <div
      className="px-3 py-0.5 border-2 border-solid text-white text-sm rounded-2xl font-medium max-w-32"
      style={{ borderColor: color }}
    >
      <span className="flex items-center gap-2" style={{ color }}>
        {Icon && <Icon className="text-lg font-medium" />}
        {label}
      </span>
    </div>
  );
}

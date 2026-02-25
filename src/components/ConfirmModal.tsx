interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmModal({isOpen, title, description, onConfirm, onCancel,}: ConfirmModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="mb-6 text-gray-600">{description}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-3xl border border-solid border-[#ada8a8] cursor-pointer text-sm"
          >
            Voltar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#ca0e0ea1] text-white rounded-3xl hover:bg-[#ca0e0e] cursor-pointer duration-500 ease-in-out text-sm"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
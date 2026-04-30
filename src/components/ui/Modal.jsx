import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";

function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 dark:bg-black/70">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-dark-surface dark:shadow-dark-bg",
          className
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
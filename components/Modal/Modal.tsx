"use client";
import { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { ModalContainer, ModalContent } from "./ModalStyled";

interface ModalProps {
  isOpen: boolean;
  onClose?: CallableFunction;
  closable?: boolean;
  container?: boolean;
  children?: ReactNode;
}

const Modal = ({
  isOpen,
  closable = false,
  onClose,
  container = true,
  children,
}: ModalProps) => {
  const bodyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (document) {
      bodyRef.current = document.body;
    }
  });
  return bodyRef.current
    ? ReactDOM.createPortal(
        <ModalContainer
          onClick={(e) => {
            e.stopPropagation();
            if (onClose && closable) onClose(e);
          }}
          hidden={!isOpen}
        >
          <ModalContent
            container={container}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </ModalContent>
        </ModalContainer>,
        bodyRef.current
      )
    : null;
};

export default Modal;

"use client";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

type size = {
  height: number;
  width: number;
};

interface ExpandableImageProps {
  src: string;
  alt: string;
  size: size;
}

const ExpandableImage = ({ src, alt, size }: ExpandableImageProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div onClick={()=> setModalOpen(true)}>
      <Image src={src} alt={alt} height={size.height} width={size.width} />
      <Modal isOpen={modalOpen} onClose={()=> setModalOpen(false)} closable={true}>
        <Image src={src} alt={alt} fill/>
      </Modal>
    </div>
  );
};

export { ExpandableImage };

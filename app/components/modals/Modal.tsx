'use client';

import React, { useCallback, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
  actionLabel,
  onClose,
  onSubmit,
  body,
  disabled,
  footer,
  isOpen,
  secondaryAction,
  secondaryLabel,
  title,
}) => {
  const [open, setOpen] = React.useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-neutral-900/70 focus:outline-none">
        <div className="relative w-full h-full mx-auto my-6 md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
          <div
            className={`h-full transition duration-300 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <div className="relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none translate focus:outline-none md:h-auto lg:h-auto">
              {/* header */}
              <div className="relative flex items-center justify-center rounded-t border-b-[1px] p-6">
                <button
                  className="absolute p-1 transition border-0 left-9 hover:opacity-70"
                  type="button"
                  onClick={handleClose}
                >
                  <IoMdClose size={10} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* body */}
              <div className="relative flex-auto p-6">{body}</div>
              {/* footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center w-full gap-4">
                  {secondaryAction && secondaryLabel && (
                    <Button
                      outline
                      label={secondaryLabel}
                      onClick={handleSecondaryAction}
                      disabled={disabled}
                    />
                  )}
                  <Button
                    label={actionLabel}
                    onClick={handleSubmit}
                    disabled={disabled}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

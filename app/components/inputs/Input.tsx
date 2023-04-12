'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  errors,
  id,
  label,
  register,
  disabled,
  required,
  type = 'text',
  formatPrice,
}) => {
  return (
    <div className="relative w-full">
      {formatPrice && (
        <BiDollar
          size={24}
          className="absolute left-2 top-5 text-neutral-700"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full rounded-md border-2 bg-white p-4 pt-6 font-light outline-none disabled:cursor-not-allowed disabled:opacity-70 ${
          formatPrice ? 'pl-9' : 'pl-4'
        } ${
          errors[id]
            ? 'border-rose-500 focus:border-rose-500'
            : 'border-neutral-300 focus:border-black'
        }}`}
      />
      <label
        className={`absolute  top-4 text-sm font-light  transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm  peer-focus:top-1 peer-focus:text-xs peer-focus:text-black ${
          errors[id] ? 'text-rose-500' : 'text-zinc-400'
        } ${formatPrice ? 'left-9' : 'left-4'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

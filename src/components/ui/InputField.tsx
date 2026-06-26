import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const baseClass =
  "w-full rounded-lg border border-line bg-deep/60 px-4 py-2.5 text-sm text-text placeholder:text-text-mute focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon transition-colors";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputField({ label, id, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-dim mb-1">
        {label}
      </label>
      <input id={id} className={baseClass} {...props} />
    </div>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function SelectField({ label, id, options, placeholder, ...props }: SelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-dim mb-1">
        {label}
      </label>
      <select id={id} className={baseClass} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TextareaField({ label, id, ...props }: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-dim mb-1">
        {label}
      </label>
      <textarea id={id} className={baseClass} {...props} />
    </div>
  );
}

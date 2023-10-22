interface Props {
  id: string;
  placeholder?: string;
  useFormHook: object;
  type?: string;
  disable?: boolean;
  defaultValue?: string | number;
}

function Input({
  id,
  placeholder,
  useFormHook,
  type = "text",
  disable,
  defaultValue,
}: Props) {
  return (
    <input
      type={type}
      min={0}
      autoComplete="none"
      id={id}
      placeholder={placeholder}
      disabled={disable}
      defaultValue={defaultValue}
      className="outline-none border border-slate-300 rounded w-3/4 h-10 px-2 py-3 text-slate-700 text-base font-meduim disabled:cursor-not-allowed disabled:bg-slate-100 "
      {...useFormHook}
    />
  );
}
export default Input;

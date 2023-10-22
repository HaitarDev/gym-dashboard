interface Props {
  id: string;
  useFormHook: object;
  disable?: boolean;
  defaultValue?: string | number;
}

function InputDate({ disable, defaultValue, useFormHook, id }: Props) {
  return (
    <input
      id={id}
      type="date"
      className="bg-indigo-500 py-2 px-2 rounded text-sm font-semibold outline-none text-slate-50 text-center "
      disabled={disable}
      defaultValue={defaultValue}
      {...useFormHook}
    />
  );
}
export default InputDate;

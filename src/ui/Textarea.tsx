interface Props {
  id: string;
  placeholder?: string;
  useFormHook: object;
  disable: boolean;
}

function Textarea({ id, placeholder, useFormHook, disable }: Props) {
  return (
    <textarea
      {...useFormHook}
      className="outline-none border border-slate-300 rounded w-3/4 px-2 py-3 text-slate-700 text-base font-meduim disabled:cursor-not-allowed disabled:bg-slate-100"
      placeholder={placeholder}
      disabled={disable}
      id={id}
      cols={30}
      rows={2}
    ></textarea>
  );
}
export default Textarea;

import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import ErrMesage from "./ErrMesage";
import { insertMember } from "../services/apiMembership";
import { useMutation } from "@tanstack/react-query";
import { addDate } from "../utils/DateConvert";
import { motion } from "framer-motion";

interface Props {
  hide: () => void;
}

function AddMember({ hide }: Props) {
  const { dateEnd, dateLeft } = addDate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["membership"],
    mutationFn: (data: object) => insertMember(data),
  });

  const onSubmit = (data: object) => {
    mutate(
      { ...data, date_end: dateEnd, days_left: dateLeft },
      { onSuccess: () => hide() }
    );
    reset();
  };

  return (
    <div className="px-4 py-5 min-w-[28rem] bg-white rounded-lg relative">
      <div className=" flex justify-between ">
        <h4 className="font-serif text-xl font-semibold text-slate-600 mb-6 rounded-xl px-2 py-1 w-2/5 border-b border-slate-300 text-center">
          ADD MEMBER
        </h4>
        <motion.div
          onClick={hide}
          whileHover={{ scale: 1.1, color: "red" }}
          className="text-xl absolute top-4 right-4  cursor-pointer  "
        >
          ✖
        </motion.div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 ml-6"
      >
        <div className="flex flex-col gap-1 border-b border-slate-200 pb-5">
          <label
            className="text-base text-slate-700 font-semibold"
            htmlFor="name"
          >
            Name
          </label>
          <Input
            id="name"
            placeholder="Enter name of member"
            disable={isLoading}
            useFormHook={{
              ...register("name", { required: "this field is required" }),
            }}
          />
          <div className="m-1 h-2">
            {errors?.name ? (
              <ErrMesage>{`${errors.name.message}`}</ErrMesage>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-1 border-b border-slate-200 pb-5">
          <label
            className="text-base text-slate-700 font-semibold"
            htmlFor="price"
          >
            Price
          </label>
          <Input
            id="price"
            type="number"
            placeholder="Enter the price"
            disable={isLoading}
            useFormHook={{
              ...register("price", { required: "this field is required" }),
            }}
          />
          <div className="m-1 h-2">
            {errors?.price ? (
              <ErrMesage>{`${errors.price.message}`}</ErrMesage>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-1 ">
          <label
            className="text-base text-slate-700 font-semibold"
            htmlFor="observations"
          >
            Observation
          </label>
          <Textarea
            id="observations"
            placeholder="Enter some observations .."
            disable={isLoading}
            useFormHook={{ ...register("observations") }}
          />
          <div className="m-1 h-2">
            {errors?.observations ? (
              <ErrMesage>{`${errors.observations.message}`}</ErrMesage>
            ) : null}
          </div>
        </div>

        <div className="flex gap-2 ">
          <Button onClick={handleSubmit(onSubmit)} disable={isLoading}>
            Submit
          </Button>
          <Button type="reset" onClick={() => reset()}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}
export default AddMember;

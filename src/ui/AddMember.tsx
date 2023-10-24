import { addMonths, format } from "date-fns";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";

import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import ErrMesage from "./ErrMesage";
import InputDate from "./InputDate";

import { AddRow } from "../features/members/AddRow";

import ModalHeading from "./ModalHeading";
import Label from "./Label";

interface Props {
  hide: () => void;
}

// type Data = {
//   created_at?: Date;
//   name: string;
//   price: number;
//   date_end?: Date;
//   days_left?: string; // implemente it in backend
//   observations?: string;
// };

function AddMember({ hide }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const { addRow, isLoading } = AddRow();

  //  default start & end Date
  const defaultCurrentDate = format(new Date(), "yyyy-MM-dd");
  const addMonth = addMonths(new Date(defaultCurrentDate), 1);
  const defaultEndDate = format(addMonth, "yyyy-MM-dd");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const endDate = getValues().date_end || defaultEndDate;

    addRow(
      {
        ...data,
        date_end: endDate,
      },
      { onSuccess: () => hide() }
    );

    reset();
  };

  return (
    <div className="px-4 py-5 min-w-[28rem] bg-white rounded-lg relative">
      <div className=" flex justify-between ">
        <ModalHeading />
        <motion.div
          onClick={hide}
          whileHover={{ scale: 1.1, color: "red" }}
          className="text-xl absolute top-4 right-4  cursor-pointer "
        >
          ✖
        </motion.div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 ml-6"
      >
        <div className="flex flex-col gap-1 border-b border-slate-200 pb-5">
          <Label htmlFor="name">NAME</Label>
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
          <Label htmlFor="price">Price</Label>
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
          <Label htmlFor="observations">Observation</Label>
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

        <div className="flex flex-col w-2/5">
          <Label htmlFor="date_end">End date</Label>
          <InputDate
            id="date_end"
            useFormHook={{ ...register("date_end") }}
            defaultValue={defaultEndDate}
          />
          <div className="m-1 h-2">
            {errors?.dateEnd ? (
              <ErrMesage>{`${errors.dateEnd.message}`}</ErrMesage>
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

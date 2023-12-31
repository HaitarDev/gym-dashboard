import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { EditMembers } from "../features/members/EditMembers";
import ErrMesage from "./ErrMesage";
import Textarea from "./Textarea";
import Button from "./Button";
import Input from "./Input";
import { Data } from "../features/members/MembersTable";
import Label from "./Label";
import InputDate from "./InputDate";
import { format } from "date-fns";

interface Props {
  hide: () => void;
  data: Data;
}

function EditMember({ hide, data }: Props) {
  const { name, id, price, observations, date_end } = data;

  const dateEnd = format(new Date(date_end), "yyyy-MM-dd");

  console.log(dateEnd);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { editMembers, isLoading } = EditMembers();

  const onSubmit = (data: object) => {
    const value = data;

    editMembers({ id, value }, { onSuccess: () => hide() });
    reset();
  };

  return (
    <div className="px-4 py-5 min-w-[28rem] bg-white rounded-lg relative">
      <div className=" flex justify-between ">
        <h4 className="font-serif text-xl font-semibold text-slate-600 mb-6 rounded-xl px-2 py-1 w-2/5 border-b border-slate-300 text-center">
          EDIT MEMBER
        </h4>
        <motion.div
          onClick={hide}
          whileHover={{ scale: 1.1, color: "red" }}
          className="text-xl absolute top-4 right-4  cursor-pointer"
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
            defaultValue={name}
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
            defaultValue={price}
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
            defaultValue={observations}
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
            defaultValue={dateEnd}
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
export default EditMember;

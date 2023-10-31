import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Data } from "../services/apiMembership";
import { format } from "date-fns";

type Props = {
  data: Data[] | undefined;
};

function PriceCharts({ data }: Props) {
  const revisionData = data?.map((field) => {
    return {
      label: format(new Date(field.created_at), "MMM dd"),
      price: field.price,
    };
  });

  return (
    <div className="min-w-[1000px] bg-slate-50 p-2  shadow">
      <h2 className="font-semibold text-lg text-slate-800 mb-8 mt-4  ">
        Prices:
      </h2>
      <ResponsiveContainer height={500} width={"100%"}>
        <AreaChart data={revisionData} width={700} height={300}>
          <XAxis
            dataKey={"label"}
            tickLine={{ stroke: "#141515" }}
            tick={{ fill: "#43123" }}
          />
          <YAxis unit={"$"} tick={{ fill: "#43123" }} />
          <CartesianGrid strokeDasharray={4} />
          <Tooltip />
          <Area
            dataKey={"price"}
            type="monotone"
            stroke="#4f46e5"
            fill="#cfd2fe"
            strokeWidth={2}
            name="Price"
            unit={"DH"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default PriceCharts;

import { useSearchParams } from "react-router-dom";
import FilteredButton from "./FilteredButton";

function FilterDays() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterData = [
    { label: "Last 7 days", value: "7" },
    { label: "Last 30 days", value: "30" },
    { label: "Last 90 days", value: "90" },
  ];

  const params = searchParams.get("filter_days") || "90";

  const handleClick = (value: string) => {
    searchParams.set("filter_days", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex align-middle border border-slate-300 rounded-lg text-slate-800 font-medium text-sm p-1 gap-1">
      {filterData.map((data) => (
        <FilteredButton
          key={data.value}
          onClick={() => handleClick(data.value)}
          active={params === data.value}
        >
          {data.label}
        </FilteredButton>
      ))}
    </div>
  );
}
export default FilterDays;

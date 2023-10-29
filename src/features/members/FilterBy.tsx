import { useSearchParams } from "react-router-dom";
import FilteredButton from "../../ui/FilteredButton";

function FilterBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterData = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Not active", value: "not-active" },
  ];

  const params = searchParams.get("is_active") || "all";

  const handleClick = (value: string) => {
    searchParams.set("is_active", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex align-middle border border-slate-300 rounded-lg text-slate-800 font-medium">
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
export default FilterBy;

import { useMembersBeforeDate } from "../features/members/useMembersBeforeDate";
import FilterDays from "../ui/FilterDays";
import H1Pages from "../ui/H1Pages";
import Stats from "../ui/Stats";

import { CgGym } from "react-icons/cg";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdDoneAll, MdRemoveDone } from "react-icons/md";
import { formatCurrency } from "../utils/service";
import { isAfter } from "date-fns";
import Spinner from "../ui/Spinner";
import PriceCharts from "../ui/PriceCharts";
import TodayActivities from "../ui/TodayActivities";

function Home() {
  const { data, isLoading } = useMembersBeforeDate();

  const getIsActive = (value: string) => isAfter(new Date(value), new Date());

  // CALCUL THE VALUES
  const totalMembers = data?.length;
  const totalPrice = data?.reduce(
    (acc, member) => acc + Number(member.price),
    0
  );
  const activeMembers = data?.filter((member) =>
    getIsActive(member.date_end)
  ).length;
  const notActiveMembers = data?.filter(
    (member) => !getIsActive(member.date_end)
  ).length;

  return (
    <div>
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <H1Pages>DASHBOARD</H1Pages>
          <FilterDays />
        </div>

        <div className="flex justify-between">
          <Stats
            key={1}
            bgColor="bg-indigo-300"
            color="text-indigo-800"
            title="MEMBERS"
            icon={<CgGym />}
            value={totalMembers}
          />
          <Stats
            key={34}
            bgColor="bg-yellow-300"
            color="text-yellow-800"
            title="PRICE"
            icon={<FaMoneyBill1Wave />}
            value={formatCurrency(totalPrice)}
          />
          <Stats
            key={23}
            bgColor="bg-green-300"
            color="text-green-800"
            title="ACTIVE MEMBERS"
            icon={<MdDoneAll />}
            value={activeMembers}
          />
          <Stats
            key={45}
            bgColor="bg-red-300"
            color="text-red-800"
            title="NOT ACTIVE MEMBERS"
            icon={<MdRemoveDone />}
            value={notActiveMembers}
          />
        </div>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex justify-between">
          <PriceCharts data={data} />
          <TodayActivities data={data} />
        </div>
      )}
    </div>
  );
}
export default Home;

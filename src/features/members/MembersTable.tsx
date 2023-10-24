import Spinner from "../../ui/Spinner";
import Column from "../../ui/Column";
import Row from "../../ui/Row";
import { FetchMembers } from "./FetchMembers";
import MemberRow from "../../ui/MemberRow";
import { useSearchParams } from "react-router-dom";
import { isAfter } from "date-fns";

export type Data = {
  id: number;
  created_at: string;
  name: string;
  price: number;
  date_end: string;
  days_left: string; // implement it in backend
  observations?: string;
};

function MembersTable() {
  const { members, isLoadingMembers } = FetchMembers();

  const [searchParams] = useSearchParams();
  const params = searchParams.get("is_active") || "all";

  let filtredMembers: Data[] | undefined;

  const getIsActive = (value: string) => isAfter(new Date(value), new Date());

  if (params === "all") filtredMembers = members;
  if (params === "not-active")
    filtredMembers = members?.filter((member) => !getIsActive(member.date_end));
  if (params === "active")
    filtredMembers = members?.filter((member) => getIsActive(member.date_end));

  if (isLoadingMembers) return <Spinner />;

  return (
    <div className="overflow-y-scroll">
      <Row className="font-semibold bg-slate-50 border-none">
        <Column>NAME</Column>
        <Column>START DATE</Column>
        <Column>END DATE</Column>
        <Column>PRICE</Column>
        <Column>IS ACTIVE</Column>
        <Column>OBSERVATIONS</Column>
        <Column>EDIT | DELETE</Column>
      </Row>

      {filtredMembers?.map((member: Data) => (
        <MemberRow member={member} key={member.id} />
      ))}
    </div>
  );
}

export default MembersTable;

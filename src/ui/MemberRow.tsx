import { motion } from "framer-motion";
import { formatDate } from "../utils/DateConvert";
import Column from "./Column";
import Row from "./Row";
import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import Icon from "./Icon";
import { isAfter } from "date-fns";
import { DeleteMembers } from "../features/members/DeleteMembers";
import { useState } from "react";
import Modal from "./Modal";
import EditMember from "./EditMember";
import { Data } from "../features/members/MembersTable";
import { formatCurrency } from "../utils/service";

type Props = {
  member: Data;
};

function MemberRow({ member }: Props) {
  const removeMember = DeleteMembers();

  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const showModal = () => setIsShowEditModal(true);
  const hideModal = () => setIsShowEditModal(false);

  // CHECK IF MEMBER ACTIVE
  const isActive = (endDate: string) => {
    const getIsActive = isAfter(new Date(endDate), new Date());

    if (getIsActive)
      return <p className="rounded-full text-green-500 font-bold ">active</p>;
    else
      return <p className="rounded-full text-red-500 font-bold ">not active</p>;
  };

  return (
    <motion.div
      key={member.id}
      initial={{ backgroundColor: "#FFF" }}
      whileHover={{ backgroundColor: "#f8fafc" }}
    >
      <Row className="font-semibold">
        <Column>{member.name}</Column>
        <Column>{formatDate(member.created_at)}</Column>
        <Column>{formatDate(member.date_end)}</Column>
        <Column>{formatCurrency(member.price)}</Column>
        <Column>{isActive(member.date_end)}</Column>
        <Column>{member.observations}</Column>
        <Column className="flex justify-evenly">
          <Icon onClick={showModal} type="column" as="edit">
            <BiSolidEdit />
          </Icon>
          <Icon
            onClick={() => removeMember(member.id)}
            type="column"
            as="delete"
          >
            <TiDelete />
          </Icon>
        </Column>
      </Row>
      {isShowEditModal ? (
        <Modal hide={hideModal}>
          <EditMember hide={hideModal} data={member} />
        </Modal>
      ) : null}
    </motion.div>
  );
}
export default MemberRow;

import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { formatDate } from "../../utils/DateConvert";
import Spinner from "../../ui/Spinner";
import Icon from "../../ui/Icon";
import Column from "../../ui/Column";
import Row from "../../ui/Row";

import { FetchMembers } from "./FetchMembers";
import { DeleteMembers } from "./DeleteMembers";
import { useState } from "react";
import Modal from "../../ui/Modal";
import EditMember from "../../ui/EditMember";

function MembersTable() {
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const showModal = () => setIsShowEditModal(true);
  const hideModal = () => setIsShowEditModal(false);

  const { members, isLoadingMembers } = FetchMembers();

  const { removeMember } = DeleteMembers();

  if (isLoadingMembers) return <Spinner />;
  return (
    <div className="overflow-y-scroll">
      <Row className="font-semibold bg-slate-50">
        <Column>NAME</Column>
        <Column>START DATE</Column>
        <Column>END DATE</Column>
        <Column>
          PRICE <span className="font-light ml-1">(dh)</span>
        </Column>
        <Column>DAYS LEFT</Column>
        <Column>OBSERVATIONS</Column>
        <Column>EDIT | DELETE</Column>
      </Row>

      {members?.map((member) => (
        <Row key={member.id} className="font-semibold">
          <Column>{member.name}</Column>
          <Column>{formatDate(member.created_at)}</Column>
          <Column>{formatDate(member.date_end)}</Column>
          <Column>{member.price}</Column>
          <Column>{member.days_left}</Column>
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
          {isShowEditModal ? (
            <Modal hide={hideModal}>
              <EditMember hide={hideModal} id={member.id} />
            </Modal>
          ) : null}
        </Row>
      ))}
    </div>
  );
}
export default MembersTable;

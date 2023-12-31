import { AiOutlineUserAdd } from "react-icons/ai";
import MembersTable from "../features/members/MembersTable";
import H1Pages from "../ui/H1Pages";
import { useState } from "react";
import Modal from "../ui/Modal";
import AddMember from "../ui/AddMember";
import FilterBy from "../features/members/FilterBy";

function Members() {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => setIsShowModal(true);
  const hideModal = () => setIsShowModal(false);

  return (
    <div>
      <div className="flex justify-between mb-4 ">
        <H1Pages>GYM MEMBERS</H1Pages>
        <div className="flex gap-12 items-center">
          <button
            onClick={showModal}
            className="flex items-center gap-2 px-4 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 duration-200 text-slate-50 font-semibold text-sm"
          >
            Add member <AiOutlineUserAdd />
          </button>
          <FilterBy />
        </div>
      </div>
      <MembersTable />

      {isShowModal ? (
        <div>
          <Modal hide={hideModal}>
            <AddMember hide={hideModal} />
          </Modal>
        </div>
      ) : null}
    </div>
  );
}
export default Members;

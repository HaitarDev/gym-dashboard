import H1Pages from "../ui/H1Pages";
import SignUpForm from "../ui/SignUpForm";

function Users() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-evenly ">
      <H1Pages>SIGN UP A NEW ADMIN</H1Pages>
      <SignUpForm />
    </div>
  );
}
export default Users;

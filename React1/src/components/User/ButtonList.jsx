import FetchButton from "@/components/User/FetchButton";
import RegisterButton from "@/components/User/RegisterButton";
import UpdateButton from "@/components/User/UpdateButton";
import DeleteButton from "@/components/User/DeleteButton";

export const ButtonList = () => {
  return (
    <section>
      <FetchButton />
      <RegisterButton />
      <UpdateButton />
      <DeleteButton />
    </section>
  );
};

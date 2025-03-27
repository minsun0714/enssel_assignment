import FetchButton from "@/components/Menu/FetchButton";
import RegisterButton from "@/components/Menu/RegisterButton";
import DeleteButton from "@/components/Menu/DeleteButton";

export const ButtonList = () => {
  return (
    <section>
      <FetchButton />
      <RegisterButton />
      <DeleteButton />
    </section>
  );
};

import NavigationBar from "@/source/components/common/navigationBar";
import { adminSidebars } from "@/source/constant/data";
import SignOut from "./signOut";

const Sidebars = () => {
  return (
    <div>
      {adminSidebars.map((item, i) => (
        <NavigationBar item={item} key={i} />
      ))}
      <SignOut pathname="ADMIN" />
    </div>
  );
};

export default Sidebars;

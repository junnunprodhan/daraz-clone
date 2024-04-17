import NavigationBar from "@/source/components/common/navigationBar";
import { vendorSidebars } from "@/source/constant/data";
import SignOut from "./signOut";

const ShopSidebar = () => {
  return (
    <div>
      {vendorSidebars.map((item, i) => (
        <NavigationBar item={item} key={i} />
      ))}
      <SignOut pathname="SHOP" />
    </div>
  );
};

export default ShopSidebar;

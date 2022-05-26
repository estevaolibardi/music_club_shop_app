import { AdminHeaderContainer } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import Input from "../input";

const AdminHeader = ({ openClose }) => {
  return (
    <AdminHeaderContainer>
      <GiHamburgerMenu onClick={() => openClose()} />
      <Input/>
      <figure>

        <figcaption>Profile Image</figcaption>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile img"
        />
      </figure>
    </AdminHeaderContainer>
  );
};
export default AdminHeader;

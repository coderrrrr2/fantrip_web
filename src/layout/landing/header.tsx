import logo from "@/assets/logo_1.svg";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import useAuth from "@/hooks/authUser";
import { FaCircleUser, FaRegUser } from "react-icons/fa6";
import { LuKeyRound } from "react-icons/lu";
const LandingHeader = () => {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <div className="absolute z-10 left-0 top-6 w-full">
        <div className="box duration-100">
          <div
            className={` bg-[#FFFFFF33] rounded-[50px] p-5 lg:px-12 flex justify-between items-center`}
          >
            <div>
              <Link to={"/"}>
                <img src={logo} alt="logo" className="w-28 lg:w-auto" />
              </Link>
            </div>
            <div>
              <div className="lg:hidden text-white">
                <TiThMenuOutline
                  className="text-xl cursor-pointer"
                  onClick={() => setOpen(true)}
                />
              </div>
              <ul className="hidden lg:flex items-center gap-x-6 lg:gap-x-10 text-white">
                <li className="hidden xl:block">
                  <Link to={""}>Get the app</Link>
                </li>
                <li>
                  <Menu>
                    <MenuButton>
                      <div className="flex gap-x-2 items-center">
                        Features{" "}
                        <ChevronDownIcon size={14} className="text-xs" />
                      </div>
                    </MenuButton>
                    <MenuList></MenuList>
                  </Menu>
                </li>
                <li>
                  <Link to={"/find-stay"}>Find a fan stay</Link>
                </li>
                <li>
                  <Link to={"/user/host-setup"}>Host a fan</Link>
                </li>
                <li>
                  <Link to={""}>FAQs</Link>
                </li>
                {!isLoggedIn && (
                  <li>
                    <Link to={"/auth/login"}>Login</Link>
                  </li>
                )}
                {isLoggedIn && <li>
                  <Menu>
                    <MenuButton className="p-0 m-0">
                      <div className="flex gap-x-2 items-center relative top-[2px]">
                        <FaCircleUser className="text-xl xl:text-2xl" />
                      </div>
                    </MenuButton>
                    <MenuList>
                      <MenuItem className="border-b">
                        <Link
                          to={"/user/profile"}
                          className="flex gap-x-3 !py-3 items-center text-black"
                        >
                          <FaRegUser className="text-xl" />
                          <p>Profile</p>
                        </Link>
                      </MenuItem>
                      <MenuItem className="border-b3">
                        <Link
                          to={"/auth/login"}
                          className="flex gap-x-3 !py-3 items-center text-black"
                        >
                          <FaRegUser className="text-xl" />
                          <p>Guest</p>
                        </Link>
                      </MenuItem>
                      <MenuItem className="">
                        <Link
                          to={"/auth/login"}
                          className="flex gap-x-3 items-center !py-3 text-black"
                        >
                          <LuKeyRound className="text-xl" />
                          <p>Host</p>
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        isOpen={open}
        placement="left"
        size={"xs"}
        onClose={() => setOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <MobileMenu close={() => setOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default LandingHeader;

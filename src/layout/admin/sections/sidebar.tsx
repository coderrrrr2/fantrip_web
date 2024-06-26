import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { RouteType, Routes } from "./routes";
import { Link, useLocation } from "react-router-dom";
import { BsGear } from "react-icons/bs";
import useDialog from "@/hooks/useDialog";
import LogoutModal from "@/modules/auth/modals/logout-modal";
import logo from "@/assets/images/logo_2.png";
import BtnContent from "@/components/btn-content";
import ProfileAvatar from "@/components/ProfileAvatar";
import useAuth from "@/hooks/authUser";

const SidebarLayout = () => {
  const path = useLocation();
  const { Dialog, setShowModal } = useDialog();
  const { user } = useAuth();

  return (
    <div className="left-0 top-0  fixed overflow-y-hidden  bg-[#0D0D0D] text-white">
      <Sidebar
        customBreakPoint="1024px"
        className="h-screen overflow-y-hidden !border-none scroll-pro fs-700 fw-500 px-4"
        backgroundColor=""
        width="260px"
      >
        <div className="py-4 lg:py-6 lg:pb-8 items-center">
          <Link to="/" className="gap-x-1">
            <img src={logo} alt="logo" className="w-7/12 2xl:w-8/12" />
          </Link>
        </div>
        <Menu
          className="overflow-y-auto relative scroll-pro pt-5"
          transitionDuration={600}
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0)
                return {
                  color: active ? "white" : "#b5b3b3",
                  marginTop: "4px",
                  // height: "auto",
                  padding: "3px 1px 3px 0px !important ",
                  // textAlign: "left",
                  // fontWeight: active ? "600" : "500",
                  // borderLeft: active ? "5px solid #090979" : "",
                  // background: active ? "#e3f9ff" : "",
                  // "&:hover": {
                  //   color: "black",
                  //   background: "#e3f9ff",
                  //   borderLeft: "5px solid #090979",
                  //   fontWeight: "500",
                  // },
                };
            },
          }}
        >
          {Routes.map((item) => {
            return (
              <div key={item.name}>
                {!!item.submenu.length ? (
                  <SubMenu label={item.name} icon={item.icon} key={item.name}>
                    {item.submenu.map((item: RouteType, i) => (
                      <MenuItem
                        component={<Link to={item.route} />}
                        active={path.pathname === item.route && true}
                        key={i}
                      >
                        <p className="fs-400">{item.name}</p>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    component={<Link to={item.route} />}
                    icon={item.icon}
                    active={path.pathname === item.route && true}
                    key={item.name}
                  >
                    <p className="fs-400">{item.name}</p>
                  </MenuItem>
                )}
              </div>
            );
          })}
          <MenuItem
            component={<Link to={"/user/profile"} />}
            icon={<BsGear className="text-xl" />}
            className="mt-12 border-t border-[#FFFFFF] pt-6"
          >
            <p className="fs-400">Settings</p>
          </MenuItem>
          <div className="mt-5">
            <div className="flex items-center gap-x-2">
              <div className="shrink-0">
                <ProfileAvatar
                  url={user.image}
                  name={user.name}
                  size={48}
                  font={17}
                  type="dark"
                />
              </div>
              <div>
                <p className="fs-500">{user.name}</p>
                <p className="text-[#AEB9E1] fs-300">Account settings</p>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-8">
            <div
              onClick={() => setShowModal(true)}
              className="flex justify-center py-3 rounded-[5.5px] cursor-pointer hover:grayscale logout-grad"
            >
              <BtnContent name="Logout" />
            </div>
          </div>
        </Menu>
      </Sidebar>
      <Dialog title="" size="xs">
        <LogoutModal CloseModal={() => setShowModal(false)} />
      </Dialog>
    </div>
  );
};

export default SidebarLayout;

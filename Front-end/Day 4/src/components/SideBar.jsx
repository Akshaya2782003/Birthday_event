import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
  } from "cdbreact";
  import { NavLink } from "react-router-dom";
  
  const Sidebar = () => {
    return (
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#FFFFFF" backgroundColor="#26867e" >
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Sidebar
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns" textColor="#FFFFFF">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/tables" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table" textColor="#FFFFFF">Services</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user" textColor="#FFFFFF">About</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line" textColor="#FFFFFF">Logout</CDBSidebarMenuItem>
              </NavLink>
  
              <NavLink
                exact
                to="/hero404"
                target="_blank"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle" textColor="#FFFFFF">Info</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "20px 5px"
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;
  
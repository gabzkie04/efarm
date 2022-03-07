export const NavBarSettings = () => {

  try{
    const userData = JSON.parse(localStorage.getItem("farmUserInfo"));
    const role = userData.data.userInfo.role;

      switch (role) {
        case "admin":
          return AdminNavBarData;
        case "farmer":
          return FarmerNavBarData;
        case "client":
          return ClientNavBarData;
        default:
          return null;
      }
  }catch(e){
     window.location.href = "/login";
  }
};

const AdminNavBarData = {
  bg: "success",
  variant: "dark",
  brand: {
    link: "/admin-dashboard",
    value: "E-Farm",
  },
  links: [
    {
      link: "/admin-dashboard",
      value: "Home",
      dropdown: [],
    },
    {
      link: "/about",
      value: "About",
      dropdown: [],
    },
    {
      link: "/farmers-group",
      value: "Farmers Group",
      dropdown: [],
    },
    {
      link: "/farmers",
      value: "Farmers",
      dropdown: [],
    },
    {
      link: "/transactions",
      value: "Transactions",
      dropdown: [],
    },
    {
      link: "/settings",
      value: "Settings",
      dropdown: [
        {
          link: "/profile",
          value: "Profile",
        },
        {
          link: "/logout",
          value: "Logout",
        },
      ],
    },
  ],
};

const FarmerNavBarData = {
  bg: "success",
  variant: "dark",
  brand: {
    link: "/farm-dashboard",
    value: "E-Farm",
  },
  links: [
    {
      link: "/farm-dashboard",
      value: "Home",
      dropdown: [],
    },
    {
      link: "/about",
      value: "About",
      dropdown: [],
    },
    {
      link: "/settings",
      value: "Settings",
      dropdown: [
        {
          link: "/profile",
          value: "Profile",
        },
        {
          link: "/logout",
          value: "Logout",
        },
      ],
    },
  ],
};

const ClientNavBarData = {
  bg: "success",
  variant: "dark",
  brand: {
    link: "/admin-dashboard",
    value: "E-Farm",
  },
  links: [
    {
      link: "/admin-dashboard",
      value: "Home",
      dropdown: [],
    },
    {
      link: "/about",
      value: "About",
      dropdown: [],
    },
    {
      link: "/settings",
      value: "Settings",
      dropdown: [
        {
          link: "/profile",
          value: "Profile",
        },
        {
          link: "/logout",
          value: "Logout",
        },
      ],
    },
  ],
};

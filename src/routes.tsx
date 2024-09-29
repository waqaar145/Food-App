import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Restaurant from "./screens/Restaurant";
import RestaurantDetail from "./screens/RestaurantDetail";
import Cart from "./screens/Cart";

export interface RouteConfig {
  name: string;
  component: any;
  options?: any;
  isProtected?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: "Login",
    component: Login,
    options: { headerShown: false },
    isProtected: false,
  },
  {
    name: "Home",
    component: Home,
    isProtected: true,
  },
  {
    name: "Profile",
    component: Profile,
    isProtected: true,
  },
  {
    name: "Restaurant",
    component: Restaurant,
    isProtected: true,
  },
  {
    name: "RestaurantDetail",
    component: RestaurantDetail,
    isProtected: true,
  },
  {
    name: "Cart",
    component: Cart,
    isProtected: true,
  },
];

export default routes;

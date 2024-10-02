import s from "./Layout";

const Layout = ({ children }) => {
  return <main className={s.container}>{children}</main>;
};
export default Layout;

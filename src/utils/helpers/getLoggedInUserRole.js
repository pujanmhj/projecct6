export const getLoggedInUserRole = () => {
  return  sessionStorage.getItem("role");
}

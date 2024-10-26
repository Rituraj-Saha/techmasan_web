import { open } from "../features/contactAlertBox/ContactAlertSlice";

export const handleOpenAlertContact = (dispatch) => {
  dispatch(open());
};

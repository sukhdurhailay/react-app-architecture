import { connect } from "react-redux";

import { setMenu } from "../../../store/menu/menu.actions";
import MenuUI from "./menu.ui";

export default connect(
  state => ({
    selectedItem: state.menu.selectedItem
  }),
  dispatch => ({
    handleMenuItemClick: url => {
      dispatch(setMenu(url));
    }
  })
)(MenuUI);

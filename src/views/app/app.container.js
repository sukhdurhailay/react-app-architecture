import { connect } from "react-redux";

import AppUI from "./app.ui";

export default connect(state => ({
  selectedItem: state.menu.selectedItem
}))(AppUI);

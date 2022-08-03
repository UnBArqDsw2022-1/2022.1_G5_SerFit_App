import { createAppContainer, createSwitchNavigator} from "react-navigation";

import cadastroUsuario from './pages/cadastroUsuario';

const Routes = createAppContainer(
  createSwitchNavigator({
    cadastroUsuario
  })
);

export default Routes;
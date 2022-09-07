import { createAppContainer, createSwitchNavigator} from "react-navigation";

import cadastroUsuario from './pages/cadastroUsuario';
import cadastroPersonal from './pages/cadastroPersonal';

const Routes = createAppContainer(
  createSwitchNavigator({
    cadastroUsuario,
    cadastroPersonal
  })
);

export default Routes;
import React, { useContext } from 'react';

import AuthContext from '../contexts/auth';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

const Routes = () => {	
	const { auth } = useContext(AuthContext);

  	return auth ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
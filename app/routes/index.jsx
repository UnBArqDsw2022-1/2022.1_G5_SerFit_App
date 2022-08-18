import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';
import { View, ActivityIndicator } from "react-native";


const Routes = () => {	
	const { auth, loading } = useContext(AuthContext);

	if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }

  	return auth ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
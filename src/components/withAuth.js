import React, { useEffect } from 'react';
import RestrictedPage from "../pages/RestrictedPage";

const withAuth = (WrappedComponent) => {
    const AuthWrapper = (props) => {
        useEffect(() => {
            const jwt = localStorage.getItem('token');
            if (!jwt) {
                return (
                    <div>
                        <RestrictedPage></RestrictedPage>
                    </div>
                )
            }
        }, []);

        // Render the wrapped component if authenticated
        return <WrappedComponent {...props} />;
    };

    return AuthWrapper;
};

export default withAuth;

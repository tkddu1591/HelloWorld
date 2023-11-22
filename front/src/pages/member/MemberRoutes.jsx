import React, {Suspense, useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import Fallback from "../Fallback";



function MemberRoutes({fallback}) {
    const nav = useNavigate();
    useEffect(() => {
        const accessToken = localStorage.getItem("helloWorld_ACCESS_TOKEN");
        if(accessToken) nav('/');
    }, [nav]);
    return (
        <Suspense fallback={<Fallback fallback={fallback}></Fallback>}>
            <Outlet/>
        </Suspense>
    );
};

export default MemberRoutes;
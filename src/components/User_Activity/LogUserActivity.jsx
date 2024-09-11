import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LogUserActivity = () => {
    const location = useLocation();
    const [userLog, setUserLog] = useState('/');

    useEffect(() => {
        const logUserActivity = async (page) => {
            // Extract the base path
            const basePath = page?.split('/')[1] ? `/${page.split('/')[1]}` : '/';

            // Update the state with the new log
            setUserLog((previousData) => {
                const newLog = previousData + basePath;
                
                // Log the base path
                axios.post('http://localhost:8000/api/admin/addlogs', { log: newLog })
                    .catch(() => {
                        // Handle error silently
                    });


                return newLog;
            });
        };
        logUserActivity(location.pathname);
    }, [location.pathname]); // Only depends on pathname to trigger effect

    return null; // This component does not render anything
};

export default LogUserActivity;

import React, {useEffect, useState} from "react";

const useUser = () => {

    // Получаем хук для загрузки
    const [user, setUser] = useState({jobTitle: "Загрузка..."});
    useEffect( () => {
        // Liferay.Service(
        //     '/user/get-current-user',
        //     function(obj) {
        //         setUser(obj);
        //     }
        // );
    }, [setUser]);

    return{
        user
    };
};

export default useUser;
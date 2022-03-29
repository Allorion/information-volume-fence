import React, {useEffect, useState} from "react";
import useLoading from "../../hooks/useLoading";

const ListWaterBodies = () => {

    // Получаем хук для вывода загрузки
    const {loading, handleLoading} = useLoading();
    const loadingListWaterBodies = loading;

    const [arrayObj, setArrayObj] = useState([]);

    useEffect(() => {
        handleLoading(true);
        // Liferay.Service(
        //     '/factualwaterusage.waterobjectusetype/get-by-id',
        //     {
        //         id: '',
        //     },
        //     function (obj) {
        //         setArrayObj(obj.result.content);
        //     }
        // );
        handleLoading(false);
    }, [])

    return {arrayObj, loadingListWaterBodies};
}

export default ListWaterBodies;

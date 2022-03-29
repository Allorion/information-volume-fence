import React, {useEffect, useState} from "react";
import useLoading from "../../hooks/useLoading";

const ListWaterQualityCategories = () => {

    // Получаем хук для вывода загрузки
    const {loading, handleLoading} = useLoading();
    const loadingListWaterQualityCategories = loading;

    const [listWaterQualityCategories, setListWaterQualityCategories] = useState([]);

    useEffect(() => {
        handleLoading(true);
        // Liferay.Service(
        //     '/factualwaterusage.categoryqualitywater/get-by-id',
        //     {
        //         id: '',
        //     },
        //     function (obj) {
        //         setListWaterQualityCategories(obj.result.content);
        //     }
        // );
        handleLoading(false);
    }, []);

    return {listWaterQualityCategories, loadingListWaterQualityCategories};
};

export default ListWaterQualityCategories;
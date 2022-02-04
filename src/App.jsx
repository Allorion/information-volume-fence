import React, {useState} from "react";
import SearchInformationVolumeFence from "./pages/information-volume-fence-form-create";
import AppContext from "./pages/information-volume-fence-form-create/components/AppContext";

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [nameOrganization, setNameOrganization] = useState('');
    const [nameWaterObject, setNameWaterObject] = useState({
        code: 'Код водного объекта',
        name: 'Название водного объекта'
    })

    const [detailsTable, setDetailsTable] = useState([]);

    const userSettings = {
        isLoading,
        setIsLoading,
        nameOrganization,
        setNameOrganization,
        nameWaterObject,
        setNameWaterObject,
        detailsTable,
        setDetailsTable
    };

    return (
        <AppContext.Provider value={userSettings}>
            <SearchInformationVolumeFence/>
        </AppContext.Provider>
    );
};

export default App;
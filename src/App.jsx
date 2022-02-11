import React, {useState} from "react";
import SearchInformationVolumeFence from "./pages/information-volume-fence-form-create";
import AppContext from "./pages/information-volume-fence-form-create/components/AppContext";
import SearchInformation
    from "./pages/information-volume-water-intake/search-information/SearchInformation";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

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
            <BrowserRouter>
                <Routes>
                    <Route path="web/allorion/fw-list/" element={<SearchInformation />} />
                    <Route path="web/allorion/fw-add/" element={<SearchInformationVolumeFence/>} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
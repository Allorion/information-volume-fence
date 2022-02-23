// import React, {useState} from "react";
//
//
//
// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";
// import Home from "./pages/testForm/Home";
//
// const App = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [nameOrganization, setNameOrganization] = useState('');
//     const [nameWaterObject, setNameWaterObject] = useState({
//         code: 'Код водного объекта',
//         name: 'Название водного объекта'
//     })
//
//     const [detailsTable, setDetailsTable] = useState([]);
//
//     const userSettings = {
//         isLoading,
//         setIsLoading,
//         nameOrganization,
//         setNameOrganization,
//         nameWaterObject,
//         setNameWaterObject,
//         detailsTable,
//         setDetailsTable
//     };
//
//     return (
//         <AppContext.Provider value={userSettings}>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path='/' element={<Home/>}/>
//                     <Route path="fw-list/" element={<SearchInformation />} />
//                 </Routes>
//             </BrowserRouter>
//         </AppContext.Provider>
//     );
// };
//
// export default App;

import React from "react";

// Routing
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// Страницы
import SearchInformation from "./pages/information-volume-water-intake/information-volume-fence/SearchInformation";
import GlobalTemplate from "./pages/information-volume-water-intake/information-volume-fence-create/GlobalTemplate";
import FactWusage from "./pages/information-volume-water-intake/fact-wusage/FactWusage";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/water-usage/fact-wusage/" element={<FactWusage/>}/>
                <Route path="/water-usage/fact-wusage/fw-list" element={<SearchInformation/>}/>
                <Route path="fw-add/" element={<GlobalTemplate/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
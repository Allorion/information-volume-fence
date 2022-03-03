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
import FactWusage from "./pages/fact-wusage/FactWusage";
import SearchReportsVolumeDischarge
    from "./pages/information-volume-reset/information-volume-reset-list/SearchReportsVolumeDischarge";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/web/guest/factual-water-usage/" element={<FactWusage/>}/>
                <Route path="/web/guest/factual-water-usage/fw-list/" element={<SearchInformation/>}/>
                <Route path="/web/guest/factual-water-usage/fw-add/" element={<GlobalTemplate/>}/>
                <Route path='/web/guest/factual-water-usage/fd-list/' element={<SearchReportsVolumeDischarge/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
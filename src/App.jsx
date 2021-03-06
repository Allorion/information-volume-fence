// *********************************
// Компонент с роутингом на страницы
// *********************************



import React from "react";

// Routing
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// Страницы
import SearchInformation from "./pages/information-volume-water-intake/information-volume-fence-list/SearchInformation";
import AddReportsVolumeIntake from "./pages/information-volume-water-intake/information-volume-fence-add/AddReportsVolumeIntake";
import FactWusage from "./pages/fact-wusage/FactWusage";
import SearchReportsVolumeDischarge
    from "./pages/information-volume-reset/information-volume-reset-list/SearchReportsVolumeDischarge";
import AddReportsVolumeDischarge
    from "./pages/information-volume-reset/information-volume-reset-add/AddReportsVolumeDischarge";
import SearchReportWaterQualityAccounting
    from "./pages/information-water-quality-accounting/information-water-quality-accounting-list/SearchReportWaterQualityAccounting";
import AddReportWaterQualityAccounting
    from "./pages/information-water-quality-accounting/information-water-quality-accounting-add/AddReportWaterQualityAccounting";
import Home2TpModule from "./pages/2tp-module/Home2TpModule";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/web/guest/factual-waterusage/" element={<FactWusage/>}/>
                <Route path="/web/guest/factual-waterusage/fw-list/" element={<SearchInformation/>}/>
                <Route path="/web/guest/factual-waterusage/fw-add/" element={<AddReportsVolumeIntake/>}/>
                <Route path='/web/guest/factual-waterusage/fd-list/' element={<SearchReportsVolumeDischarge/>}/>
                <Route path='/web/guest/factual-waterusage/fd-add/' element={<AddReportsVolumeDischarge/>}/>
                <Route path='/web/guest/factual-waterusage/fq-list/' element={<SearchReportWaterQualityAccounting/>}/>
                <Route path='/web/guest/factual-waterusage/fq-add/' element={<AddReportWaterQualityAccounting/>}/>

                {/* 2ТП */}
                <Route path="/web/guest/2tp-report/" element={<Home2TpModule/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
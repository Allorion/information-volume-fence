import React from "react";
import {Box, Grid, ImageList, ImageListItem, Typography} from "@mui/material";
import AuthorizationDocument from "./component/AuthorizationDocument";
import WaterSupplySource from "./component/WaterSupplySource";
import FencePeriods from "./component/FencePeriods";
import UsedWater from "./component/UsedWater";
import AvailableAccounted from "./component/AvailableAccounted";
import UsedForTheYearTemplate from "./component/UsedForTheYearTemplate";
import TransmittedWithoutUseTemplate from "./component/TransmittedWithoutUseTemplate";
import TransmittedAfterUseTemplate from "./component/TransmittedAfterUseTemplate";


export default function MovementWaterResourcesTemplate() {

    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <ImageList variant="masonry" cols={2} gap={4}>
                        <ImageListItem>
                            <Box p={1}>
                                <AuthorizationDocument/>
                            </Box>
                        </ImageListItem>
                        <ImageListItem>
                            <Box p={1}>
                                <WaterSupplySource/>
                            </Box>
                        </ImageListItem>
                        <ImageListItem>
                            <Box p={1}>
                                <FencePeriods/>
                            </Box>
                        </ImageListItem>
                        <ImageListItem>
                            <Box p={1}>
                                <AvailableAccounted/>
                            </Box>
                        </ImageListItem>
                        <ImageListItem>
                            <Box p={1}>
                                <UsedWater/>
                            </Box>
                        </ImageListItem>
                        <ImageListItem>
                            <Box p={1}>
                                <UsedForTheYearTemplate/>
                            </Box>
                        </ImageListItem>
                        <ImageListItem>
                            <Box p={1}>
                                <TransmittedWithoutUseTemplate/>
                            </Box>
                            <ImageListItem>
                            </ImageListItem>
                            <Box p={1}>
                                <TransmittedAfterUseTemplate/>
                            </Box>
                        </ImageListItem>
                    </ImageList>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

// <React.Fragment>
//     <Grid container sx={{textOverflow: 'ellipsis'}}>
//         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//             <Box p={2}>
//                 <Typography variant="h5" align='center' mb={2}>Раздел 1</Typography>
//                 <Grid container>
//                     <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
//                         <AuthorizationDocument/>
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
//                         <WaterSupplySource/>
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
//                         <FencePeriods/>
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
//                         <AvailableAccounted/>
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
//                         <UsedWater/>
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
//                         <UsedForTheYearTemplate/>
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
//                         <TransmittedWithoutUseTemplate/>
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
//                         <TransmittedAfterUseTemplate/>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </Grid>
//     </Grid>
// </React.Fragment>
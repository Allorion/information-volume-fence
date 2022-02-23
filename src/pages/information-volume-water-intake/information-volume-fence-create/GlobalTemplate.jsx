import React, {useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {Box, Button, Grid, Stack} from "@mui/material";
import Paper from "@mui/material/Paper";
import HeadBox from "../../../global-components/style/HeadBox";
import FormAddingInformation from "./components/FormAddingInformation";
import FormAddingInformationContext from "./context/FormAddingInformationContext";
import TableAdditionalDetails from "./components/TableAdditionalDetails";
import TableAdditionalDetailsContext from "./context/TableAdditionalDetailsContext";

const GlobalTemplate = () => {

    const [addingInformation, setAddingInformation] = useState([]);

    const addingInformationMemo = useMemo(() =>{
        return [addingInformation, setAddingInformation];
    }, [addingInformation])

    return(
      <React.Fragment>
          <Grid container sx={{textOverflow: 'ellipsis'}}>
              <Grid item xs={0} md={2} xl={2}/>
              <Grid item xs={12} md={8} xl={8}>
                  <Paper elevation={3}>
                      <HeadBox>Сведения по объему забора</HeadBox>
                      <Box p={4}>
                      </Box>
                  </Paper>
                  <Stack spacing={2} direction='row' mt={4}>
                      <FormAddingInformationContext.Provider
                          value={addingInformationMemo}
                      >
                          <FormAddingInformation
                              count={'information' + Object.keys(addingInformation).length}
                          />
                      </FormAddingInformationContext.Provider>
                      <Link to="/water-usage/fact-wusage/" style={{textDecoration: 'none'}}>
                          <Button variant="contained" color="success">Сохранить</Button>
                      </Link>
                  </Stack>
                  <Grid item xs={0} md={2} xl={2}/>
              </Grid>
          </Grid>

          <TableAdditionalDetailsContext.Provider value={addingInformationMemo}>
              <TableAdditionalDetails/>
          </TableAdditionalDetailsContext.Provider>

      </React.Fragment>
    );
};

export default GlobalTemplate;
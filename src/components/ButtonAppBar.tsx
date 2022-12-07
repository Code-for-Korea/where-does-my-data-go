import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: 100 }}>
          <Container>
            <Grid container direction="column">
              <Grid container>
                <Typography variant="h6">Where Does My Data GO?</Typography>
              </Grid>
              <Grid container>
                <Typography variant="caption">
                  당신의 정보가 어떻게, 어디까지 흘러가고 있는지 아십니까?
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

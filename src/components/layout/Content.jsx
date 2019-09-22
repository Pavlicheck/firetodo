import React from 'react';
import { Sidebar } from './Sidebar/index'
import Grid from "@material-ui/core/Grid";
import Tasks from "../Tasks";

export const Content = (props) => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item xs={9}>
          <Tasks/>
        </Grid>
      </Grid>
    </section>
  )
}
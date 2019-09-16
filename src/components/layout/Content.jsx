import React from 'react';
import { Sidebar } from './Sidebar/index'
import { Tasks } from '../Tasks'
import Grid from "@material-ui/core/Grid";

export const Content = (props) => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={9}>
          <Tasks></Tasks>
        </Grid>
      </Grid>
    </section>
  )
}
import React from 'react'
import {
    Container,
    Grid,
    makeStyles,
    withStyles,

} from '@material-ui/core'
import ProductItem from '../components/ProductItem'
export default function FilterPage() {
    const useRowStyles = makeStyles({
        root: {
         
        },
        pageWrapper : {
            minHeight: '105vh',
            width: '100%',
background: ' linear-gradient(180deg, rgba(85,11,175,1) 0%, rgba(0,0,0,1) 100%);'

        },
     
    })
    const classes = useRowStyles()
    return (
        <div className={classes.pageWrapper}>
            <Container maxWidth={false}>
                <Grid  justifyContent={"center"} alignItems={"center"} container spacing={3}>
                    <Grid item lg={3} xs={12}  >
                        <ProductItem / >
                    </Grid>
                    <Grid item lg={3} xs={12} >
                        <ProductItem / >
                    </Grid>
                    <Grid item lg={3} xs={12} >
                        <ProductItem / >
                    </Grid>
                    <Grid item lg={3} xs={12} >
                        <ProductItem / >
                    </Grid>
                    
                </Grid>
            </Container>
      </div>
      )
}

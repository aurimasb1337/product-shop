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
backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'

        },
     
    })
    const classes = useRowStyles()
    return (
        <div className={classes.pageWrapper}>
            <Container maxWidth={false}>
                <Grid  justifyContent={"center"} alignItems={"center"} container spacing={3}>
                    <Grid item lg={3} xs={3}  >
                        <ProductItem / >
                    </Grid>
                    <Grid item lg={3} xs={3} >
                        <ProductItem / >
                    </Grid>
                    <Grid item lg={3} xs={3} >
                        <ProductItem / >
                    </Grid>
                    <Grid item lg={3} xs={3} >
                        <ProductItem / >
                    </Grid>
                    
                </Grid>
            </Container>
      </div>
      )
}

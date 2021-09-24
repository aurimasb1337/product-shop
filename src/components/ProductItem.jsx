import React from 'react'
import {
    Card,
    makeStyles,
    withStyles,
} from '@material-ui/core'
export default function ProductItem() {
    const useRowStyles = makeStyles({
        root: {
         
        },
        productItem : {
                color: 'black',
                borderRadius: 20,
                background: ' linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)',
                backgroundColor: '#ffffff',
                transition: 'all 0.6s ease-in',
                boxShadow: '3px 10px 30px -4px rgba(57,1,71,1)',
                minHeight: 150
        }
    })
    const classes = useRowStyles()
    return (
        <Card className={classes.productItem}>
            <h2>Test</h2>
        </Card>
    )
}

import React from 'react'
import {
    Card,
    makeStyles,
} from '@material-ui/core'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
export default function ProductItem() {
    const useRowStyles = makeStyles({
     
        productItem : {
                color: 'black',
                borderRadius: 50,
                // background: ' linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)',
                backgroundColor: '#ffffff',
                transition: 'all 0.6s ease-in',
                boxShadow: '3px 10px 30px -4px rgba(57,1,71,1)',
                minHeight: 200,
                display: 'flex',
                color: '#ffffff',
                transform: 'scale(1)',
                "&:hover " : {
                    borderRadius: 30,
                    cursor: 'pointer'
                   },
                '& p,h2' : {
                    margin: 0
                },
              
        },
        icon: {
            background: '#ffabab',
            borderRadius: 20,
            padding: 5,
            marginRight: 10,
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;'
        },
        imgWrapper: {
            height: '100%',
            background: "url('http:\/\/images.booztx.com\/ben-sherman\/400x523\/benma108960_jetblack.jpg')",
            backgroundSize: 'cover'
        }
    })
    const classes = useRowStyles()
    return (
        <Card className={classes.productItem} spacing={3}>
            <div className="flex__split d-flex flex-column justify-content-center purple__bg rounded__corner">
                <div className="p-20">
                <p className="brand__name">brand_name</p>
            <h2 className="product__heading">product_name</h2>
            <div className="price__wrapper">
                <LocalOfferIcon color={"primary"} className={classes.icon}/>
                
                <span className="price__span">
                50.00$
                </span>
            </div>
                </div>
          
            </div>
            <div className="flex__split d-flex flex-column justify-content-center">
                <div className={classes.imgWrapper} />
         
            </div>
        </Card>
    )
}

import {React, useState, useEffect} from 'react'
import {
    Container,
    Grid,
    makeStyles,
} from '@material-ui/core'
import ProductItem from '../components/ProductItem'
import { getProductsByPage } from './../redux';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
 function FilterPage(props) {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
    useEffect(() => {
        props.getProductsByPage(page)
      }, [page]);
    
    const useRowStyles = makeStyles({
        pageWrapper : {
            minHeight: '105vh',
            width: '100%',
background: ' linear-gradient(180deg, rgba(85,11,175,1) 0%, rgba(0,0,0,1) 100%);'

        },
    container : {
        padding: 40
    },
     pagination: {
         padding: 50,
     '& .MuiPaginationItem-root': {
         color: 'white'
     },
     '& .MuiPagination-ul':{
         justifyContent: 'center'
     }
     }
    })
    const classes = useRowStyles()
    const productList  = props?.productReducer?.products.slice(0,15) || []
    return (
  
        <div className={classes.pageWrapper} >
          
            <Container className={classes.container} maxWidth={false} >
                <Grid  justifyContent={"center"} alignItems={"center"} container spacing={3}>
                 {productList.map((value, index) => {
                     
                     return     <Grid item lg={3} xs={12} key={index}  >
                     <ProductItem product={value}/ >
                 </Grid>
                 })}
                  
                </Grid>
            </Container>
            <Pagination className={classes.pagination} count={10} color="primary" age={page} onChange={handleChange}/>
      </div>
      )
     
}
const mapStateToProps = state => {
    return {
        productReducer: state
    }
 }
    const mapDispatchToProps = dispatch => {
        return {
            getProductsByPage : page => dispatch(getProductsByPage(page))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps) (FilterPage)
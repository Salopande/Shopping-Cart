import {CartState} from './context/Context';
import {Form,Button} from "react-bootstrap";
import React,{useState} from 'react';
import "./styles.css";
import Rating from './Rating';
const Filters = ({prod})=>{
    
    const{productState:{
      byStock,byFastDelivery,byRating,sort,searchQuery
    },productDispatch}=CartState();

    console.log(byStock,byFastDelivery,byRating,sort,searchQuery);
    return(
        <div className="Filters">
          <span className="title">Filter Products</span>
          <span>
            <Form.Check
              inline
              label="Ascending"
              name="group1"
              type="radio"
              id={`inline-1`}
              onChange={()=>
              productDispatch({
               type:"SORT_BY_PRICE",
               payload:"lowToHigh",
              })
             }
             checked={sort==="lowToHigh"?true:false}
            />
          </span>
          <span>
            <Form.Check
              inline
              label="Descending"
              name="group2"
              type="radio"
              id={`inline-2`}
               onChange={()=>
              productDispatch({
               type:"SORT_BY_PRICE",
               payload:"HighTolow",
              })
             }
             checked={sort==="HighTolow"?true:false}
            />
          </span>
          <span>
            <Form.Check
              inline
              label="Include Out of Stock"
              name="group3"
              type="checkbox"
              id={`inline-3`}
               onChange={()=>
              productDispatch({
               type:"FILTER_BY_STOCK",
               
              })
             }
             checked={byStock}
            />
          </span>
          <span>
            <Form.Check
              inline
              label="Fast Delivery Only"
              name="group4"
              type="checkbox"
              id={`inline-4`}
              onChange={()=>
              productDispatch({
               type:"FILTER_BY_DELIVERY",
               
              })
             }
             checked={byFastDelivery}
            />
          </span>
          <span>
           <label style={{paddingRight:10}} >Rating: </label>
           <Rating rating={byRating}  onClick={(i)=>
              productDispatch({
                type:"FILTER_BY_RATING",
                payload:i+1,
              })
            } 
                   style={{cursor:"pointer"}} />
          </span>
          <Button variant="light" 
            onClick={()=>
             productDispatch({
                type:"CLEAR_FILTERS",
             })
            }
          >Clear Filters</Button>
        </div>
         
    )
}
export default Filters;
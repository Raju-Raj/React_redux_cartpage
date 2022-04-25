import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import Carddata from './CardData';
import './style.css'
import { Add } from '../redux/actions/action';

const Cards = () => {

    const [data,setData]=useState(Carddata)
    // console.log(data)

    const dispatch=useDispatch()

    const send=(ele)=>{
      // console.log(ele)
      dispatch(Add(ele))
    }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to cart project</h2>

      <div className="row d-flex justify-content-center align-items-center">

          {
              data.map((element,id)=>{
                  return(
                    <Card style={{ width: "18rem",border:"none"}} className="mx-2 mt-4 card_style" key={element.id}>
                    <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3"/>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>
                        Price: ₹ {element.price}
                      </Card.Text>
                      <div className='button_div'>
                         <Button
                          variant="primary"
                          className='col-lg-12'
                          onClick={()=>send(element)}
                          >
                            Add to Cart
                          </Button>
                      </div>
                    </Card.Body>
                  </Card>
                  )
              })
          }
      </div>
    </div>
  );
}

export default Cards
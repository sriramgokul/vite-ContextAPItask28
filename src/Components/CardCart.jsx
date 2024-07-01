import { useContext } from "react"
import { AppCtx } from "../App";

const CardCart = () => {
    const {product,setProduct,quantity,setQuantity} = useContext(AppCtx);
  return (
    <div>
        <>
            {
                product.map((val,idx)=>{
                    const price = val.price;
                    const DiscountPrice = price * (val.discountPercentage / 100);
                    const FinalPrice = price - DiscountPrice;

                    const handleAdd = () =>{
                        setQuantity(quantity + 1);
                    }
                    const handleSub = () =>{
                        setQuantity(quantity - 1);
                    }

                    const FinalTotal = FinalPrice * quantity

                    return (
                        
                        <div className="col-12 d-flex justify-content-center align-items-center" key={idx}>
                            <div className="card mt-3" style={{width: "80%", borderRadius:"20px"}}>
                                <div className="row g-0">
                                    <div className="col-md-5  d-flex justify-content-center align-items-center">
                                        <img src={val.images} className="img-fluid product-img" alt="Iphone Image" style={{borderRadius:"30px"}} />
                                    </div>

                                    <div className="col-md-7">
                                        <div className="row g-0">
                                            <div className="col-md">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h5 className="card-title">{val.title}</h5>
                                                        </div>
                                                        <div className="col d-flex justify-content-end">
                                                            <h5 className="card-title"> ${val.price}</h5>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="card-text"><strong>Brand: </strong>{val.brand}</p>
                                                        </div>
                                                        <div className="col d-flex justify-content-end">
                                                            <p className="card-text text-success">Discount Price:{val.discountPercentage}%</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                        <p className="card-text">{val.description}</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="card-text text-danger">In Stock : {val.stock}</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col d-flex align-items-center">
                                                            <p><b>Rating: </b>{val.rating}</p>
                                                        </div>
                                                        <div className="col d-flex justify-content-end gap-2">
                                                            <button className="btn btn-secondary" onClick={handleSub}>-</button>
                                                            <span className="d-flex justify-content-center align-items-center">{quantity}</span>
                                                            <button className="btn btn-secondary" onClick={handleAdd}>+</button>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                        <small className="text-muted d-flex align-items-center">Last Updated 3 mins Ago</small>
                                                        </div>
                                                        <div className="col"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row g-0 p-4 line" >
                                            <div className="col">
                                                <div className="row">
                                                    <div className="col card-title">Original Price (1 Item): </div>
                                                    <div className="col card-title text-end">${val.price}</div>
                                                </div>

                                                <div className="row">
                                                    <div className="col card-title text-success">Discount Amount : </div>
                                                    <div className="col card-title text-success text-end">${Math.round(DiscountPrice)}</div>
                                                </div>

                                                <div className="row">
                                                    <div className="col card-title">Final Price (Price - Discount):</div>
                                                    <div className="col card-title text-end">${Math.round(FinalPrice)}</div>
                                                </div>

                                                <div className="row">
                                                    <div className="col card-title d-flex align-items-center">Total Amount (Final Price * Quantity):
                                                        <div className="col card-title text-end fs-4 fw-normal">${Math.round(FinalTotal)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            } 
        </>
    </div>
  )
}

export default CardCart
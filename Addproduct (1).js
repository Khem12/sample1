import { useState } from "react";
import axios from "axios";


const Addproduct=()=>{
    const [pnname, setPnname] = useState('');
    const [pdesc, setPdesc] = useState('');
    const [pquantity, setPquantity] = useState('');
    const [pprice, setPprice] = useState('');
    const [message, setMessage] = useState('');
    const [pimage, setPimage] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token')
        }
    }

    const addproduct1212=(e)=>{
        e.preventDefault();
        // const productData = {
        //     pnname, pdesc, pquantity, pprice, pimage
        // }

        const productData = new FormData();
        productData.append('pnname', pnname);
        productData.append('pdesc', pdesc);
        productData.append('pquantity', pquantity);
        productData.append('pprice', pprice);
        productData.append('product_image', pimage);
        

        


        axios.post("http://localhost:90/product/insert", productData, config)
        .then(result111=>{
            if(result111.data.success){
                // data inserted
                setMessage("Product Inserted Successfully!!");

            }
            else{
                setMessage("Something went wrong!!");
            }
        })
        .catch(e=>{
            setMessage("Something went wrong!!");
        });
        
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2 className="heading-h2-all">Add Product Details :</h2>
                    <p>{message}</p>
                    <form>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" className="form-control"
                            value={pnname}
                            onChange={e=>{setPnname(e.target.value)}}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" className="form-control"
                             value={pprice}
                             onChange={e=>{setPprice(e.target.value)}}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Description</label>
                            <input type="text" className="form-control"
                             value={pdesc}
                             onChange={e=>{setPdesc(e.target.value)}}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Quantity</label>
                            <input type="text" className="form-control"
                             value={pquantity}
                             onChange={e=>{setPquantity(e.target.value)}}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Image</label>
                            <input type="file" className="form-control"
                            onChange={e=>setPimage(e.target.files[0])}
                            />

                        </div>


                        <p><input type='submit' className="btn btn-primary" onClick={addproduct1212} /></p>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}


export default Addproduct;
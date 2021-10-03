import React, {useState} from 'react'

export default function AdminView(props){
    const [newProductName, setNewProductName] = useState("");
    const [newProductBrand, setNewnewProductBrand] = useState("");
    const [newProductRegion, setNewProductRegion] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");
    const [newProductImgFileName, setNewProductFileName] = useState("");

    const addNewProduct = () =>{
        props.addNewProduct(newProductName, newProductBrand, newProductRegion, newProductPrice, newProductImgFileName);
    }

    const onClickDelete = (id) =>{
        props.deleteProduct(id);
    }

    return(
        <div>
            <div>
                <h1>Add Wine</h1>
                <div>
                    Name <input type="text" onChange={(event) => setNewProductName(event.target.value)}></input>
                </div>
                <div>
                    Brand <input type="text" onChange={(event) => setNewnewProductBrand(event.target.value)}></input>
                </div>
                <div>
                    Region <input type="text" onChange={(event) => setNewProductRegion(event.target.value)}></input>
                </div>
                <div>
                    Price <input type="text" onChange={(event) => setNewProductPrice(event.target.value)}></input>
                </div>
                <div>
                    Image-FileName <input type="text" onChange={(event) => setNewProductFileName(event.target.value)}></input>
                </div>
                <button onClick={addNewProduct}>Add Wine</button>
            </div>
            <button onClick={props.userMode}>User Mode</button>
            <div>
                <h1>Product List</h1>
                {props.items.map((item, index) => 
                <div key={index}>
                    <button onClick={() => onClickDelete(item.id)}>X</button> {item.name}
                </div>
                )}
            </div>
        </div>      
    )

}
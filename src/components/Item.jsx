function Item ({item, selectProduct}) {
    return (
        <>
        <div onClick={()=> selectProduct(item.id)} className={`product ${item.isInBag ? 'selectec' : ''}`}>
                    <div className="photo">
                        <img src={"./img/" + item.photo} />
                    </div>
                    <div className="description">
                        <span className="name">{item.name}</span>
                        <span className="price">{item.price}</span>
                        { item.isInBag &&
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">{item.quantity}</span>
                            <button>+</button>
                        </div>
                        
                        }
                    </div>
                </div>
        </>
    )
}

export default Item
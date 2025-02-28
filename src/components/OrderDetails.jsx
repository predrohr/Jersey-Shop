function OrderDetails ({itemsInBag}){

    function calculateTotal(){
    let totalOrder = 0;
    itemsInBag.forEach(item => totalOrder += item.price * item.quantity);
    return totalOrder.toFixed(2);
    }
    return (<>

    <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {itemsInBag.map(item => <>{
                    <tr>
                        <td>{item.quantity}x {item.name}</td>
                        <td>$ {(item.price * item.quantity.toFixed(2))}</td>
                    </tr>
                    }
                </>
                )
                }
                        
                        
                        <tr>
                            <th>Total</th>
                            <th>$ {calculateTotal()}</th>
                        </tr>
                    </tbody>
                </table>
            </section>
    </>
    )
}

export default OrderDetails 
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products})=> {
    return (
        <div className="ItemList" onClick={()=> console.log('hice click en el item list')}>
            {products.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList
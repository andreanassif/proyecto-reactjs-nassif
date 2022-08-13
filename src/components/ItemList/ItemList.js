import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({productos})=> {
    return (
        <div className="ItemList" onClick={()=> console.log('hice click en el item list')}>
            {productos.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList
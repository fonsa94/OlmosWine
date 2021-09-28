import { Link } from 'react-router-dom'

const Item = ({ id, title, price, pictureURL }) => {
    return (
        <Link to={`/item/${id}`}>
            <div className="row " key={id}>
                <div className="col">
                    <div className="card-img-top">
                    <img src={pictureURL} alt={title}/>
                    </div>
                    <div className="card-body">
                        <span className="card-title">{title}</span>
                        <br />                    
                        <label className="card-price">${price}</label>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;
import { Link } from 'react-router-dom'

const Item = ({ id, title, price, pictureURL }) => {
    return (
        <Link to={`/item/${id}`}>
            <section class="container-fluid d-flex justify-content-center">
            <div className="card container" key={id}>
                <div className="row">
                    <div className="card-image">
                    <img src={pictureURL} alt={title}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{title}</span>
                        <br />                    
                        <label className="card-price">${price}</label>
                    </div>
                </div>
            </div>
            </section>
        </Link>
    )
}

export default Item;
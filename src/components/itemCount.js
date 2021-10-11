import {useState, useEffect} from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {

    const[counter, setCounter] = useState(initial);
    const[addDisabled, setAddDisabled] = useState(false);
    const[removeDisabled, setRemoveDisabled] = useState(false);

    useEffect(() => {
        setAddDisabled((counter >= stock));
        setRemoveDisabled((counter <= initial));
    }, [counter, initial, stock])
    
    return(
        <div className="item-count-container">
            <div className="row">
                <div className="col s12">
                    <blockquote>Stock Disponible: { stock }</blockquote>
                </div>
                <div className="col s12">
                    <div className="col s3">
                        <button 
                            onClick={ () => { setCounter(counter - 1) }}
                            className="btn btn-primary"
                            disabled={removeDisabled}
                        >
                            <i className="">Quitar</i>
                        </button>
                    </div>
                    <div className="col s6 item-count">
                        <label>{ counter }</label>
                    </div>
                    <div className="col s3">
                        <button 
                            onClick={ () => { setCounter(counter + 1); }} 
                            className="btn btn-primary"
                            disabled={addDisabled}
                        >
                            <i className="">Sumar</i>
                        </button>
                    </div>
                </div>
                <div className="col s12"> <hr/> </div>
                <div className="col s12">
                    <button 
                        onClick = {() => onAdd(counter)} 
                        className="waves-effect waves-light btn item-count-btn" 
                        type="submit" 
                        name="action"
                    >
                        Sumar al Carrito!
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemCount;
import { Link } from 'react-router-dom';
import './index.css';

const ItemCard = ({fields, id}) => {
    console.log(fields.thumbnail.fields.file.url);
    return (
        <>
        <div className="item-card">
            <img className="item-card__image" src={fields.thumbnail.fields.file.url} />    
            <h3>{fields.name}</h3>
            <p>{fields.description}</p>
            <p>{fields.useCase}</p>
            <Link to={`/detail-page/${id}`}>More detail</Link>
        </div>
        </>
    )
}

export default ItemCard


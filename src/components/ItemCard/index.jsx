import { Link } from 'react-router-dom';

const ItemCard = ({fields, id}) => {
    console.log(fields);
    console.log(id,'id');
    return (
        <>
        <div className="item-card">
            <img src="" />    
            <h3>{fields.name}</h3>
            <p>{fields.description}</p>
            <p>{fields.useCase}</p>
            <Link to={`/detail-page/${id}`}>More detail</Link>
        </div>
        </>
    )
}

export default ItemCard
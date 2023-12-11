const ItemCard = ({fields}) => {
console.log(fields, "test");
    return (
        <>
        <div className="item-card">
            <img src="" />    
            <h3>{fields.name}</h3>
            <p>{fields.description}</p>
            <p>{fields.useCase}</p>
            <a>Read more about it</a>
        </div>
        </>
    )
}

export default ItemCard
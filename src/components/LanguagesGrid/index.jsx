import ItemCard from "../ItemCard";

const LanguagesGrid = ({entries}) => {    
    return (
        <>
        {entries && entries.map((item ) => {
           return  <ItemCard key={item.sys.id} fields={item.fields} id={item.sys.id} /> 
        })}
        
        
        </>
    )
}

export default LanguagesGrid;
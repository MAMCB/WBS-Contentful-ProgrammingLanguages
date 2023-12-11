import ItemCard from "../ItemCard";

const LanguagesGrid = ({entries}) => {
    console.log(entries, 'Grid');
    
    return (
        <>
        {entries && entries.map((item ) => {
           return  <ItemCard key={item.sys.id} fields={item.fields} /> 
        })}
        
        
        </>
    )
}

export default LanguagesGrid;
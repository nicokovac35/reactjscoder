const ItemListContainer = ({ greeting}) => {
        //Todo mostar la prop greeting
        // Todo ubicarlo en app.js debajo del navbar 

        // greeting dentro de corchetes por ser una variable 
    return (
        <> 
        <h1>Productos</h1>
        <h3>{greeting}</h3>
        </>
    );
}

export default  ItemListContainer;
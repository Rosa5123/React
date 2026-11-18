import lista from './lista.json';
function ListaDeCompras() {
    return ( 
        <div>
            <ul>
                {lista.map((producto) => (
                      <li key={producto.id}> 
                      <p> {producto.name} ({producto . cantidad}) ({producto.precio})</p>
                       </li>
                     
                    
                    ))}
            </ul>
        </div>
    );
}

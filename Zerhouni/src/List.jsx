
function List(prop){
    
    // names.sort((a,b) => a.nom.localeCompare(b.nom)); //kanrtbo hna 3la hsab les alphabets
    // names.sort((a,b) => b.nom.localeCompare(a.nom));//kanrtbo hna 3la hsab reverse dyal les alphabets
    // names.sort((a,b) => a.age - b.age);//kanrtbo hna mn sghir lkbir
    // names.sort((a,b) => b.age - a.age);//kanrtbo hna mn kbir lsghir

    // const LowAge = names.filter(name => name.age <18)
    // const HighAge = names.filter(name => name.age >18)
    const liste = prop.items;
    const categori = prop.categori;
    const listItems = liste.map(props => <li key={props.id}>{props.nom}</li>); // hadi bach tbyn lina kol item f dik list w maykhrjoch mlas9it
    return(
        <>
            <h2>{categori}</h2>
            <ol>{listItems}</ol>
        </>
    );   
}

export default List
import CardFetchProps from './CardFetchProps';
import useDeveloperTools from '../../hooks/useDeveloperTools';

function CardFetch() {
    const { developerTools, loading, error } = useDeveloperTools();

    if (loading) return <h1>Cargando ...</h1>
    if (error) return <h1>Error : {error}</h1>

    return (
        <div>
            <h1>Developer Tools</h1>
            <h2>Felicidades crack</h2>
            {developerTools.map((tool) => (
                <CardFetchProps
                    key={tool.id}
                    name={tool.name}
                    description={tool.description}
                    image={tool.image}
                    url={tool.url} >
                </CardFetchProps>
            ))}
        </div>
    )
}
export default CardFetch


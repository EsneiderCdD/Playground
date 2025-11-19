import CardFetchProps from './CardFetchProps';

function CardFetch({ developerTools = [] }) {
    return (
        <div>
            <h1>Developer Tools</h1>
            <div style={{display:'flex', flexDirection: 'row'}}>
                {developerTools.map((tool) => (
                    <CardFetchProps
                        key={tool.id}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        url={tool.url}
                    />
                ))}
            </div>
        </div>
    )
}
export default CardFetch


import CardFetch from "../components/CardFetch/CardFetch";
import DevToolForm from "../components/DevTools/DevToolForm";
import { useDeveloperTools } from "../hooks/devtools/useDeveloperTools";

function DojoFetch() {
    const { developerTools, loading, error, createDevTool } = useDeveloperTools();

    if (loading) return <h1>Cargando ...</h1>;
    if (error) return <h1>Error : {error}</h1>;

    return (
        <div>
            <DevToolForm createDevTool={createDevTool} />
            <CardFetch developerTools={developerTools} />
        </div>
    );
}
export default DojoFetch



const API = "http://localhost:3001/devtools"

async function getDevTools() {
    try {
        const res = await fetch(API);
        if (!res.ok) {
            throw new Error('Houston tenemos problemas');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }

}
export default getDevTools
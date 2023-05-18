// Get the MeaningfulCloud API key from the server
const getKey = async () => {
    const res = await fetch('/key');

    try {
        const data = await res.json();
        return data.apiKey;
    } catch (err) {
        console.log("Error: unable to retrieve api key", err);
    }
};

export {
    getKey
};
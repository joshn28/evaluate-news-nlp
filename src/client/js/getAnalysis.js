// Get sentiment analysis for the news article using MeaningCloud API
const getAnalysis = async (key, content) => {
    const formData = new FormData();
    formData.append("key", key);
    formData.append("txt", content);
    formData.append("lang", "en");

    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
        method: 'POST',      
        body: formData,
        redirect: 'follow'
    });

    try {
        const analysis = await response.json();
        return analysis;
    } catch (err) {
        console.log("Error: MeaningCloud API", err);
    }
}

export {
    getAnalysis
};
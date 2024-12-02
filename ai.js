const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}));

app.post('/generate', async (req, res) => {
    const { keywords } = req.body;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Generate a blog idea, outline, and draft for: ${keywords}`,
            max_tokens: 1000,
        });
        res.status(200).json({ result: response.data.choices[0].text });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

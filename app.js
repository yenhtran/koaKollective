const { Configuration, OpenAIApi, OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: 'enter_your_api_key_here' });

async function main() {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'What type of coral is this?' },
          {
            type: 'image_url',
            image_url: {
              url: 'https://commons.wikimedia.org/wiki/File%3AAcropora_coral_ffs.jpg', // this does not work right now... :(
              // url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blue_Linckia_Starfish.JPG/500px-Blue_Linckia_Starfish.JPG',
            },
          },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
}
main();

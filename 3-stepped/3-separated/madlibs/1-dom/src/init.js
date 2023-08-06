// init.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const generateBtn = document.getElementById('generateBtn');
    const storyResult = document.getElementById('storyResult');

    generateBtn.addEventListener('click', () => {
        const noun = form.elements['noun'].value;
        const verb = form.elements['verb'].value;
        const adjective = form.elements['adjective'].value;
        const adverb = form.elements['adverb'].value;

        // Generate the funny story
        const story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}. People couldn't help but laugh at their hilarious antics. The end!`;

        // Display the story
        storyResult.textContent = story;
    });
});

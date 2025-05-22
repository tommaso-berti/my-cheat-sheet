const highlight = document.querySelectorAll('.highlight-section');

highlight.forEach((element) => {
    element.addEventListener('click', (event) => {
        document.querySelectorAll('section').forEach(section => {section.classList.remove('highlight-section');});
        const targetId = element.getAttribute('href');
        console.log("element", element);
        console.log("targetId", targetId);
        const targetSection = document.querySelector(targetId);
        console.log("targetSection", targetSection);

        if (targetSection) {
            targetSection.classList.remove('active-highlight-fade');
            targetSection.classList.add('active-highlight');
            setTimeout(() => {
                targetSection.classList.add('active-highlight-fade');
                setTimeout(() => {
                    targetSection.classList.remove('active-highlight');
                    targetSection.classList.remove('active-highlight-fade');
                }, 1000);
            }, 3000);
        }
    })
})
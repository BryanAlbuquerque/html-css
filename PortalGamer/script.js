let currentNewsIndex = 0;
const newsElements = document.querySelectorAll('.news');

function showNews(index) {
    newsElements[currentNewsIndex].classList.remove('active');
    newsElements[index].classList.add('active');
    currentNewsIndex = index;
}

function changeNews(direction) {
    const totalNews = newsElements.length;
    let newIndex = currentNewsIndex + direction;

    if (newIndex < 0) {
        newIndex = totalNews - 1;
    } else if (newIndex >= totalNews) {
        newIndex = 0;
    }

    showNews(newIndex);
}

showNews(currentNewsIndex);

// Coursera META Javascript Exercise

const elem = document.querySelector('h1');

let arr = [
        'Example Domain',
        'First Click',
        'Second Click',
        'Third Click'
    ];

function handleClicks() {
    switch(elem.innerText) {
        case arr[0]:
            elem.innerText = arr[1];
            break;
        case arr[1]:
            elem.innerText = arr[2];
            break;
        case arr[2]:
            elem.innerText = arr[3];
            break;
        default:
            elem.innerText = arr[0];
    }
}
elem.addEventListener('click', handleClicks);
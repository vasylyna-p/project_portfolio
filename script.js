
const info1 = document.getElementById('info1');
const title1 = document.getElementById('project-title1');
const project1 = document.getElementById('project1');

const info2 = document.getElementById('info2');
const title2 = document.getElementById('project-title2');
const project2 = document.getElementById('project2');

const info3 = document.getElementById('info3');
const title3 = document.getElementById('project-title3');
const project3 = document.getElementById('project3');

function showInfo(element) {
    element.style.display = 'flex';
}

function hideInfo(element) {
    element.style.display = 'none';
}


title1.addEventListener('mouseover', function () {
    showInfo(info1)
});

title2.addEventListener('mouseover', function () {
    showInfo(info2)
});

title3.addEventListener('mouseover', function () {
    showInfo(info3)
});

title1.addEventListener('mouseleave', function () {
    hideInfo(info1)
});

title2.addEventListener('mouseleave', function () {
    hideInfo(info2)
});

title3.addEventListener('mouseleave', function () {
    hideInfo(info3)
});



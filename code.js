const c1 = document.querySelector("#container-1");
const c2 = document.querySelector("#container-2");
const c3 = document.querySelector("#container-3");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const answer = document.querySelector('#stipiecorrect');
const answer2 = document.querySelector('#israelcorrect');
const answer3 = document.querySelector('#alexcorrect');
const mDiv = document.querySelector('#mainDiv');
let score = 0;


c2.style.opacity = 0;
c3.style.opacity = 0;

btn1.addEventListener('click', function () {
    if (answer.checked) {
        score += 1;
        c1.animate([{ opacity: '1' }, { opacity: '0' }], 1000);
        c2.animate([{ opacity: '0' }, { opacity: '1' }], 1000);

        setTimeout(function () {
            c1.style.opacity = 0;
            c2.style.opacity = 1;

        }, 1000)

    } else {
        alert("wrong");
    }

});


btn2.addEventListener('click', function () {
    if (answer2.checked) {
        score += 1;
        c2.animate([{ opacity: '1' }, { opacity: '0' }], 1000);
        c3.animate([{ opacity: '0' }, { opacity: '1' }], 1000);

        setTimeout(function () {
            c2.style.opacity = 0;
            c3.style.opacity = 1;

        }, 1000)

    } else {
        alert("wrong");
    }

});

btn3.addEventListener('click', function () {
    if (answer3.checked) {
        let popup = document.createElement('div')
        popup.classList.add('pop');
        mDiv.appendChild(popup);

        let h1 = document.createElement('h1');
        h1.innerHTML = `YOUR FINAL SCORE <span>IS</span> ${score}`;
        h1.classList.add('hmodify');
        popup.appendChild(h1);




        c3.animate([{ opacity: '1' }, { opacity: '0' }], 1000);
        popup.animate([{ opacity: '0' }, { opacity: '1' }], 1000);

        setTimeout(function () {
            c3.style.opacity = 0;
            popup.style.opacity = 1;

        }, 1000)

    } else {
        alert("wrong");
    }

});

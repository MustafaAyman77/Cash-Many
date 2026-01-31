let watchBtn = document.getElementById("watchBtn");
let adBox = document.getElementById("adBox");
let timerEl = document.getElementById("timer");
let viewsEl = document.getElementById("viewsCount");

let views = localStorage.getItem("adViews") || 0;
viewsEl.textContent = views;

watchBtn.onclick = () => {
    watchBtn.disabled = true;
    adBox.classList.remove("hidden");

    let timeLeft = 5;
    timerEl.textContent = timeLeft;

    let countdown = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdown);
            adBox.classList.add("hidden");

            views++;
            localStorage.setItem("adViews", views);
            viewsEl.textContent = views;

            watchBtn.disabled = false;
            alert("✔ تم تسجيل مشاهدة الإعلان");
        }
    }, 1000);
};

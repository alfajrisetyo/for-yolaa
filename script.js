// LOADING SCREEN
window.onload = function() {
    setTimeout(() => {
        document.getElementById("loading")
        .classList.add("hide");
    }, 2000);
};

// SECRET MESSAGE
function secret() {
    document.getElementById("secret").innerHTML =
    "Olaa, kalau bangun malam jangan lupa sholat yaa. wkwk 💗";
}

// MOOD CHECKER
function mood(value) {
    const messages = {
        happy: "Yeay! Keep smiling, Olaa! 🥰",
        tired: "Take a rest, you deserve it! 🌷",
        sad: "Sending you a warm hug. Semangat yaa! 🫶",
        random: "Wkwkwk, random banget kamu! 🤪"
    };

    document.getElementById("moodResult").innerHTML =
    messages[value];
}

// RANDOM QUESTIONS
const questions = [
    {
        q: "Kalau bisa teleport sekarang, mau ke mana?",
        a: ["Pantai 🌊", "Cafe ☕", "Rumah 🏠", "Luar angkasa 🚀"]
    },
    {
        q: "Pilih satu hadiah!",
        a: ["Bunga 🌷", "Cokelat 🍫", "Boneka 🧸", "Surat 💌"]
    },
    {
        q: "Kalau jadi hewan, mau jadi apa?",
        a: ["Kucing 🐱", "Kelinci 🐰", "Beruang 🐻", "Panda 🐼"]
    },
    {
        q: "Apa yang paling kamu suka?",
        a: ["Tidur 😴", "Makan 🍰", "Jalan-jalan ✈️", "Diperhatikan 💗"]
    },
    {
        q: "Pilih suasana malam ini!",
        a: ["Hujan 🌧️", "Bintang ✨", "Bulan 🌙", "Sunset 🌅"]
    }
];

let current = 0;

function showQuestion() {
    document.getElementById("question").innerHTML =
    questions[current].q;

    document.getElementById("answers").innerHTML =
    questions[current].a.map(answer =>
        `<button onclick="answer('${answer}')">${answer}</button>`
    ).join("");
}

function answer(value) {
    document.getElementById("feedback").innerHTML =
    "Your answer: " + value + " 💗";
}

function nextQuestion() {
    current = (current + 1) % questions.length;
    document.getElementById("feedback").innerHTML = "";
    showQuestion();
}

showQuestion();

// GIFT BOX
function gift(number) {
    const gifts = [
        "🌷 Semoga hari-harimu selalu indah!",
        "🧸 Virtual teddy bear untuk kamu!",
        "💌 You are someone worth appreciating!"
    ];

    document.getElementById("giftResult").innerHTML =
    gifts[number - 1];
}

// RANDOM COMPLIMENT
const compliments = [
    "You are beautiful in your own way. 💗",
    "Don't forget to appreciate yourself!",
    "You deserve happiness, Olaa!",
    "Stay cute and keep smiling! 🧸",
    "May good things find you!"
];

function compliment() {
    const random = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment").innerHTML =
    compliments[random];
}

// VIRTUAL HUG
function hug() {
    document.getElementById("hugResult").innerHTML =
    "Sending you the biggest hug! (っ˘з(˘⌣˘ ) ♡";
}

// MUSIC PLAYER
const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicBtn");

musicButton.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicButton.textContent = "⏸ Pause Music";
    } else {
        bgMusic.pause();
        musicButton.textContent = "🎵 Play Music";
    }
});
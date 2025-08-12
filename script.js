let unlockClickCount = 0;
let alarmSrc = "https://files.catbox.moe/v8f40o.mp3");";
let successSrc = "success.mp3";

// Ambil dari localStorage kalau ada
if (localStorage.getItem("sound1")) alarmSrc = localStorage.getItem("sound1");
if (localStorage.getItem("sound2")) successSrc = localStorage.getItem("sound2");

const alarmAudio = new Audio(alarmSrc);
const successAudio = new Audio(successSrc);

document.getElementById("unlock").addEventListener("click", function() {
    unlockClickCount++;

    let kode = document.getElementById("kode").value;
    if (kode === "112223333") {
        alert("Password Benar!");
        successAudio.play();
        setTimeout(() => { window.close(); }, 10000); // keluar otomatis 10 detik
    } else {
        alert("Password Salah!");
    }

    if (unlockClickCount === 3) {
        window.location.href = "settings.html";
    }
});

// Timer
let waktu = 300;
let timerEl = document.getElementById("timer");

let countdown = setInterval(() => {
    let menit = Math.floor(waktu / 60);
    let detik = waktu % 60;
    timerEl.textContent = `${menit}:${detik < 10 ? '0' : ''}${detik}`;
    waktu--;

    if (waktu < 0) {
        clearInterval(countdown);
        alarmAudio.play();
        spamNotif();
    }
}, 1000);

// Spam notifikasi
function spamNotif() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            alert("Anda terkena ransomware!");
        }, i * 1500);
    }
                            }

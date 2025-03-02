let currentXP = parseInt(localStorage.getItem("currentXP")) || 0;
let currentLevel = parseInt(localStorage.getItem("currentLevel")) || 1;
const xpPerLevel = 450;

function saveProfile() {
    const profilePic = document.getElementById("profile-pic").src;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;
    const occupation = document.getElementById("occupation").value;

    // Speichern der Daten in localStorage
    localStorage.setItem("profilePicture", profilePic);
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileAge", age);
    localStorage.setItem("profileLocation", location);
    localStorage.setItem("profileOccupation", occupation);

    // Verzögerung für den Seitenwechsel, um sicherzustellen, dass das Speichern abgeschlossen ist
    setTimeout(function () {
        window.location.href = "./profile.html";
    }, 200);
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("/profile.html")) {
        console.log("Profile loaded");
        const savedPic = localStorage.getItem("profilePicture");
        const savedName = localStorage.getItem("profileName") || "John Doe";
        const savedAge = localStorage.getItem("profileAge") || "25";
        const savedLocation =
            localStorage.getItem("profileLocation") || "Münsingen";
        const savedOccupation =
            localStorage.getItem("profileOccupation") || "Web Developer";
        console.log("savedName: ", savedName);

        if (savedPic) {
            document.getElementById("profile-pic").src = savedPic;
        }

        const profileParagraph = document.querySelector(".profile-paragraph");
        profileParagraph.innerHTML = `
            <strong>Name:</strong> ${savedName}<br />
            <strong>Age:</strong> ${savedAge}<br />
            <strong>Location:</strong> ${savedLocation}<br />
            <strong>Occupation:</strong> ${savedOccupation}<br />
        `;
    }
});

function loadProfileData() {
    const savedPic = localStorage.getItem("profilePicture");
    const savedName = localStorage.getItem("profileName");
    const savedAge = localStorage.getItem("profileAge");
    const savedLocation = localStorage.getItem("profileLocation");
    const savedOccupation = localStorage.getItem("profileOccupation");

    if (savedPic) {
        document.getElementById("profile-pic").src = savedPic;
    }
    if (savedName) {
        document.getElementById("name").value = savedName;
    }
    if (savedAge) {
        document.getElementById("age").value = savedAge;
    }
    if (savedLocation) {
        document.getElementById("location").value = savedLocation;
    }
    if (savedOccupation) {
        document.getElementById("occupation").value = savedOccupation;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("/profile-detail.html")) {
        loadProfileData();
    }

    if (
        window.location.pathname.endsWith("/profile.html") ||
        window.location.pathname.endsWith("/quests.html")
    ) {
        updateProgressBar();
    }
});

function selectIcon(iconSrc) {
    document.getElementById("profile-pic").src = iconSrc;
}

function collectXP(xp, elementId) {
    currentXP += xp;
    if (currentXP >= xpPerLevel) {
        currentXP -= xpPerLevel;
        currentLevel++;
        localStorage.setItem("currentXP", currentXP);
        localStorage.setItem("currentLevel", currentLevel);
    }
    document.getElementById(elementId).style.display = "none";
    updateProgressBar();
}

function updateProgressBar() {
    const progressElement = document.getElementById("progress");
    const levelElement = document.getElementById("level");
    const progressPercentage = (currentXP / xpPerLevel) * 100;
    progressElement.style.width = progressPercentage + "%";
    levelElement.textContent = "Level " + currentLevel;
}

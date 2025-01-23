function saveProfile() {
    const profilePic = document.getElementById('profile-pic').src;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const occupation = document.getElementById('occupation').value;

    // Speichern der Daten in localStorage
    localStorage.setItem('profilePicture', profilePic);
    localStorage.setItem('profileName', name);
    localStorage.setItem('profileAge', age);
    localStorage.setItem('profileLocation', location);
    localStorage.setItem('profileOccupation', occupation);
    
     // Verzögerung für den Seitenwechsel, um sicherzustellen, dass das Speichern abgeschlossen ist
     setTimeout(function() {
        window.location.href = './profile.html';
    }, 200);
  }

function selectIcon(iconSrc) {
    document.getElementById('profile-pic').src = iconSrc;
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Profile loaded1")

    if (window.location.pathname.endsWith('/profile.html')) {
        console.log("Profile loaded")
        const savedPic = localStorage.getItem('profilePicture');
        const savedName = localStorage.getItem('profileName') || "John Doe";
        const savedAge = localStorage.getItem('profileAge') || "25";
        const savedLocation = localStorage.getItem('profileLocation') || "Münsingen";
        const savedOccupation = localStorage.getItem('profileOccupation') || "Web Developer";
        console.log("savedName: ", savedName);

        if (savedPic) {
            document.getElementById('profile-pic').src = savedPic;
        }

        const profileParagraph = document.querySelector('.profile-paragraph');
        profileParagraph.innerHTML = `
            <strong>Name:</strong> ${savedName}<br />
            <strong>Age:</strong> ${savedAge}<br />
            <strong>Location:</strong> ${savedLocation}<br />
            <strong>Occupation:</strong> ${savedOccupation}<br />
        `;
    }
});

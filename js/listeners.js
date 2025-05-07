document.getElementById("bsky-orca.gay").addEventListener("click", () => {
    document.getElementById("modal-background").style.visibility = "visible";
})

document.getElementById("bsky-orca.gay-reject").addEventListener("click", () => {
    document.getElementById("modal-background").style.visibility = "hidden";
})

document.getElementById("confirm-18+-button").addEventListener("click", () => {
    document.getElementById("modal-background").style.visibility = "hidden";   
    localStorage.setItem("confirmationStatus", JSON.stringify({confirmed: "yes", timeConfirmed: new Date().toString()}));
    window.location = "https://bsky.app/profile/orca.gay"
})
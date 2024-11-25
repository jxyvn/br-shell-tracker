document.getElementById("shell-tracker").addEventListener("submit", function(event) {
    event.preventDefault();

    const redShells = parseInt(document.getElementById("red-shells").value);
    const blueShells = parseInt(document.getElementById("blue-shells").value);
    console.log("Red Shells:", redShells, "Blue Shells:", blueShells); 

    const totalShells = redShells + blueShells;
    if (isNaN(redShells) || isNaN(blueShells) || totalShells === 0) {
        alert("Please enter valid numbers for both red and blue shells.");
        return;
    }

    const redPercentage = ((redShells / totalShells) * 100).toFixed(2);
    console.log("Red Shells Percentage:", redPercentage);

    const outputContainer = document.getElementById("output");
    const liveOdds = document.getElementById("live-odds");

    liveOdds.innerHTML = "";  
    const resultItem = document.createElement("li");
    resultItem.textContent = `Odds of a Red Shell in the Chamber: ${redPercentage}%`;
    liveOdds.appendChild(resultItem);

    outputContainer.style.display = "block";
    console.log("Output container made visible");
});

document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("red-shells").value = "";
    document.getElementById("blue-shells").value = "";

    document.getElementById("live-odds").innerHTML = "";
    document.getElementById("output").style.display = "none"; 
});

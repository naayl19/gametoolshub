// ==========================================
// GAME SELECTION
// ==========================================

let selectedGame = "None";

function selectGame(game) {

    selectedGame = game;

    document.getElementById("selectedGame").innerHTML =
        `Selected game: <strong>${game}</strong>`;

    // Store selection in browser
    localStorage.setItem("selectedGame", game);

    // Scroll to tools
    document.getElementById("tools").scrollIntoView({
        behavior: "smooth"
    });
}


// Load previously selected game

window.addEventListener("DOMContentLoaded", function () {

    const savedGame = localStorage.getItem("selectedGame");

    if (savedGame) {

        selectedGame = savedGame;

        document.getElementById("selectedGame").innerHTML =
            `Selected game: <strong>${savedGame}</strong>`;
    }

});


// ==========================================
// FPS CALCULATOR
// ==========================================

function calculateFPS() {

    const cpu =
        parseFloat(document.getElementById("cpu").value);

    const gpu =
        parseFloat(document.getElementById("gpu").value);

    const graphics =
        parseFloat(document.getElementById("graphics").value);

    /*
        This is a DEMO estimation formula.

        Real FPS depends on:
        - exact CPU
        - exact GPU
        - RAM
        - game
        - resolution
        - drivers
        - graphics settings
        - thermal limits
        - game updates
    */

    const baseFPS = 45;

    const fps = Math.round(
        baseFPS * cpu * gpu * graphics
    );

    document.getElementById("fpsResult").innerHTML =
        `Estimated FPS: <strong>${fps} FPS</strong><br>
        <small>Game: ${selectedGame}</small>`;
}


// ==========================================
// EDPI CALCULATOR
// ==========================================

function calculateEDPI() {

    const dpi =
        parseFloat(document.getElementById("dpi").value);

    const sensitivity =
        parseFloat(
            document.getElementById("sensitivity").value
        );

    if (!dpi || !sensitivity) {

        document.getElementById("edpiResult").innerText =
            "Please enter both DPI and sensitivity.";

        return;
    }

    const edpi = dpi * sensitivity;

    document.getElementById("edpiResult").innerHTML =
        `Your eDPI: <strong>${edpi.toFixed(2)}</strong>`;
}


// ==========================================
// SENSITIVITY CONVERTER
// ==========================================

function convertSensitivity() {

    const from =
        document.getElementById("fromGame").value;

    const to =
        document.getElementById("toGame").value;

    const sensitivity =
        parseFloat(
            document.getElementById("convertSens").value
        );

    if (!sensitivity) {

        document.getElementById("sensResult").innerText =
            "Enter your sensitivity first.";

        return;
    }

    /*
        IMPORTANT:

        These values are simplified demonstration
        conversion factors.

        For a production website, each game should
        have its own verified conversion formula.
    */

    const factors = {

        "Valorant": 1,

        "CS2": 3.18,

        "Apex Legends": 1.15,

        "Fortnite": 0.35,

        "Call of Duty": 0.6

    };

    const baseValue =
        sensitivity * factors[from];

    const converted =
        baseValue / factors[to];

    document.getElementById("sensResult").innerHTML =
        `${from} → ${to}<br>
        Converted sensitivity:
        <strong>${converted.toFixed(3)}</strong>`;
}


// ==========================================
// FOV CALCULATOR
// ==========================================

function calculateFOV() {

    const vertical =
        parseFloat(
            document.getElementById("verticalFOV").value
        );

    const aspect =
        parseFloat(
            document.getElementById("aspectRatio").value
        );

    if (!vertical) {

        document.getElementById("fovResult").innerText =
            "Enter your vertical FOV.";

        return;
    }

    const radians =
        vertical * Math.PI / 180;

    const horizontal =
        2 * Math.atan(
            Math.tan(radians / 2) * aspect
        ) * 180 / Math.PI;

    document.getElementById("fovResult").innerHTML =
        `Horizontal FOV:
        <strong>${horizontal.toFixed(2)}°</strong>`;
}


// ==========================================
// PC PERFORMANCE
// ==========================================

function estimatePerformance() {

    const ram =
        parseFloat(
            document.getElementById("ram").value
        );

    const resolution =
        parseFloat(
            document.getElementById("resolution").value
        );

    const performance =
        Math.round(70 * ram * resolution);

    let rating;

    if (performance >= 90) {

        rating = "Excellent";

    } else if (performance >= 60) {

        rating = "Good";

    } else if (performance >= 40) {

        rating = "Playable";

    } else {

        rating = "Low";
    }

    document.getElementById("performanceResult").innerHTML =
        `Estimated performance:
        <strong>${performance} FPS</strong><br>
        Rating: <strong>${rating}</strong>`;
}


// ==========================================
// FPS OPTIMIZATION GUIDE
// ==========================================

function showFPSGuide() {

    document.getElementById("fpsGuide").innerHTML = `

        <ul>
            <li>Lower shadows and unnecessary effects.</li>
            <li>Use a suitable resolution for your GPU.</li>
            <li>Close unnecessary background applications.</li>
            <li>Keep your GPU drivers updated.</li>
            <li>Monitor CPU/GPU temperatures.</li>
            <li>Use a stable power/performance mode.</li>
        </ul>

    `;
}


// ==========================================
// GUIDES
// ==========================================

function readGuide(type) {

    const content =
        document.getElementById("guideContent");

    if (type === "fps") {

        content.innerHTML = `
            <h3>How to Increase FPS</h3>

            <p>
            Start by identifying whether your CPU or GPU
            is limiting performance. Lowering graphics
            settings can reduce GPU workload.
            </p>

            <br>

            <p>
            Also check temperatures, background applications,
            game resolution and driver versions.
            </p>
        `;

    }

    else if (type === "sens") {

        content.innerHTML = `
            <h3>Finding Your Sensitivity</h3>

            <p>
            Your DPI and in-game sensitivity work together.
            The eDPI calculator above can help you compare
            settings.
            </p>

            <br>

            <p>
            Try a sensitivity that gives you comfortable
            control rather than simply copying another player.
            </p>
        `;

    }

    else if (type === "pc") {

        content.innerHTML = `
            <h3>Gaming PC Optimization</h3>

            <p>
            Keep your system updated, close unnecessary
            applications and make sure your PC has adequate
            cooling.
            </p>

            <br>

            <p>
            Test one change at a time so you can determine
            which settings actually improve performance.
            </p>
        `;
    }

    content.scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// PREMIUM
// ==========================================

function premiumMessage() {

    alert(
        "Premium features can be connected later using a payment service."
    );
}

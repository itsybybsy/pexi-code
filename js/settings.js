// Grab elements
const players = document.getElementById("players");
const levels = document.getElementById("levels");
const form = document.getElementById("setup");

const namesDiv = document.getElementById("names");
const wrappers = namesDiv.querySelectorAll('.name-wrapper');


// A helper function to update URL params cleanly
function updateURLParam(param, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, value);
    history.pushState({}, '', url);
}

// When players changes
players.addEventListener("change", (event) => {
    updateURLParam('players', event.target.value);
});

// When levels changes
levels.addEventListener("change", (event) => {
    updateURLParam('levels', event.target.value);
});

// Sending Form values through URL
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = new URL(window.location.href);

    const playersValue = parseInt(players.value);
    const levelsValue = levels.value;

    // Collect nickname inputs (visible ones)
    const names = [];
    wrappers.forEach((wrapper, index) => {
        if (index < playersValue) {
            const input = wrapper.querySelector("input");
            const nickname = input.value.trim() || `Player ${index + 1}`;
            names.push(nickname);
        }
    });

    // Save everything to URL
    url.searchParams.set("players", playersValue);
    url.searchParams.set("levels", levelsValue);
    url.searchParams.set("names", JSON.stringify(names));

    // Redirect to next page
    window.location.href = `game.html?${url.searchParams.toString()}`;
});

// Toggle Visibility

function updateNicknameInputs() {
    const count = parseInt(players.value);

    // Show/hide the container
    namesDiv.classList.toggle('hidden', count === 0);

    // Show/hide wrappers
    wrappers.forEach((w, i) => w.style.display = i < count ? 'flex' : 'none');

    // Get only visible wrappers
    const visible = Array.from(wrappers).filter(w => w.style.display !== 'none');

    // Adjust widths
    visible.forEach((w, i) => {
        if (visible.length === 1) w.style.gridColumn = '1 / -1';                  // full width
        else if (visible.length === 3 && i === 2) w.style.gridColumn = '1 / -1';  // third full width
        else w.style.gridColumn = '';                                             // default 50%
    });
}

// Run once on page load
updateNicknameInputs();

// Update whenever player count changes
players.addEventListener('change', updateNicknameInputs);
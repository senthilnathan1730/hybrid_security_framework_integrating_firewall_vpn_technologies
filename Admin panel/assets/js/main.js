
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": ["#0ff", "#0f0", "#ff0"] },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": { "enable": true, "distance": 120, "color": "#0ff", "opacity": 0.3, "width": 1 },
        "move": { "enable": true, "speed": 1, "random": true }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
});

const toggle = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const closeBtn = document.getElementById("closeSidebar");

/* TOGGLE SIDEBAR */

toggle.addEventListener("click", () => {

    if (window.innerWidth < 992) {

        sidebar.classList.toggle("show");
        overlay.classList.toggle("show");

    } else {

        sidebar.classList.toggle("collapsed");

    }

});

/* CLOSE BUTTON */

closeBtn.addEventListener("click", () => {

    sidebar.classList.remove("show");
    overlay.classList.remove("show");

});

/* CLICK OUTSIDE */

overlay.addEventListener("click", () => {

    sidebar.classList.remove("show");
    overlay.classList.remove("show");

});

document.getElementById("logoutBtn").addEventListener("click", function () {

    if (confirm("Are you sure you want to logout?")) {

        window.location.href = "login.html";

    }

});

function enableFirewall() {

    let loading = document.getElementById("enableLoading");
    let status = document.getElementById("fwStatus");

    loading.classList.remove("d-none");

    setTimeout(() => {

        loading.classList.add("d-none");

        status.classList.remove("bg-danger");
        status.classList.add("bg-success");
        status.innerHTML = "🟢 Active";

        document.getElementById("blockedIPs").innerText = "12";
        document.getElementById("activeRules").innerText = "45";
        document.getElementById("trafficFiltered").innerText = "2.3 GB";

    }, 1500);
}


function disableFirewall() {

    alert("Firewall Disabled ⚠️");

    let status = document.getElementById("fwStatus");

    status.classList.remove("bg-success");
    status.classList.add("bg-danger");
    status.innerHTML = "Disabled";

    document.getElementById("blockedIPs").innerText = "0";
    document.getElementById("activeRules").innerText = "0";
    document.getElementById("trafficFiltered").innerText = "0 GB";

}
let ports = [];

function updatePortList() {
    const portList = document.getElementById("portList");
    portList.innerHTML = "";

    ports.forEach((port, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            Port ${port.number} 
            <span>
                <button class="btn btn-sm ${port.enabled ? 'btn-danger' : 'btn-secondary'} me-2" onclick="togglePort(${index})">
                    ${port.enabled ? 'Disable' : 'Enable'}
                </button>
                <button class="btn btn-sm btn-warning" onclick="removePort(${index})">
                    Remove
                </button>
            </span>
        `;

        // Optional: glassy style
        li.style.background = "rgba(255,255,255,0.1)";
        li.style.color = "white";
        li.style.border = "1px solid rgba(255,255,255,0.2)";
        li.style.borderRadius = "5px";
        li.style.marginBottom = "5px";

        portList.appendChild(li);
    });

    document.getElementById("portCount").textContent = ports.length;
}

function addPort() {
    const portInput = document.getElementById("portInput");
    const portNumber = portInput.value.trim();

    if (portNumber === "" || ports.some(p => p.number == portNumber)) {
        alert("Enter a valid and unique port number!");
        return;
    }

    ports.push({ number: portNumber, enabled: true });
    portInput.value = "";
    updatePortList();
}

function togglePort(index) {
    ports[index].enabled = !ports[index].enabled;
    updatePortList();
}

function removePort(index) {
    if (confirm(`Are you sure you want to remove port ${ports[index].number}?`)) {
        ports.splice(index, 1);
        updatePortList();
    }
}


let natEnabled = true;
let ddosEnabled = true;

function toggleNAT() {

    natEnabled = !natEnabled;

    document.getElementById("natStatus").innerHTML =
        natEnabled ? "🟢 Enabled" : "🔴 Disabled";

}

function toggleDDOS() {

    ddosEnabled = !ddosEnabled;

    document.getElementById("ddosStatus").innerHTML =
        ddosEnabled ? "🟢 Enabled" : "🔴 Disabled";

}

// const firewallLogs = document.getElementById("firewallLogs");

// Sample function to add a log
function addLog(message) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${message}`;

    const logLine = document.createElement("div");
    logLine.textContent = logEntry;
    firewallLogs.appendChild(logLine);

    // Scroll to bottom
    firewallLogs.scrollTop = firewallLogs.scrollHeight;
}

// Clear logs
function clearLogs() {
    firewallLogs.innerHTML = "";
}

// Example: Simulate firewall events
setInterval(() => {
    const sampleEvents = [
        "Blocked IP 192.168.1.101",
        "Allowed port 80",
        "Blocked suspicious traffic from 10.0.0.5",
        "DDoS protection triggered",
        "NAT enabled",
        "New connection from 172.16.0.10"
    ];
    const randomEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
    addLog(randomEvent);
}, 3000); // Add a log every 3 seconds for demo

const ctx = document.getElementById('trafficChart');
let trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
            {
                label: 'Upload',
                data: [2, 3, 4, 3, 5, 6, 7],
                borderColor: 'cyan',
                fill: false
            },

            {
                label: 'Download',
                data: [3, 4, 5, 6, 7, 8, 9],
                borderColor: 'lime',
                fill: false
            }

        ]
    },

    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: { color: "white" }
            }
        },
        scales: {
            x: {
                ticks: { color: "white" }
            },
            y: {
                ticks: { color: "white" }
            }
        }
    }

});
/* Simulated Traffic Stats */

let total = 10
let up = 4
let down = 6

setInterval(() => {

    let newUp = Math.random() * 2
    let newDown = Math.random() * 2

    up += newUp
    down += newDown
    total = up + down

    document.getElementById("uploadTraffic").innerText = up.toFixed(2) + " GB"
    document.getElementById("downloadTraffic").innerText = down.toFixed(2) + " GB"
    document.getElementById("totalBandwidth").innerText = total.toFixed(2) + " GB"

}, 3000)

// Preview the selected cover image
const newCoverInput = document.getElementById('newCoverInput');
const newCoverPreviewContainer = document.getElementById('newCoverPreviewContainer');
const newCoverPreview = document.getElementById('newCoverPreview');
const currentCoverImage = document.getElementById('currentCoverImage');
const saveCoverBtn = document.getElementById('saveCoverBtn');

newCoverInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            newCoverPreview.src = e.target.result;
            newCoverPreviewContainer.classList.remove('d-none');
        };
        reader.readAsDataURL(file);
    } else {
        newCoverPreviewContainer.classList.add('d-none');
    }
});

// Save cover changes
saveCoverBtn.addEventListener('click', function () {
    if (newCoverPreview.src) {
        currentCoverImage.src = newCoverPreview.src; // Update cover image
        alert('Cover image updated successfully!');
        newCoverPreviewContainer.classList.add('d-none');
        newCoverInput.value = '';
        var modal = bootstrap.Modal.getInstance(document.getElementById('editCoverModal'));
        modal.hide();
    } else {
        alert('Please select a new cover image first.');
    }
});


document.getElementById('saveProfileBtn').addEventListener('click', () => {
    const username = document.getElementById('editUsername').value;
    const email = document.getElementById('editEmail').value;
    const phone = document.getElementById('editPhone').value;
    const status = document.getElementById('editStatus').value;

    document.getElementById('profileUsername').textContent = username;
    document.getElementById('profileEmail').textContent = email;
    document.getElementById('profilePhone').textContent = phone;

    // Update status badge
    const statusBadge = document.querySelector('#profilePhone').nextElementSibling;
    if (statusBadge) {
        statusBadge.textContent = status;
        statusBadge.className = `badge ${status === 'Active' ? 'bg-success' : status === 'Inactive' ? 'bg-secondary' : 'bg-warning'}`;
    }

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('editProfileModal'));
    modal.hide();
});


// logout script 

function logoutUser() {

    sessionStorage.clear();

    window.location.replace("login.html");

}

async function refreshAccessToken() {

    const refreshToken = sessionStorage.getItem("refresh_token");

    const response = await fetch("https://vpn.zeal.lol/api/auth/refresh", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            refresh_token: refreshToken
        })
    });

    const data = await response.json();

    if (response.ok) {
        sessionStorage.setItem("access_token", data.tokens.access_token);
    } else {
        // logout if refresh fails
        window.location.href = "login.html";
    }
}

setInterval(() => {

    const expiry = sessionStorage.getItem("token_expiry");

    if (Date.now() > expiry) {
        refreshAccessToken();
    }

}, 60000);

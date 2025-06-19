
const searchBtn = document.getElementById("searchBtn");
const ipInput = document.getElementById("ipInput");

searchBtn.addEventListener("click", () => {
  const ip = ipInput.value.trim();  
  if (ip) {
    fetchIPData(ip);
  }
});

async function fetchIPData(ip) {
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();

    document.getElementById("ip").textContent = data.ip;
    document.getElementById("location").textContent = `${data.city}, ${data.region} ${data.postal}`;
    document.getElementById("timezone").textContent = data.utc_offset;
    document.getElementById("isp").textContent = data.org;


    loadMap(data.latitude, data.longitude);
  } catch (error) {
    alert("IP manzil topilmadi yoki xato yuz berdi.");
    console.error(error);
  }
}

function loadMap(lat, lng) {
  const mapDiv = document.getElementById("map");
  mapDiv.innerHTML = `<iframe width="100%" height="400" frameborder="0" style="border:0"
    src="https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed" allowfullscreen></iframe>`;
}

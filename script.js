let userLocation = document.querySelector('#userLocation');
let myLocation = document.querySelector('#myLocation');

myLocation.addEventListener("click", () => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoLocation);
  }else {
    userLocation.innerText = "The geolocation is not supported in this browser";
  }
});

const geoLocation = async (position) => {
  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  );
  let  data = await response.json();
  console.log(data)
  userLocation.innerText = `${data.address.county}, ${data.address.state}, ${data.address.country}, ${data.address.postcode}`;
};
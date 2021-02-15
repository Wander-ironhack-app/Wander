mapboxgl.accessToken = "pk.eyJ1Ijoib21nbiIsImEiOiJja2w1Z2FkMGoxa3phMm5vNG5sY2ZmbmJoIn0.Bbu_dXdzyIDaG9jUy6LYhw"; 

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/jnrdmnn/ckl1aoosu0afb17r27yya1ti5', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});
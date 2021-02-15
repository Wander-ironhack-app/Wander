mapboxgl.accessToken = 'pk.eyJ1Ijoib21nbiIsImEiOiJja2w1Z2FkMGoxa3phMm5vNG5sY2ZmbmJoIn0.Bbu_dXdzyIDaG9jUy6LYhw'; 

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/dark-v10', // style URL
  center: [13.405, 52.52], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

const nav = new mapboxgl.NavigationControl(); 
map.addControl(nav, 'top-left'); 
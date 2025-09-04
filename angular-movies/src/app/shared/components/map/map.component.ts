import { Component } from '@angular/core';
import { latLng, LeafletMouseEvent, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

@Component({
  selector: 'app-map',
  imports: [LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(26.054519, -80.181130)
  };

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log(latitude, longitude);
  }
}

import mapboxgl, { Map } from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
//import { Map } from '@/types/Types'

export const getMap = (container: string): Map | undefined => {
  try {
    console.log('fetching map...')

    const mapGl = new mapboxgl.Map({
      container: container,
      accessToken: 'pk.eyJ1Ijoic3VwZXJnYWxhY3RpcHVzIiwiYSI6ImNsbzkwcWtrdDA1bngya21rMm1la2Q2NXMifQ.sDlPzxnnduARjS7IFc7rjQ',
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-93.699346, 39.927905],
      zoom: 9,
      doubleClickZoom: false,
    })

    return mapGl
  } catch (e) {
    console.log('Error fetching map', e)
    return undefined
  }
}

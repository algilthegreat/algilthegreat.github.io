'use client'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useEffect } from 'react'

const icon = (color, count) =>
  L.divIcon({
    className: 'ffl-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -38],
    html: `<div style="position:relative;width:40px;height:40px">
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true"><path d="M20 39C20 39 34 24 34 15A14 14 0 0 0 6 15C6 24 20 39 20 39Z" fill="#000"/><circle cx="20" cy="15" r="9" fill="${color}"/></svg>
      <span style="position:absolute;top:8px;left:0;width:40px;text-align:center;font:900 11px/14px sans-serif;color:#000">${count}</span>
    </div>`,
  })

function FitBounds({ venues }) {
  const map = useMap()
  useEffect(() => {
    if (venues.length > 1) map.fitBounds(venues.map((v) => v.geo), { padding: [60, 60], maxZoom: 16 })
    else if (venues.length === 1) map.setView(venues[0].geo, 16)
  }, [map, venues])
  return null
}

export default function LeafletMap({ center, zoom, venues, labels }) {
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <FitBounds venues={venues} />
      {venues.map((v) => (
        <Marker key={v.slug} position={v.geo} icon={icon(v.cityColor, v.count)} title={v.name} alt={v.name}>
          <Popup>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: '#3558A2' }}>{v.kind}</p>
            <p style={{ margin: '4px 0', fontSize: 16, fontWeight: 900 }}>{v.name}</p>
            <p style={{ margin: '0 0 8px' }}>{(v.count === 1 ? labels.eventsHereOne : labels.eventsHere).replace('{n}', v.count)}</p>
            <a href={v.href} style={{ fontWeight: 700, color: '#000' }}>
              {labels.seeVenue} →
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

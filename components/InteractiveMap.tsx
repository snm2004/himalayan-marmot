
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon missing in production/vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// Coordinates Database
const COORDINATES: Record<string, [number, number]> = {
    "Leh": [34.1526, 77.5771],
    "Khardung La": [34.2787, 77.6047],
    "Nubra Valley": [34.6864, 77.5673],
    "Nubra": [34.6864, 77.5673],
    "Hunder": [34.5772, 77.4727],
    "Diskit": [34.5422, 77.5501],
    "Pangong": [33.7595, 78.6674],
    "Pangong Lake": [33.7595, 78.6674],
    "Pangong Tso": [33.7595, 78.6674],
    "Chang La": [34.0475, 77.9298],
    "Hanle": [32.7725, 78.9706],
    "Tso Moriri": [32.8943, 78.3129],
    "Umling La": [32.9360, 79.2215],
    "Tsaga La": [32.9723, 79.1768],
    "Rezang La": [33.4283, 78.8353],
    "Sarchu": [32.9100, 77.5800],
    "Jispa": [32.6400, 77.1900],
    "Manali": [32.2432, 77.1892],
    "Srinagar": [34.0837, 74.7973],
    "Kargil": [34.5539, 76.1349],
    "Drass": [34.4326, 75.7533],
    "Sonamarg": [34.3039, 75.2917],
    "Padum": [33.4661, 76.8776],
    "Suru Valley": [34.1979, 76.0255],
    "Suru": [34.1979, 76.0255],
    "Zanskar": [33.5000, 76.9000],
    "Zangskar Valley": [33.5000, 76.9000],
    "Phugtal": [33.2435, 77.1776],
    "Shinku La": [32.9238, 77.2600],
    "Magnetic Hill": [34.1706, 77.3491],
    "Sangam": [34.1977, 77.3371],
    "Turtuk": [34.8436, 76.8290],
    "Thang": [34.8872, 76.7960]
};

// Component to auto-zoom to fit bounds
const AutoZoom = ({ markers }: { markers: [number, number][] }) => {
    const map = useMap();
    useEffect(() => {
        if (markers.length > 0) {
            const bounds = L.latLngBounds(markers);
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [markers, map]);
    return null;
};

interface InteractiveMapProps {
    routePoints: { name: string }[]; // We only need names to look up coords
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ routePoints }) => {
    const [markers, setMarkers] = useState<{ name: string; pos: [number, number] }[]>([]);

    useEffect(() => {
        const validMarkers = routePoints
            .map(p => {
                // Try direct match
                let pos = COORDINATES[p.name] || COORDINATES[Object.keys(COORDINATES).find(k => p.name.includes(k) || k.includes(p.name)) || ''];
                return pos ? { name: p.name, pos } : null;
            })
            .filter((m): m is { name: string; pos: [number, number] } => m !== null);

        // Always ensure Leh is there as base if list is empty or weird
        if (validMarkers.length === 0) {
            validMarkers.push({ name: "Leh", pos: COORDINATES["Leh"] });
        }

        setMarkers(validMarkers);
    }, [routePoints]);

    if (markers.length === 0) return <div className="h-full w-full bg-slate-100 animate-pulse rounded-3xl" />;

    return (
        <MapContainer center={[34.1526, 77.5771]} zoom={8} scrollWheelZoom={false} className="h-full w-full z-10">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <AutoZoom markers={markers.map(m => m.pos)} />

            <Polyline
                positions={markers.map(m => m.pos)}
                color="#00AEEF"
                weight={4}
                opacity={0.8}
                dashArray="10, 10"
            />

            {markers.map((marker, idx) => (
                <Marker key={idx} position={marker.pos}>
                    <Popup>
                        <div className="text-center">
                            <h3 className="font-oswald font-bold text-mountain-blue uppercase">{marker.name}</h3>
                            <p className="text-xs text-slate-500 font-bold">Waypoint {idx + 1}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default InteractiveMap;

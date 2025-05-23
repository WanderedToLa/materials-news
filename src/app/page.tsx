"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Page() {
  const [data, setData] = useState<{ lat: number; lng: number }[]>([]);

  useEffect(() => {
    setData([
      { lat: 37.5665, lng: 126.978 }, // Seoul
      { lat: 40.7128, lng: -74.006 }, // New York
      { lat: 51.5074, lng: -0.1278 }, // London
    ]);
  }, []);

  return (
    <div className="w-full h-screen">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={data}
        pointAltitude={0.01}
        pointColor={() => "orange"}
      />
    </div>
  );
}

export default function HeroAtmosphere() {

  const embers = [
    { left:"4%", size:14, delay:"0s", duration:"18s", type:"left" },
    { left:"6%", size:10, delay:"2s", duration:"15s", type:"right" },
    { left:"8%", size:8, delay:"5s", duration:"16s", type:"left" },
    { left:"10%", size:6, delay:"8s", duration:"18s", type:"right" },
    { left:"12%", size:7, delay:"10s", duration:"17s", type:"left" },
    { left:"16%", size:11, delay:"4s", duration:"19s", type:"right" },
    { left:"18%", size:7, delay:"6s", duration:"15s", type:"left" },
    { left:"22%", size:5, delay:"9s", duration:"20s", type:"right" },

    { left:"30%", size:5, delay:"4s", duration:"20s", type:"left" },
    { left:"35%", size:6, delay:"7s", duration:"17s", type:"right" },
    { left:"40%", size:4, delay:"3s", duration:"19s", type:"left" },
    { left:"46%", size:6, delay:"11s", duration:"20s", type:"right" },

    { left:"58%", size:5, delay:"8s", duration:"18s", type:"left" },
    { left:"63%", size:9, delay:"5s", duration:"16s", type:"right" },
    { left:"68%", size:6, delay:"12s", duration:"20s", type:"left" },
    { left:"73%", size:12, delay:"3s", duration:"18s", type:"right" },
    { left:"79%", size:7, delay:"6s", duration:"17s", type:"left" },
    { left:"83%", size:10, delay:"9s", duration:"18s", type:"right" },
    { left:"88%", size:6, delay:"13s", duration:"21s", type:"left" },
    { left:"93%", size:8, delay:"2s", duration:"17s", type:"right" },

    { left:"26%", size:4, delay:"14s", duration:"22s", type:"left" },
    { left:"51%", size:5, delay:"16s", duration:"21s", type:"right" },
    { left:"77%", size:4, delay:"18s", duration:"23s", type:"left" },
    { left:"96%", size:5, delay:"15s", duration:"22s", type:"right" }
  ];

  const mist = [
  { left:"-15%", bottom:"2%", width:1100, height:120, opacity:.30, speed:"42s" },
  { left:"-5%", bottom:"8%", width:950, height:95, opacity:.40, speed:"34s" },
  { left:"20%", bottom:"5%", width:1000, height:115, opacity:.35, speed:"38s" },
  { left:"48%", bottom:"10%", width:900, height:90, opacity:.30, speed:"30s" },
  { left:"65%", bottom:"4%", width:1050, height:120, opacity:.34, speed:"40s" },
  { left:"82%", bottom:"12%", width:850, height:85, opacity:.24, speed:"28s" }
];

  return (
    <>

      <div className="pointer-events-none absolute inset-0 z-[7] overflow-hidden">

        {mist.map((m,i)=>(
          <span
            key={i}
            className={`mist mist-${i%3}`}
            style={{
              left:m.left,
              bottom:m.bottom,
              width:`${m.width}px`,
              height:`${m.height}px`,
              opacity:m.opacity,
              animationDuration:m.speed
            }}
          />
        ))}

      </div>

      <div className="pointer-events-none absolute inset-0 z-[9] overflow-hidden">

        {embers.map((e,i)=>(
          <span
            key={i}
            className={`ember ember-${e.type}`}
            style={{
              left:e.left,
              width:`${e.size}px`,
              height:`${e.size}px`,
              animationDelay:e.delay,
              animationDuration:e.duration
            }}
          />
        ))}

      </div>

    </>
  );

}
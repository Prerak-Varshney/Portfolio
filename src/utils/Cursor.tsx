import { useEffect, useRef } from "react";

const colors = [
  "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
  "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
  "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
  "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
  "#48005f", "#3d005e"
];

const Cursor = () => {
  const circleRefs = useRef<HTMLDivElement[]>([]);
  const coords = useRef({ x: 0, y: 0 });
  const circleCoords = useRef(new Map<HTMLDivElement, { x: number, y: number }>());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animateCircles() {
  
        let x = coords.current.x;
        let y = coords.current.y;
        
        circleRefs.current.forEach(function (circle, index) {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          
          circle.style.scale = ((circleRefs.current.length - index) / circleRefs.current.length).toString();
          circleCoords.current.set(circle, { x, y });

      
          const nextCircle = circleRefs.current[index + 1] || circleRefs.current[0];
          const nextCoords = circleCoords.current.get(nextCircle) || { x, y };
          x += (nextCoords.x - x) * 0.3;
          y += (nextCoords.y - y) * 0.3;
        });
       
        requestAnimationFrame(animateCircles);
      }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {colors.map((color, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              circleRefs.current[index] = el;
            }
          }}
          className="circle"
          style={{ backgroundColor: color }}
        />
      ))}
    </>
  );
};

export default Cursor;

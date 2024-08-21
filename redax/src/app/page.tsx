import HeroSection from "@/components/landing/hero-section";
import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
    {/* <div>hii</div> */}
    <HeroSection/>
    <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </>
  );
}

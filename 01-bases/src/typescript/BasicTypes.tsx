import React from "react";

export const BasicTypes = () => {
  const name: string = "Nathan";
  const age: number = 19;
  const isActive: boolean = true;
  const powers: string[] = ["React", "ReactNative", "Astro"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age} - {isActive ? "Activo" : "No activo"}
      <p>{powers.join(", ")}</p>
    </>
  );
};

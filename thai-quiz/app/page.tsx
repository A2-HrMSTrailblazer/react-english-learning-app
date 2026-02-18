"use client";
import { useState } from "react";

export default function Home() {
  function handleClick() {
    alert("Hello!");
  }
  return (
    <main>
      <h1>Learn Thai!</h1>
      <p>A fun quiz to learn Thai phrases.</p>
      <button onClick={handleClick}>Say Hello!</button>
    </main>
  );
}
/*
  Section 1 - Foundations
  Exercise: JS Output

  Intent: Practice the different ways JavaScript can "output" data —
  writing to the page (innerHTML), writing to the console, and using
  alert/document.write. Ref: https://www.w3schools.com/js/js_output.asp

  Instructions:
  1. Below, find the <div id="demo"></div> in the JSX.
  2. In the useEffect, use document.getElementById("demo").innerHTML
     to display the text "Hello from JS Output!" inside that div.
  3. Also log a different message to the console using console.log().
  4. Save the file and check both the page and the browser console (F12)
     to see your output.
*/

"use client";

import { useEffect } from "react";

export default function JsOutputPage() {
  useEffect(() => {
    // TODO: set the innerHTML of the "demo" div to a message of your choice

    // TODO: console.log() a different message
  }, []);

  return (
    <div>
      <h1>JS Output Practice</h1>
      <div id="demo"></div>
    </div>
  );
}

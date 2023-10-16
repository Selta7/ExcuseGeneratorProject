/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let resultExcuse = () => {
    let who = ["The nerd", "The professor", "My classmates", "Myself"];
    let verb = ["ate", "licked", "pooped", "shot"];
    let what = ["an arrow", "a turd", "a graphics card", "a mouse"];
    let when = ["yesterday", "a month ago", " a while"];

    let whoIndex = Math.floor(Math.random() * who.length);
    let verbIndex = Math.floor(Math.random() * verb.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return (
      who[whoIndex] +
      " " +
      verb[verbIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex]
    );
  };
  //write your code here
  document.querySelector("#excuse").innerHTML = resultExcuse();
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function randomVar(param) {
    return Math.floor(Math.random() * param.length);
  }

  let resultExcuse = () => {
    let who = ["The nerd", "The professor", "My classmates", "Myself"];
    let verb = ["ate", "licked", "pooped", "shot"];
    let what = ["an arrow", "a turd", "a graphics card", "a mouse"];
    let when = ["yesterday", "a month ago", " a while"];

    let whoIndex = randomVar(who);
    let verbIndex = randomVar(verb);
    let whatIndex = randomVar(what);
    let whenIndex = randomVar(when);

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

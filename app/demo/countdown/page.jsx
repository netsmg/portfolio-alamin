
"use client";
import React, { useEffect, useState } from 'react';

const Countdown = () => {
  useEffect(() => {
    const countdownEls = document.querySelectorAll('.countdown');
    countdownEls.forEach((countdownEl) => createCountdown(countdownEl));
  }, []);

  const createCountdown = (countdownEl) => {
    const target = new Date(
      new Date(countdownEl.dataset.targetDate).toLocaleString('en')
    );
    const parts = {
      days: { text: ['days', 'day'], dots: 30 },
      hours: { text: ['hours', 'hour'], dots: 24 },
      minutes: { text: ['minutes', 'minute'], dots: 60 },
      seconds: { text: ['seconds', 'second'], dots: 60 },
    };

    Object.entries(parts).forEach(([key, value]) => {
      const partEl = document.createElement('div');
      partEl.classList.add('part', key);
      partEl.style.setProperty('--dots', value.dots);
      value.element = partEl;

      const remainingEl = document.createElement('div');
      remainingEl.classList.add('remaining');
      remainingEl.innerHTML = `
        <span class="number"></span>
        <span class="text"></span>
      `;
      partEl.append(remainingEl);
      for (let i = 0; i < value.dots; i++) {
        const dotContainerEl = document.createElement('div');
        dotContainerEl.style.setProperty('--dot-idx', i);
        dotContainerEl.classList.add('dot-container');
        const dotEl = document.createElement('div');
        dotEl.classList.add('dot');
        dotContainerEl.append(dotEl);
        partEl.append(dotContainerEl);
      }
      countdownEl.append(partEl);
    });
    getRemainingTime(target, parts);
  };

  const getRemainingTime = (target, parts, first = true) => {
    const now = new Date();
    if (first) console.log({ target, now });
    const remaining = {};
    let seconds = Math.floor(target - now) / 1000;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds =
      seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    Object.entries({ days, hours, minutes, seconds }).forEach(
      ([key, value]) => {
        const remaining = parts[key].element.querySelector('.number');
        const text = parts[key].element.querySelector('.text');
        remaining.innerText = value;
        text.innerText = parts[key].text[Number(value == 1)];
        const dots = parts[key].element.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
          dot.dataset.active = idx <= value;
          dot.dataset.lastactive = idx == value;
        });
      }
    );
    if (now <= target) {
      window.requestAnimationFrame(() => {
        getRemainingTime(target, parts, false);
      });
    }
  };

  return (
  <>
  
  <div className="countdown" data-target-date="2023-12-17 21:04:00"></div>
  <style dangerouslySetInnerHTML={{__html: ".countdown{\n --number-color: hsl(0 0% 100%);\n --text-color: hsl(0 0% 25%);\n --dot-color: hsl(0 0% 10%);\n --dot-color-remaining: hsl(182, 100%, 66%);\n --dot-color-active: hsl(0 100% 50%);\n font-family: system-ui, sans-serif;\n display: grid;\n grid-template-columns: repeat(4, 1fr);\n gap: 1rem;\n width: min(60rem, 100%);\n margin-inline: auto;\n container: inline-size;\n > .part {\n aspect-ratio: 1/1;\n display: grid;\n place-items: center;\n > .remaining {\n grid-area: 1/1;\n color: hsl(0 0% 100%);\n display: grid;\n text-align: center;\n font-size: 4cqi;\n >.number {\n color: var(--number-color);\n }\n >.text {\n color: var(--text-color);\n text-transform: uppercase;\n font-size: 0.5em;\n }\n }\n > .dot-container {\n grid-area: 1/1;\n height: 100%;\n width: 4%;\n rotate: calc(360deg / var(--dots) * var(--dot-idx));\n > .dot {\n width: 100%;\n aspect-ratio: 1/1;\n background-color: var(--dot-color);\n border-radius: 50%;\n transition: background-color .25s;\n &[data-active=true]{\n background-color: var(--dot-color-remaining);\n &[data-lastactive=true]{\n background-color: var(--dot-color-active);\n }\n }\n }\n }\n }\n}\n\n* { box-sizing: border-box }\nhtml, body { height: 100% }\nbody {\n margin: 0;\n padding: 2rem;\n background-color: hsl(0 0% 0%);\n display: grid;\n gap: 1rem;\n align-content: center;\n}\nh1 {\n font-family: system-ui, sans-serif;\n color: hsl(0 0% 100%);\n text-align: center;\n >span:last-of-type{\n color: hsl(182 100% 66%)\n }\n}" }} />
  </>
 );
};

export default Countdown;

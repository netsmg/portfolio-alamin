"use client";
import React, { useEffect } from 'react';

const InfiniteScrollAnimation = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Infinite Scroll Animation</h1>

      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
        </ul>
      </div>

      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          <img src="https://i.pravatar.cc/150?img=1" alt="" />
          <img src="https://i.pravatar.cc/150?img=2" alt="" />
          <img src="https://i.pravatar.cc/150?img=3" alt="" />
          <img src="https://i.pravatar.cc/150?img=4" alt="" />
          <img src="https://i.pravatar.cc/150?img=5" alt="" />
          <img src="https://i.pravatar.cc/150?img=6" alt="" />
        </div>
      </div>

     
    </>
    <style dangerouslySetInnerHTML={{__html: ".scroller {\n max-width: 600px;\n}\n\n.scroller__inner {\n padding-block: 1rem;\n display: flex;\n flex-wrap: wrap;\n gap: 1rem;\n}\n\n.scroller[data-animated=\"true\"] {\n overflow: hidden;\n -webkit-mask: linear-gradient(\n 90deg,\n transparent,\n white 20%,\n white 80%,\n transparent\n );\n mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);\n}\n\n.scroller[data-animated=\"true\"] .scroller__inner {\n width: max-content;\n flex-wrap: nowrap;\n animation: scroll var(--_animation-duration, 40s)\n var(--_animation-direction, forwards) linear infinite;\n}\n\n.scroller[data-direction=\"right\"] {\n --_animation-direction: reverse;\n}\n\n.scroller[data-direction=\"left\"] {\n --_animation-direction: forwards;\n}\n\n.scroller[data-speed=\"fast\"] {\n --_animation-duration: 20s;\n}\n\n.scroller[data-speed=\"slow\"] {\n --_animation-duration: 60s;\n}\n\n@keyframes scroll {\n to {\n transform: translate(calc(-50% - 0.5rem));\n }\n}\n\n/* general styles */\n\n:root {\n --clr-neutral-100: hsl(0, 0%, 100%);\n --clr-primary-100: hsl(205, 15%, 58%);\n --clr-primary-400: hsl(215, 25%, 27%);\n --clr-primary-800: hsl(217, 33%, 17%);\n --clr-primary-900: hsl(218, 33%, 9%);\n}\n\nhtml {\n color-scheme: dark;\n}\n\nbody {\n display: grid;\n min-block-size: 100vh;\n place-content: center;\n font-family: system-ui;\n font-size: 1.125rem;\n background-color: var(--clr-primary-800);\n}\n\n.tag-list {\n margin: 0;\n padding-inline: 0;\n list-style: none;\n}\n\n.tag-list li {\n padding: 1rem;\n background: var(--clr-primary-400);\n border-radius: 0.5rem;\n box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);\n}\n\n/* for testing purposed to ensure the animation lined up correctly */\n.test {\n background: red !important;\n}\n" }} />
  );
};

export default InfiniteScrollAnimation;

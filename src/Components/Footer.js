import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div style={{ flex: 1, height: 200 }}>
        <h2>Scripting and Story boarding:</h2>

        <h5>
          Crafting compelling scripts and detailed storyboards that breathe life
          into your vision. With our Transforming ideas into captivating stories
          through expert scripting and meticulous storyboarding. Every word and
          frame is carefully crafted to captivate and engage your audience.
          Trust us to bring your vision to life with precision and creativity.
        </h5>
      </div>
      <div style={{ flex: 1, height: 200 }}>
        <h2>Pre-production and Shoot:</h2>
        <h5>
          We focus on key elements to ensure a seamless shoot or video
          production. Our experienced team conducts thorough location scouting
          to find captivating settings that align with your creative vision.
          With a team of skilled professionals and state of the art equipment,
          we ensure a seamless and high-quality production experience. During
          production.
        </h5>
      </div>
      <div style={{ flex: 1, height: 200 }}>
        <h2>Post production:</h2>
        <h5>
          In the post production phase, we bring together all the elements to
          polish and enhance your video, ensuring a seamless and captivating
          final product. Our skilled team utilises advanced editing, color
          grading, animation, and sound integration techniques to elevate your
          footage. We strive for excellence, continuously refining and polishing
          your video until it reaches its full potential.
        </h5>
      </div>
    </div>
  );
}

export default Footer;

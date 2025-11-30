---
layout: default
title: About
permalink: /about
---

<style>
  .about-layout {
    display: flex;
    gap: 32px;
    align-items: flex-start;
    margin-top: 20px; /* lets the layout breathe under the H1 */
  }

  .about-text {
    flex: 2;
  }

  .about-photo {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .about-photo img {
    display: block;
    max-width: 220px;
    width: 100%;
    border-radius: 4px; /* rectangle with rounded corners */
    border: 1px solid #b5e853; /* Hacker theme green */
    box-shadow: 0 0 10px rgba(181, 232, 83, 0.25);
  }

  @media (max-width: 800px) {
    .about-layout {
      flex-direction: column;
    }

    .about-photo {
      margin-top: 16px;
    }

    .about-photo img {
      max-width: 180px;
    }
  }
</style>

<section>
  <h1>About</h1>

  <div class="about-layout">
    <div class="about-text">
      <p>
        I’m Esteban, a senior Unity game developer focused on creating polished,
        performant experiences and supporting teams with tools, pipelines, and
        mentoring. Over the last decade I’ve worked on mobile, console and PC
        projects, helping studios ship and grow their games.
      </p>
      <p>
        I enjoy bridging tech and design, collaborating closely with artists,
        producers, and marketing to turn ideas into stable, scalable features.
      </p>
    </div>
    <div class="about-photo">
      <img src="/assets/images/default-preview-image.png" loading="lazy">
    </div>
  </div>
</section>

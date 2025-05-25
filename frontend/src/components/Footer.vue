<template>
  <div class="footer">
    <div class="footer-copyright">
      <p>©2025 Jechiel Butael</p>
    </div>
    <div class="footer-socials">
      <a href="https://x.com">
        <font-awesome-icon
          class="social-icon"
          :icon="['fab', 'x-twitter']"
          :style="{ color: '#afafaf' }"
          size="xl"
        />
      </a>
      <a href="https://instagram.com">
        <font-awesome-icon
          class="social-icon"
          :icon="['fab', 'instagram']"
          :style="{ color: '#afafaf' }"
          size="xl"
        />
      </a>
      <a href="https://facebook.com">
        <font-awesome-icon
          class="social-icon"
          :icon="['fab', 'facebook']"
          :style="{ color: '#afafaf' }"
          size="xl"
        />
      </a>
      <a href="https://youtube.com">
        <font-awesome-icon
          class="social-icon"
          :icon="['fab', 'youtube']"
          :style="{ color: '#afafaf' }"
          size="xl"
        />
      </a>
      <a href="https://linkedin.com">
        <font-awesome-icon
          class="social-icon"
          :icon="['fab', 'linkedin']"
          :style="{ color: '#afafaf' }"
          size="xl"
        />
      </a>
    </div>
    <div class="footer-details">
      <router-link to="/privacy-policy">
        <a>Privacy Policy</a>
      </router-link>
      <router-link to="/terms-of-use">
        <a>Terms of Use</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  
  padding: 0.3rem 2rem;
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 0;
  left: 0;

  p,
  a {
    font-family: "DM Sans" !important;
    font-size: 1.2rem;
  }

  .footer-socials {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    .social-icon {
      color: white;
      transition: color 0.3s ease;

      &:hover {
        color: #e7e7e7 !important;
      }
    }
  }

  .footer-details {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    a {
      transition: color 0.3s ease;
      color: #afafaf;
      text-decoration: none;

      &:hover {
        color: white;
      }
    }
  }

  @media screen and (min-width: 2000px) {
    padding: 1.5rem 1.5rem;
  }
}

@media (min-width: 2000px) {
  .footer {
    width: 100%;
    padding: 1.8rem 5rem;

    .footer-socials {
      gap: 3.5rem;
      margin-bottom: 0.5rem;
    }

    .footer-socials .social-icon {
      font-size: 3rem;
    }

    .footer-details {
      gap: 2.5rem;
    }

    .footer-copyright p {
      font-size: 2.2rem;
      margin-bottom: 0.5rem;
    }

    .footer-details a {
      font-size: 2.2rem;
    }
  }
}

@media (max-width: 1440px) {
  .footer {
    width: 100%;
    padding: 0.5rem 4rem;

    .footer-copyright p {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .footer-socials {
      gap: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .footer-socials .social-icon {
      font-size: 2rem;
    }

    .footer-details {
      gap: 2rem;
    }

    .footer-details a {
      font-size: 1.4rem;
    }
  }
}

@media (max-width: 1024px) {
  .footer {
    width: 100%;
    padding: 0.5rem 3rem;

    .footer-copyright p {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .footer-socials {
      gap: 2rem;
      margin-bottom: 0.5rem;
    }

    .footer-socials .social-icon {
      font-size: 1.5rem;
    }

    .footer-details {
      gap: 2rem;
    }

    .footer-details a {
      font-size: 1.2rem;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    width: 100%;
    flex-direction: row;
    text-align: center;
    padding: 0 1.5rem;

    .footer-copyright p {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .footer-socials {
      gap: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .footer-socials .social-icon {
      font-size: 1.3rem;
    }

    .footer-details {
      gap: 1rem;
    }

    .footer-details a {
      font-size: 0.9rem;
    }
  }
}

@media (max-width: 480px) {
  .footer {
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;

    .footer-copyright p {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }

    .footer-socials {
      gap: 1rem;
      margin-bottom: 0.5rem;
    }

    .footer-socials .social-icon {
      font-size: 1.2rem;
    }

    .footer-details {
      gap: 0.5rem;
    }

    .footer-details a {
      font-size: 0.8rem;
    }
  }
}
</style>

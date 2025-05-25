<template>
  <nav className="app__navbar">
    <router-link to="/" class="logo-container">
      <div className="app__navbar-logo">
        <img src="../assets/app-icon.png" alt="app-icon" />
      </div>
      <div class="app-name">Monify</div>
    </router-link>

    <ul class="app__navbar-links">
      <li
        v-for="item in ['Sign In', 'Sign Up']"
        :key="`link-${item}`"
        class="app__flex p-text"
      >
        <router-link :to="`/${item.toLowerCase().replaceAll(' ', '')}`">{{
          item
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
.app__navbar {
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
  position: fixed;
  z-index: 2;

  @media screen and (min-width: 2000px) {
    padding: 1rem 3rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 769px) {
    padding: 1rem;
  }
}

.logo-container {
  display: flex;
  text-decoration: none;
}
.app-name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: 1.2rem;
  font-family: "DM Sans" !important;
  font-weight: 600;
  color: #afafaf;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  @media screen and (min-width: 1440px) {
    font-size: 2rem;
    margin: 1.5rem 0;
    padding: 1rem;
  }

  @media screen and (min-width: 2000px) {
    font-size: 2.8rem;
    margin: 1.8rem 0;
    padding: 1.5rem;
  }
}

.app__navbar-logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 70px;
    height: 70px;

    @media screen and (min-width: 2000px) {
      width: 100px;
      height: 100px;
    }

    @media screen and (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }
}

.app__navbar-links {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  //margin-right: 8rem;
  gap: 1rem;

  list-style: none;

  li {
    margin: 2rem 0.5rem;
    cursor: pointer;
    background-color: rgb(35, 41, 58);
    border-radius: 40px;
    padding: 7px 16px;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;

    a {
      color: var(--gray-color);
      text-decoration: none;
      flex-direction: column;
      font-family: "DM Sans" !important;
      font-weight: 500;

      transition: all 0.3s ease-in-out;

      &:hover {
        color: var(--secondary-color);
      }
    }

    &:hover {
      div {
        background: var(--secondary-color);
      }
    }
    &:hover {
      background-color: rgb(50, 58, 82);
    }

    @media screen and (max-width: 1440px) {
      margin: 0.5rem 0;
      font-size: 1.3rem;
      padding: 1.2rem 1.5rem;
    }

    @media screen and (max-width: 1024px) {
      margin: 0.5rem 0;
      font-size: 1rem;
      padding: 0.7rem 1rem;
    }

    @media screen and (max-width: 769px) {
      margin: 0.5rem 0;
      font-size: 10px;
      padding: 5px 12px;
    }

    @media screen and (min-width: 2000px) {
      margin: 0.5rem 0;
      font-size: 1.7rem;
      padding: 1.8rem 2rem;
    }
  }

  @media screen and (max-width: 425px) {
    display: none;
  }

  @media screen and (max-width: 1440px) {
    border-radius: 4rem;
    font-size: 1.5px;
    font-weight: 700;
    line-height: 2rem;
    margin-right: 0;
    margin-top: 0.5rem;
    gap: 1.4rem;
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.5px;
    padding: 1rem 2rem;
    font-weight: 700;
    line-height: 2rem;
    margin-right: 0;
    margin-top: 0.5rem;
    gap: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 0;
    margin-top: 0.5rem;
    gap: 1rem;
  }
}

@media (min-width: 300px) {
  .logo-container {
    align-items: center;
    gap: 0.5rem;
  }
}
</style>

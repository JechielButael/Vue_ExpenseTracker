<template>
  <div class="background">
    <div class="content-wrapper">
      <div class="terms-container">
        <h1>Terms of Use</h1>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you agree to be bound by these
            Terms of Use. If you do not agree with any part of these terms, you
            must not use the site.
          </p>
        </section>

        <section>
          <h2>2. User Responsibilities</h2>
          <p>
            You are responsible for your actions on this platform. Any misuse,
            such as hacking, data scraping, or spamming, will result in account
            suspension.
          </p>
        </section>

        <section>
          <h2>3. Modifications</h2>
          <p>
            We reserve the right to modify or update these terms at any time.
            Your continued use of the website signifies your acceptance of the
            revised terms.
          </p>
        </section>

        <section>
          <h2>4. Contact</h2>
          <p>
            If you have any questions about these Terms of Use, please contact
            us at
            <a href="mailto:support@monify.com">support@monify.com</a>.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TermsOfUse",
};
</script>

<style scoped lang="scss">
.terms-container {
  width: 80%;
  height: 70vh;
  margin: 4rem auto;
  color: #afafaf;
  overflow: auto;
  margin-top: 3rem;
  text-align: left;
}

h1,
h2,
p,
a {
  font-family: "DM Sans", sans-serif;
}

h1,
h2 {
  color: #afafaf;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 1.5rem;
}

a {
  color: #afafaf;
  text-decoration: underline;
}

p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 1.7rem;
  }
  p,
  a {
    font-size: 1.3rem;
  }
}

@media (min-width: 1440px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
  }
  p,
  a {
    font-size: 1.5rem;
  }
}

@media (min-width: 2000px) {
  h1 {
    font-size: 5.5rem;
  }
  h2 {
    font-size: 3.5rem;
  }
  p,
  a {
    font-size: 2.7rem;
  }
}
</style>

<template>
  <div class="background">
    <div class="content-wrapper">
      <div class="policy-container">
        <h1>Privacy Policy</h1>
        <p>
          Welcome to ExpenseTracker. We value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and protect your data when you use our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal data such as your name, email address, and
          transaction history to provide better services. This information is
          securely stored and not shared with third parties.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          The collected data helps us enhance user experience, provide customer
          support, and improve our services. We do not sell or share your
          personal information with advertisers or external companies.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, modify, or delete your personal data at
          any time. If you wish to do so, please contact our support team.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",
};
</script>

<style scoped>
.policy-container {
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
p {
  font-family: "DM Sans", sans-serif;
}

h1,
h2 {
  color: #afafaf;
  margin-bottom: 1rem;
  align-items: flex-start;
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
  p {
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
  p {
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
  p {
    font-size: 2.7rem;
  }
}
</style>

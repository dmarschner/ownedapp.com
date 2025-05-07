document.addEventListener('DOMContentLoaded', function () {
  const emailLinks = document.querySelectorAll('.email-link');

  emailLinks.forEach(link => {
    const user = link.dataset.user;
    const domain = link.dataset.domain;
    if (user && domain) {
      const email = `${user}@${domain}`;
      link.href = `mailto:${email}`;
    }
  });
}); 
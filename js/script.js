$(document).ready(() => {
  $("#owl-example").owlCarousel({
    items: 4,
    pagination: true,
    paginationSpeed: 1000,
    navigation: true,
    navigationText: ["", "<i class='fa fa-angle-right'></i>"],
    slideSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
  });
});
// Contact us
let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-message");

const sendContactForm = (e) => {
  e.preventDefault();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "loveaylin844@gmail.com",
    Password: "00A57191C843EA31949AF662AAA464520071",
    To: "loveaylin844@gmail.com",
    From: "loveaylin844@gmail.com",
    Subject: "Request from italiano restaurant",
    Body: `
    Name: ${contactName.value}
    <br>
    Email: ${contactEmail.value}
    <br>
    Message: ${contactMessage.value}
    `,
  }).then((message) => {
    alert(message);

    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  });
};

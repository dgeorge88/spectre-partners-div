const imgArr = [
  {
    id: 1,
    content:
      "We can integrate your website with Google Maps, Google Pay, advertise your site using Google Ad Words and allow users to create an account with Gmail.",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    id: 2,
    content:
      "Let your new users sign up using their Facebook profile to make account creation quick and easy..",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    id: 3,
    content:
      "Industry leading Adobe Creative Cloud software is used in the creation and design of all our website and app projects.",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    id: 4,
    content:
      "All web applications are developed using the industry standard Laravel PHP web framework.",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    id: 5,
    content:
      "Our team use industry renowned Apple Macs and IOS software to produce the highest standard of work possible.",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    id: 6,
    content:
      "We use the best project management software to see your project from start to finish.",
    url: "https://via.placeholder.com/600/92c952",
  },
];

imgArr.map((data) => {
  let div = document.createElement("div");
  div.id = data.id;
  div.className = "partner-container";

  let partner = document.createElement("img");
  partner.className = "partner";
  partner.srcset = data.url;
  div.appendChild(partner);

  let imgTitle = document.createElement("h3");
  imgTitle.className = "partner-title";
  imgTitle.innerHTML = data.content;
  div.appendChild(imgTitle);

  document.getElementsByClassName("partners")[0].appendChild(div);
});

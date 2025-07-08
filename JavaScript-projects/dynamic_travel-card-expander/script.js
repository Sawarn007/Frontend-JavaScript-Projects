document.addEventListener("DOMContentLoaded", () => {
  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      continent: "Europe",
      description: "Beautiful  beach and sunsets.",
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      image:
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      continent: "Asia",
      description:
        "The best place to take a photo of the Tokyo Tower is at the viewing deck of Mori building in Roponggi Hills",
    },
    {
      name: "Banff, Canada",
      id: 3,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      continent: "North America",
      description: "Stunning mountain views and turquoise lakes.",
    },
    {
      name: "Cappadocia, Turkey",
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1661964146949-a35b9ae06f89?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      continent: "Asia",
      description: "Hot air balloons over fairy chimneys.",
    },
    {
      name: "Venice, Italy",
      id: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1661963047742-dabc5a735357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmVuaWNlJTJDJTIwSXRhbHl8ZW58MHx8MHx8fDA%3D",
      continent: "Europe",
      description: "City of canals and romantic gondola rides.",
    },
  ];

  let mainDiv = document.getElementById("container");

  destinations.forEach((eachDestination, index) => {
    console.log("img>> ", eachDestination.image);

    let panelDiv = document.createElement("div");
    let panelText = document.createElement("h3");
    let descriptionDiv = document.createElement("div");
    let descriptionText = document.createElement("p");

    //add class
    panelDiv.classList.add("panel");
    panelText.classList.add("title");
    descriptionText.classList.add("detailsDescription");
    descriptionDiv.classList.add("details");

    //added data to element
    panelDiv.style.backgroundImage = `URL(${eachDestination.image})`;
    panelText.textContent = eachDestination.name;
    descriptionText.textContent = eachDestination.description;

    // default logic
    if (eachDestination.id === 1) {
      panelDiv.classList.add("panelActive");
      panelText.classList.add("titleActive");
    }

    //render element
    descriptionDiv.appendChild(descriptionText);
    panelDiv.appendChild(descriptionDiv);
    panelDiv.appendChild(panelText);
    mainDiv.appendChild(panelDiv);

    //rest logic
    panelDiv.addEventListener("click", () => {
      removeActiveClass();
      panelDiv.classList.add("panelActive");
      panelText.classList.add("titleActive");
      //   descriptionDiv.classList.add("block");
    });

    function removeActiveClass() {
      const allPanels = document.querySelectorAll(".panel");
      const allTitles = document.querySelectorAll(".title");
      const alldetails = document.querySelectorAll(".details");

      allPanels.forEach((p) => p.classList.remove("panelActive"));
      allTitles.forEach((t) => t.classList.remove("titleActive"));
      alldetails.forEach((d) => d.classList.remove("block")); //not working
    }

    //tried mouseenter for hover effect
    panelText.addEventListener("mouseenter", () => {
      descriptionDiv.classList.add("block");
    });
  });
});

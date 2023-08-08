
  // JavaScript
  const myDocuments = {
    // Add your blog post URLs or text content here
  };

  const searchBox = document.getElementById("search-box");
  const searchButton = document.getElementById("search-button");
  const searchResult = document.getElementById("search-result");

  function searchDocuments() {
    const keyword = searchBox.value.toLowerCase().trim();
    if (keyword === "") {
      searchResult.innerHTML = "<p>Please enter a search term.</p>";
      return;
    }

    const filteredDocuments = [];
  
    // Search through blog post URLs or text content
    Object.values(myDocuments).forEach((locationGroup) => {
      if (typeof locationGroup === "string") {
        // If it's a text content
        if (locationGroup.toLowerCase().includes(keyword)) {
          filteredDocuments.push(locationGroup);
        }
      } else {
        // If it's an array of URLs
        const filteredUrls = locationGroup.filter((url) =>
          url.toLowerCase().includes(keyword)
        );
        filteredDocuments.push(...filteredUrls);
      }
    });

    currentPage = 1;
    displayDocuments(filteredDocuments);
  }

  function displayDocuments(documents) {
    searchResult.innerHTML = "";
    for (let i = 0; i < documents.length; i++) {
      const documentContent = documents[i];
      let documentElement;

      if (typeof documentContent === "string") {
        // If the document is text content
        const textElement = document.createElement("p");
        textElement.textContent = documentContent;
        documentElement = textElement;
      } else {
        // If the document is a blog post URL or any other content type, you can customize this part based on your need
        const linkElement = document.createElement("a");
        linkElement.href = documentContent;
        linkElement.textContent = documentContent; // You can modify this to display custom text for blog post titles, etc.
        documentElement = linkElement;
      }

      const documentContainer = document.createElement("div");
      documentContainer.classList.add("document-container");
      documentContainer.appendChild(documentElement);
      searchResult.appendChild(documentContainer);
    }

    if (documents.length === 0) {
      searchResult.innerHTML = "<p>No results found.</p>";
    }
  }

  searchButton.addEventListener("click", searchDocuments);
  searchBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      searchDocuments();
    }
  });


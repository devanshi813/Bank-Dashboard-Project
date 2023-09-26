// JavaScript code in tracklead.js
document.addEventListener("DOMContentLoaded", function () {
    // Get all filter links
    const filterLinks = document.querySelectorAll(".dropdown-content a");

    // Add click event listeners to filter links
    filterLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the data-value attribute from the clicked link
            const filterValue = this.getAttribute("data-value");

            // Call a function to filter the product rows
            filterProductRows(filterValue);
        });
    });
});

function filterProductRows(filterValue) {
    // Get all product rows
    const productRows = document.querySelectorAll(".products-row");
  
    // Loop through each product row
    productRows.forEach(function (row) {
      // Get the status cell in this row
      const statusCell = row.querySelector(".status-cell .status");
  
      console.log("Status Text:", statusCell.textContent.trim().toLowerCase()); // Debugging line
  
      if (filterValue === "all" || filterValue.toLowerCase() === statusCell.textContent.trim().toLowerCase()) {
        // Show the row
        row.style.display = "flex";
      } else {
        // Hide the row
        row.style.display = "none";
      }
    });
  }

  // Dummy data for products
const dummyData = [
{
id: "060623DCS",
date: "06.06.2023",
mobile: "8451236478",
remarks: "",
service: "Shop Act below 9 employees",
name: "David Clark",
},
{
id: "060624DCS",
date: "07.06.2023",
status: "Paid",
remarks: "",
service: "Shop Act above 9 employees",
name: "John Doe",
},
// Add more dummy data as needed
];

// Function to populate product rows with dummy data
function populateProductRows() {
const productsArea = document.querySelector(".products-area-wrapper");

dummyData.forEach(function (data) {
const newRow = document.createElement("div");
newRow.classList.add("products-row");

newRow.innerHTML = `
    <button class="cell-more-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
    </button>
    <div class="product-cell image">
        <span>${data.id}</span>
    </div>
    <div class="product-cell category"><span class="cell-label">Date:</span>${data.date}</div>
    <div class="product-cell sales"><span class="cell-label">Mobile:</span>${data.mobile}</div>
    <div class="product-cell sales"><span class="cell-label">Remarks:</span>${data.remarks}</div>
    <div class="product-cell stock"><span class="cell-label">Service:</span>${data.service}</div>
    <div class="product-cell price"><span class="cell-label">Name:</span>${data.name}</div>

`;

productsArea.appendChild(newRow);
});
}

// Call the function to populate product rows
populateProductRows();
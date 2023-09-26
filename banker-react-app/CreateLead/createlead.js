// Get references to the input elements and dropdown elements
const typeOfServicesInput = document.getElementById("type_of_services");
const standardFeesInput = document.getElementById("standard_fees");
const serviceSelect = document.getElementById("service_select");
const nameInput = document.getElementById("name");
const mobileNumberInput = document.getElementById("mobile_number");
const remarksInput = document.getElementById("remarks");
const createButton = document.getElementById("create_button");

// Define a mapping of services to their details
const serviceDetails = {
  "Project Report": { type: "Project Report", fees: "NA" },
  "Tax Planning": { type: "Tax Planning", fees: "NA" },
  "Investment Consultancy": { type: "Investment Consultancy", fees: "NA" },
  "Shop Act below 9 employees": { type: "Shop Act below 9 employees", fees: "400" },
  "Shop Act Above 9 employees": { type: "Shop Act Above 9 employees", fees: "1500" },
  "Udyam Reg (MSME)": { type: "Udyam Reg (MSME)", fees: "500" },
  "Food License": { type: "Food License", fees: "500" },
  "Company Incorporation": { type: "Company Incorporation", fees: "15000" },
  "Partnership Firm Registration": { type: "Partnership Firm Registration", fees: "6000" },
  "Professional Tax": { type: "Professional Tax", fees: "1000" },
  "Digital Signature": { type: "Digital Signature", fees: "600" },
  "Rera Registration": { type: "Rera Registration", fees: "2500" },
};

// Add an event listener to the select element
serviceSelect.addEventListener("change", function () {
  const selectedService = serviceSelect.value;

  // Update the "Type of Services" input with the selected service's type
  typeOfServicesInput.value = serviceDetails[selectedService]?.type || "";

  // Update the "Standard Fees" input with the selected service's fees
  standardFeesInput.value = serviceDetails[selectedService]?.fees || "";
});

// Add an event listener to the "Create" button
createButton.addEventListener("click", function () {
  // Get the form data
  const customerData = {
    name: nameInput.value,
    mobileNumber: mobileNumberInput.value,
    selectedService: serviceSelect.value,
    typeOfServices: typeOfServicesInput.value,
    standardFees: standardFeesInput.value,
    remarks: remarksInput.value,
  };

  // Send a POST request to a dummy API endpoint (replace with your actual endpoint)
  fetch("https://dummyapi.com/customer/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customerData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the dummy backend (e.g., show a success message)
      alert("Customer data has been created successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

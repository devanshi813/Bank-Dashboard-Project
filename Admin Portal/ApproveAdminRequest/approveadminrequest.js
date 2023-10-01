// Dummy data (you can replace this with data fetched from the backend)
const dummyData = [
    { name: "John Doe" },
    { name: "Jane Smith" },
    // Add more data as needed
  ];
  
  // Function to create a new row with name and buttons
  function createRow(data) {
    const nameList = document.getElementById("nameList");
  
    const li = document.createElement("li");
    li.className = "name-item";
  
    const nameColumn = document.createElement("div");
    nameColumn.className = "name-column";
  
    const span = document.createElement("span");
    span.className = "name";
    span.textContent = data.name;
  
    nameColumn.appendChild(span);
  
    const buttonColumn = document.createElement("div");
    buttonColumn.className = "button-column";
  
    const approveBtn = document.createElement("button");
    approveBtn.className = "approve-btn";
    approveBtn.textContent = "Approve";
  
    const rejectBtn = document.createElement("button");
    rejectBtn.className = "reject-btn";
    rejectBtn.textContent = "Reject";
  
    buttonColumn.appendChild(approveBtn);
    buttonColumn.appendChild(rejectBtn);
  
    li.appendChild(nameColumn);
    li.appendChild(buttonColumn);
  
    nameList.appendChild(li);
  }
  
  // Function to populate the list with dummy data
  function populateList() {
    dummyData.forEach((data) => {
      createRow(data);
    });
  }
  
  // Call the function to populate the list with dummy data
  populateList();
  
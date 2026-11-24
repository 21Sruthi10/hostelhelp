const form = document.getElementById("complaintForm");
const complaintList = document.getElementById("complaintList");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const roll = document.getElementById("roll").value;
    const department = document.getElementById("department").value;
    const category = document.getElementById("category").value;
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;

    // Remove "No complaints" message
    const emptyMessage = document.querySelector(".empty");

    if (emptyMessage) {
        emptyMessage.remove();
    }

    // Create complaint card
    const complaint = document.createElement("div");

    complaint.className = "complaint-card";

    complaint.innerHTML = `
        <h3>${subject}</h3>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Roll Number:</strong> ${roll}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Description:</strong> ${description}</p>

        <p>
            <strong>Status:</strong>
            <span class="status">Pending</span>
        </p>
    `;

    // Add complaint to webpage
    complaintList.appendChild(complaint);

    // Show success message
    successMessage.textContent =
        "✓ Complaint submitted successfully!";

    // Clear form
    form.reset();

    // Hide success message after 4 seconds
    setTimeout(function() {
        successMessage.textContent = "";
    }, 4000);

});
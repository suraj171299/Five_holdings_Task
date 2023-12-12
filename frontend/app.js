function openAddForm() {
  var addForm = document.getElementById('addForm');
  addForm.style.display = 'block';
}

function closeAddForm() {
  var addForm = document.getElementById('addForm');
  addForm.style.display = 'none';
}

async function saveFormData() {
  const nameInput = document.getElementById('nameInput').value;
  const phoneNumberInput = document.getElementById('phoneNumberInput').value;
  const emailInput = document.getElementById('emailInput').value;
  const hobbiesInput = document.getElementById('hobbiesInput').value;

  const formData = {
    name: nameInput,
    phoneNumber: phoneNumberInput,
    email: emailInput,
    hobbies: hobbiesInput,
  };

  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      closeAddForm();
    } else {
      console.error('Failed to save data:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

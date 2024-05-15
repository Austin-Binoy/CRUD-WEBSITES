/*
document.getElementById('contractForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  console.log('Form submission intercepted.');

  const contractDate = document.getElementById('contractDate').value;
  const propertyAddress = document.getElementById('propertyAddress').value;
  const tenants = document.getElementById('tenants').value.split(',').map(tenant => tenant.trim());
  const landlord = document.getElementById('landlord').value;
  const feeMonthly = document.getElementById('feeMonthly').value;
  const propertyDoorNumber = document.getElementById('propertyDoorNumber').value;
  const contractLength = document.getElementById('contractLength').value;
  const propertyType = document.getElementById('propertyType').value;
  const otherPropertyType = document.getElementById('otherPropertyType').value || null;

  const data = {
    contractDate,
    propertyAddress,
    tenants,
    landlord,
    feeMonthly,
    propertyDoorNumber,
    contractLength,
    propertyType,
    otherPropertyType
  };

  console.log('Data to be sent:', data);

  try {
    const response = await fetch('http://localhost:4000/api/contracts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Contract submitted successfully!');
    } else {
      alert('Failed to submit contract.');
      console.error('Response status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});

function checkPropertyType() {
  const propertyType = document.getElementById('propertyType').value;
  const otherPropertyTypeDiv = document.getElementById('otherPropertyTypeDiv');
  console.log('Property type selected:', propertyType);
  if (propertyType === 'Other') {
    otherPropertyTypeDiv.classList.remove('hidden');
  } else {
    otherPropertyTypeDiv.classList.add('hidden');
  }
}

// Add an event listener for the property type change
document.getElementById('propertyType').addEventListener('change', checkPropertyType);
*/




    function checkPropertyType() {
      const propertyType = document.getElementById("propertyType").value;
      const otherPropertyTypeDiv = document.getElementById("otherPropertyTypeDiv");
      if (propertyType === "Other") {
        otherPropertyTypeDiv.style.display = "block";
      } else {
        otherPropertyTypeDiv.style.display = "none";
      }
    }

    $(document).ready(function() {
      $('#contractForm').on('submit', function(event) {
        event.preventDefault();
        const formData = {
          contractDate: $('#contractDate').val(),
          propertyAddress: $('#propertyAddress').val(),
          tenants: $('#tenants').val(),
          landlord: $('#landlord').val(),
          feeMonthly: $('#feeMonthly').val(),
          propertyDoorNumber: $('#propertyDoorNumber').val(),
          contractLength: $('#contractLength').val(),
          propertyType: $('#propertyType').val(),
          otherPropertyType: $('#otherPropertyType').val()
        };

        $.ajax({
          url: 'http://localhost:4000/api/contracts', // Update URL to match backend
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(formData),
          success: function(response) {
            alert('Form submitted successfully');
            console.log(response);
          },
          error: function(error) {
            alert('Error submitting form');
            console.log(error);
          }
        });
      });
    });

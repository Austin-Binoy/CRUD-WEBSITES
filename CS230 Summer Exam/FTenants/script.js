function checkTitle(formPrefix) {
    const title = document.getElementById(`${formPrefix}Title`).value;
    const otherTitleDiv = document.getElementById(`${formPrefix}OtherTitleDiv`);
    if (title === 'Other') {
        otherTitleDiv.classList.remove('hidden');
    } else {
        otherTitleDiv.classList.add('hidden');
    }
}

function submitForm(event, formId, url, method) {
    event.preventDefault();
    const formData = new FormData(document.getElementById(formId));
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Operation successful!`);
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
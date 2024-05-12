$(document).ready(function () {
    console.log('Document is ready');

    $('#createLandlordForm').submit(function (e) {
        var landlord = {
            title: $('#createTitle').val(),
            firstName: $('#createFirstName').val(),
            surname: $('#createSurname').val(),
            phoneNumber: $('#createPhoneNumber').val(),
            emailAddress: $('#createEmailAddress').val(),
            homeAddress:{
                addressLine1: $('#createAddressLine1').val(),
                addressLine2: $('#createAddressLine2').val(),
                town: $('#createTown').val(),
                countyCity: $('#createCountyOrCity').val(),
                eircode: $('#createEircode').val(),
            },
            dateOfBirth: $('#createDateOfBirth').val(),
            councilPermission: $('#createPermissionToRent').val(),
            emailPermission: $('#createPermissionToContactViaEmail').val()
        };

        console.log(landlord);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:4000/api/landlords',
            contentType: 'application/json',
            data: JSON.stringify(landlord),

            success: () => {
                alert('Landlord Added Successfully!');
            }
        })
        .done(function (data) {
            // Reset the form for next time
            $('#createTitle').val(''),
            $('#createFirstName').val(''),
            $('#createSurname').val(''),
            $('#createPhoneNumber').val(''),
            $('#createEmailAddress').val(''),
            $('#createAddressLine1').val(''),
            $('#createAddressLine2').val(''),
            $('#createTown').val(''),
            $('#createCountyOrCity').val(''),
            $('#createEircode').val(''),
            $('#createDateOfBirth').val(''),
            $('#createPermissionToRent').val(''),
            $('#createPermissionToContactViaEmail').val('')
        });
        e.preventDefault();
    });

    $('#retrieveLandlordForm').submit(function (e) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4000/api/landlords',
            data: { id: $('#retrieveLandlordId').val() },
        })
        .done(function (data) {
            // Display the landlord details in the textarea
            $('#displayLandlordDetails').val(JSON.stringify(data, null, 2)).trigger('input');
        });
        e.preventDefault();
    });

    $('#updateLandlordForm').submit((e) => {
        var update = {
            id: $('#updateLandlordId').val(),
            title: $('#updateTitle').val(),
            firstName: $('#updateFirstName').val(),
            surname: $('#updateSurname').val(),
            phoneNumber: $('#updatePhoneNumber').val(),
            emailAddress: $('#updateEmailAddress').val(),
            homeAddress:{
                addressLine1: $('#updateAddressLine1').val(),
                addressLine2: $('#updateAddressLine2').val(),
                town: $('#updateTown').val(),
                countyCity: $('#updateCountyOrCity').val(),
                eircode: $('#updateEircode').val(),
            },
            dateOfBirth: $('#updateDateOfBirth').val(),
            councilPermission: $('#updatePermissionToRent').val(),
            emailPermission: $('#updatePermissionToContactViaEmail').val()
        };

        console.log(update);

        $.ajax({
            type: 'PUT',
            url: 'http://localhost:4000/api/landlords',
            contentType: 'application/json',
            data: JSON.stringify(update),
            success: () => {
                alert('Successfully Updated Landlord Details!');
            }
        })
        e.preventDefault();
    });

    $('#deleteLandlordForm').submit((e) => {
        var del = {
            id: $('#deleteLandlordId').val(),
        };
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:4000/api/landlords',
            contentType: 'application/json',
            data: JSON.stringify(del),
            success: () => {
                alert('Landlord Deleted!');
            }
        })
        .done(function (data) {
            // Reset the form for next time
            $('#deleteLandlordId').val('')
        });
        e.preventDefault();
    });
});

$(document).ready(function () {
    console.log('Document is ready');


    $('#addTenantForm').submit(function (e) {
        var tenant = {
            title: $('#title').val(),
            firstName: $('#firstName').val(),
            surName: $('#surName').val(),
            email: $('#email').val(),
            phoneNumber: $('#phoneNumber').val(),
            homeAddress:{
                addressLine1: $('#addressLine1').val(),
                addressLine2: $('#addressLine2').val(),
                town: $('#town').val(),
                county: $('#county').val(),
                eircode: $('#eircode').val(),
            }
        };

        console.log(tenant);
        $.ajax({

            type: 'POST',
            url: 'http://localhost:4000/api/tenant',
            contentType: 'application/json',
            data: JSON.stringify(tenant),

            success: () => {
                alert('Tenant Added Successfully!');
            }
        })
            .done(function (data) {
                // Reset the form for next time
                $('#title').val(''),
                    $('#firstName').val(''),
                    $('#surName').val(''),
                    $('#email').val(''),
                    $('#phoneNumber').val(''),
                    $('#addressLine1').val(''),
                    $('#addressLine2').val(''),
                    $('#town').val(''),
                    $('#county').val(''),
                    $('#eircode').val('')
            });
        e.preventDefault();
    });

    $('#getTenantDatabaseForm').submit(function (e) {

        $.ajax({
            type: 'GET',
            url: 'http://localhost:4000/api/tenant',
            data: { email: $('#findEmail').val() },
        })
            .done(function (data) {
                // Display the database in the textarea and trigger an input change event
                $('#displayTenantDetails').val(JSON.stringify(data, null, 2)).trigger('input');
            });
        e.preventDefault();
    });

    $('#updateTenantData').submit((e) => {
        var update = {
            email: $('#updateEmail').val(),
            firstName: $('#updateFirstName').val(),
            surName: $('#updateLastName').val(),
            phoneNumber: $('#updatePhoneNumber').val()
        };

        console.log(update);

        $.ajax({
            type: 'PUT',
            url: 'http://localhost:4000/api/tenant',
            contentType: 'application/json',
            data: JSON.stringify(update),
            success: () => {
                alert('Successfully Updated Tenant Details!');
            }
        })
        e.preventDefault();
    });

    $('#deleteTenantDatabaseForm').submit((e) => {
        var del = {
            email: $('#findEmailToDelete').val(),
        };
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:4000/api/tenant',
            contentType: 'application/json',
            data: JSON.stringify(del),
            success: () => {
                alert('Tenant Deleted!');
            }
        })
            .done(function (data) {
                // Reset the form for next time
                $('#findEmailToDelete').val('')

            });
        e.preventDefault();
    });

});
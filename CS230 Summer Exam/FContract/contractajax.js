$(document).ready(function () {
    console.log('Document is ready');

    $('#createContractForm').submit(function (e) {
        var contract = {
            contractDate: $('#contractDate').val(),
            propertyAddress: $('#propertyAddress').val(),
            tenants: $('#tenants').val().split(',').map(item => item.trim()),
            landlord: $('#landlord').val(),
            feeMonthly: $('#feeMonthly').val(),
            propertyDoorNumber: $('#propertyDoorNumber').val(),
            contractLength: $('#contractLength').val(),
            propertyType: $('#propertyType').val(),
            otherPropertyType: $('#otherPropertyType').val()
        };

        console.log(contract);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:4000/api/contracts',
            contentType: 'application/json',
            data: JSON.stringify(contract),

            success: () => {
                alert('Contract Added Successfully!');
            }
        })
        .done(function (data) {
            // Reset the form for next time
            $('#contractDate').val(''),
            $('#propertyAddress').val(''),
            $('#tenants').val(''),
            $('#landlord').val(''),
            $('#feeMonthly').val(''),
            $('#propertyDoorNumber').val(''),
            $('#contractLength').val(''),
            $('#propertyType').val(''),
            $('#otherPropertyType').val('')
        });
        e.preventDefault();
    });

    $('#retrieveContractForm').submit(function (e) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4000/api/contracts',
            data: { id: $('#retrieveContractId').val() },
        })
        .done(function (data) {
            // Display the contract details in the textarea
            $('#displayContractDetails').val(JSON.stringify(data, null, 2)).trigger('input');
        });
        e.preventDefault();
    });

    $('#updateContractForm').submit((e) => {
        var update = {
            id: $('#updateContractId').val(),
            contractDate: $('#updateContractDate').val(),
            propertyAddress: $('#updatePropertyAddress').val(),
            tenants: $('#updateTenants').val().split(',').map(item => item.trim()),
            landlord: $('#updateLandlord').val(),
            feeMonthly: $('#updateFeeMonthly').val(),
            propertyDoorNumber: $('#updatePropertyDoorNumber').val(),
            contractLength: $('#updateContractLength').val(),
            propertyType: $('#updatePropertyType').val(),
            otherPropertyType: $('#updateOtherPropertyType').val()
        };

        console.log(update);

        $.ajax({
            type: 'PUT',
            url: 'http://localhost:4000/api/contracts',
            contentType: 'application/json',
            data: JSON.stringify(update),
            success: () => {
                alert('Successfully Updated Contract Details!');
            }
        })
        e.preventDefault();
    });

    $('#deleteContractForm').submit((e) => {
        var del = {
            id: $('#deleteContractId').val(),
        };
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:4000/api/contracts',
            contentType: 'application/json',
            data: JSON.stringify(del),
            success: () => {
                alert('Contract Deleted!');
            }
        })
        .done(function (data) {
            // Reset the form for next time
            $('#deleteContractId').val('')
        });
        e.preventDefault();
    });
});

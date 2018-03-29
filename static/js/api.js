function changeStatus(id){
    $.ajax({
        type: "PUT",
        url: "/api/changeStatus",
        data: {
            _id: id
        },
        success: function(data){
            if(data.status===200)
                window.location.reload();
        }
    })
}

function deleteItem(id){
    console.log(id);
    $.ajax({
        type: "DELETE",
        url: "/api/deleteItem",
        data: {
            _id: id
        },
        success: function(data){
            if(data.status===200)
                window.location.reload();
        }
    })
}
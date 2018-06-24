var getSong = function (id, onSuccess, onError) {
    var url = "http://597d5e8b50cf410011fd00ff.mockapi.io/Quotes/song/" + id;
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    }
    $.ajax(url, settings)
}
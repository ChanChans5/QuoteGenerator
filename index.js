function fetchApi() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes',
        headers: { 'X-Api-Key': 'zAoLMwB129/kKVKmxSJwxg==KM85LrlUip2ectTf' },
        contentType: 'application/json',
        success: function(result) {
            const quoteData = result[0];
            $('#quote').text(`"${quoteData.quote}"`);
            $('#author').text(`— ${quoteData.author}`);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            $('#quote').text('Failed to load quote.');
            $('#author').text('');
        }
    });
}

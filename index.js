function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
        // Append the new id to the DOM
        document.body.innerHTML += `<p>${data.id}</p>`;
    })
    .catch(error => {
        // Handle errors and append the message to the DOM
        document.body.innerHTML += `<p>${error.message}</p>`;
    });
}

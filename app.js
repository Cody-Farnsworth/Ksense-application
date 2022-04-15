

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const rows = data.map(user => {
            return `                       
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td><button onclick="fetchPost(${user.id})">Select</button></td>
                        </tr>
                    `;
        }).join("");
        const html = `
                        <table>
                            <thead>
                                <tr>
                                    <th>UserID</th>
                                    <th>Name</th>
                                    <th>Posts</th>
                            </thead>
                            <tbody>`
                        +
                        rows +
                        '</tbody></table>';
        console.log(html);
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    });
}

function fetchPost(userId) {
    
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then(data =>{
        console.log(data);
        var content = data.map(post => {
            return `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>                   
                </tr>
            `;
        }).join("");
        const html = `
                <table>
                    <thread>
                        <th>Post ID</th>
                        <th>Posts</th>
                    </thread>
                    <tbody>`
                +
                content +
                `</tbody></table`     
        document.querySelector("#app2").insertAdjacentHTML("afterbegin", html);
    });
}

    fetchData();


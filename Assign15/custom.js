// connect to JSON Placeholder
const fetch_btn = document.getElementById("fetch");
const refresh = document.getElementById("refresh");
const post_section = document.getElementById("post");

fetch_btn.addEventListener('click', fetchData, {once:true, passive:false});
refresh.addEventListener('click', fetchData, {passive:false});

function fetchData(event) {
    let clicked = event.target.id;
    let post_id;

    switch(clicked) {
        case "fetch":
            post_id = 1;
            break;
        case "refresh":
            post.innerHTML = "";
            post_id = ~~((Math.random() * 10) + 1);
            break;
        default:
            console.log();
            break;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then((data) => {
        return data.json();
    })
    .then((result) => displayPosts(result))
    .catch((error) => alert(`Sorry, we couldn't access the API`));
}

function displayPosts(post) {
    let newElement1 = document.createElement('h3');
    newElement1.innerText = post.title;
    post_section.append(newElement1);
    
    newElement1.style.textTransform = "capitalize";
    newElement1.style.color = "#FFFFFF";

    let newElement2 = document.createElement("p");
    newElement2.innerText = post.body;
    post_section.append(newElement2);
}
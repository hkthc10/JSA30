
const mainTitle = document.getElementById("name-o-game")
const commentInput = document.getElementById('comment-input')
const addBtn = document.getElementById('add-btn')
const commentcontainer = document.getElementById('comment-container')

console.log(mainTitle);

let commentList = JSON.parse(localStorage.getItem("comment-list")) || [];

function addComment(event) {

    event.preventDefault()

    let commentText = commentInput.value;
    console.log(commentText);

    commentList.push(commentText);
    
    localStorage.setItem("comment-list", JSON.stringify(commentList));

    commentInput.value = ""

    renderCommentList()
} 

function renderCommentList() {
    let htmls = "";
    for (let i = 0; i < commentList.length; i++) {
        htmls += "<li>" + commentList[i] + "</li>";
    }
    commentcontainer.innerHTML = htmls
}



addBtn.addEventListener('click', function(event) {
    addComment(event)
})
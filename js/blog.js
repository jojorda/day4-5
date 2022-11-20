let data = [];

function addData(event) {

    event.preventDefault()

    let projectName = document.getElementById('project-name').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('description-box').value;
    let nodeJs = document.getElementById('nodejs').checked;
    let image = document.getElementById('input-image').files;

    let gambar = URL.createObjectURL(image[0])

    console.log("gambar", image[0])
    console.log("gambar dengan path", gambar)


    if(projectName == '') {
        alert('Project Name harus di isi !');
    } else if(startDate && endDate == '') {
        alert('Date harus di isi !');
    } else if(description == '') {
        alert('Description harus di isi !');
    } else if(nodeJs == '') {
        alert('nodeJS harus di isi !');
    } 

    let blog = {
        projectName,
        startDate,
        endDate,
        description,
        nodeJs,
        postAt: new Date()
    }

    data.push(blog);
    console.log(data);
    renderBlog();
    
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ``
    for (let index = 0; index < data.length; index++) {
        document.getElementById("contents").innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${data[index].gambar}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">${data[index].title}</a>
      </h1>
      <div class="detail-blog-content">
      ${data[index].postAt} | ${data[index].author}
      </div>
      <p>
      ${data[index].content}
      </p>
    </div>
  </div>`
    }
}
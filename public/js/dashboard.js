const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  console.log(title)
  console.log(content)
  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

const displayBlogUpdateForm = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const formID = `form${id}`;
    document.getElementById(formID).classList.remove('hide')
  }
};


const updateBlogBtnHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-updateID')) {
    const id = event.target.getAttribute('data-updateID');
    const titleID = `title${id}`;
    const conentID = `content${id}`;
    if (titleID && conentID) {
       const title = document.getElementById(titleID).value.trim();
        const content = document.getElementById(conentID).value.trim();
        const response = await fetch(`/api/blogs/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update blog');
        }
    
    }
  }
};


const deleteBlogBtnHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-deleteID')) {
    const id = event.target.getAttribute('data-deleteID');
    if (id) {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
  }
};


document.querySelector('#create').addEventListener('click', newFormHandler);

document.querySelector('#Add_New_Blog').addEventListener('click',()=>{
  document.querySelector('.newBlog').classList.remove('hide')
})

document.querySelector('main').addEventListener('click', displayBlogUpdateForm);
document.querySelector('main').addEventListener('click', updateBlogBtnHandler);
document.querySelector('main').addEventListener('click', deleteBlogBtnHandler);
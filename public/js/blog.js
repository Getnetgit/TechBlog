
const displayCommentForm = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const formID = `form${id}`;
    document.getElementById(formID).classList.remove('hide')

  
  }
};

const addCommentHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-saveID')) {
    const id = event.target.getAttribute('data-saveId');
    const formID = `form${id}`;
    const contentID = `comment${id}`;
    const saveID = `save${id}`;

    console.log(contentID)
    console.log(saveID)
    if (formID && contentID && saveID) {
      
        const content = document.getElementById(contentID).value.trim();
        const blog_id = id;
        console.log(content)
        const response = await fetch(`/api/comments/`, {
          method: 'POST',
          body: JSON.stringify({ blog_id, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to add  comment');
        }
     
    }
  }
};
document.querySelector('main').addEventListener('click', displayCommentForm);
document.querySelector('main').addEventListener('click', addCommentHandler);
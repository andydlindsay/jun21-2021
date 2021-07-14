$(document).ready(() => {

  console.log('jQuery is ready!');

  // $.getJSON('/api/posts', (posts) => console.log(posts));

  const fetchPosts = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      success: (posts) => {
        console.log(posts);
        // console.log(createPost(posts[0]));
        renderPosts(posts);
      },
      error: (err) => {
        console.error(err);
      }
    });
  };

  fetchPosts();

  /*
  <div class="post">
    <h3>Title: something awesome (7)</h3>
    <h4>Body: more awesome stuff</h4>
    <h5>Author: 3</h5>
  </div>
  */

  const createPost = (post) => {
    const $title = $('<h3>').text(`Title: ${post.title} (${post.id})`);
    const $body = $('<h4>').text(`Body: ${post.body}`);
    const $author = $('<h5>').text(`Author: ${post.userId}`);

    const $post = $('<div>').addClass('post');

    // $post.append($title);
    // $post.append($body);

    // $post.append($title).append($body);

    $post.append($title, $body, $author);

    return $post;
  };

  const renderPosts = (posts) => {
    $('#post-container').empty();
    for (const post of posts) {
      const $post = createPost(post);
      $('#post-container').prepend($post);
    }
  };

  const $form = $('#new-post');
  $form.on('submit', function (event) {
    event.preventDefault(); 

    const urlEncodedData = $(this).serialize();
    console.log(urlEncodedData);

    $.post('/api/posts', urlEncodedData, (response) => {
      console.log(response);
      
      fetchPosts();
    });

    // $.post('/api/posts', urlEncodedData)
    //   .then((response) => {
    //     console.log(response);
    //   });
  });

});

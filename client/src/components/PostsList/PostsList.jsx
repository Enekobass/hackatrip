const { VITE_API_URL } = import.meta.env;

const PostsList = ({ posts }) => {

    console.log(posts);

    return (
        posts?.map((post, index) => (
            <>
            <div>
                <img src={`${VITE_API_URL}/${post?.photo}`} alt={post?.photo} />
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>{post.destino}</p>
                <p>{post.value}</p>
                <img className='imagen' src={post?.avatar ? `${VITE_API_URL}/${post?.avatar}` : '/default-avatar.jpg'} alt={post?.username} />
                <p>{post.username}</p>
            </div>
          </>
      )))};

export default PostsList;

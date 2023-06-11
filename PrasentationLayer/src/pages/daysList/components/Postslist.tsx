interface Post {
  date: string;
  id?:number;
  title: string;
  banner_url: string;
  description: string;
}

interface PostsListProps {
  posts: Post[];
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <div className="w-full flex flex-wrap mt-40 lg:mt-16">
      {posts.map((post, index) => (
        <div
          key={index}
          className="w-1/3 p-4"
        // A classe "w-1/3" define que cada elemento ocupará 1/3 do container
        >
          <img src={post.banner_url} alt={post.title} className="mb-2" />
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  )
}
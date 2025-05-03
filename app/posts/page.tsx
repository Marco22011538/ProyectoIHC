// app/posts/page.tsx
interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export default async function PostsPage() {
    // 1. Fetching de datos (se ejecuta en el servidor)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();
  
    // 2. Renderizar los posts
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Lista de Posts</h1>
        <ul className="space-y-4">
          {posts.slice(0, 5).map((post) => ( // Mostramos solo 5 posts
            <li key={post.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
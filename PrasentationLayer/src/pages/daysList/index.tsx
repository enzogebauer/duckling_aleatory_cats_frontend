import { PostsList } from "./components/Postslist";
const posts = [
  {
    date: "01/02/2002",
    title: "post",
    banner_url: "https://cdn.discordapp.com/attachments/848394422215245885/1117510024340709376/sun-removebg-preview.png",
    description: "lorem ipsum minha rola",
  },
  {
    date: "01/02/2002",
    title: "post2",
    banner_url: "https://cdn.discordapp.com/attachments/848394422215245885/1117510024340709376/sun-removebg-preview.png",
    description: "lorem ipsum minha rola",
  },
  {
    date: "01/02/2002",
    title: "post3",
    banner_url: "https://cdn.discordapp.com/attachments/848394422215245885/1117510024340709376/sun-removebg-preview.png",
    description: "lorem ipsum minha rola",
  },
  {
    date: "01/02/2002",
    title: "post4",
    banner_url: "https://cdn.discordapp.com/attachments/848394422215245885/1117510024340709376/sun-removebg-preview.png",
    description: "lorem ipsum minha rola",
  },
  {
    date: "01/02/2002",
    title: "post5",
    banner_url: "https://cdn.discordapp.com/attachments/848394422215245885/1117510024340709376/sun-removebg-preview.png",
    description: "lorem ipsum minha rola",
  },
  {
    date: "01/02/2002",
    title: "post6",
    banner_url: "https://cdn.discordapp.com/attachments/848394422215245885/1117510024340709376/sun-removebg-preview.png",
    description: "lorem ipsum minha rola",
  },
  
]



export function DaysList() {
  return(
    <section>
      <PostsList posts={posts} />
    </section>
  )
}
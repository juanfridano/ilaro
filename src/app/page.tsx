import Feed from "@app/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Title Here maybe?
        <br className="max-md:hidden" />
        <span className="green_gradient text-center"> Subtitle Here </span>
        <p className="desc text-center"> Ilaro is just a collection of tools 
        and news aiming to help on daily tasks,</p>
      </h1>
      <Feed></Feed>
    </section>
  )
}

export default Home
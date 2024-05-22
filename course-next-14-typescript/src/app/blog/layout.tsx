export const metadata = {
  title: "Blog",
  description: "Blog description",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h1>Cabecera del blog</h1>
      </header>
      <main>
        <section>{children}</section>
        <aside>
          <form action="">
            <input
              type="search"
              name=""
              id=""
              placeholder="Voy a tener suerte"
            />
            <input type="submit" value="Search" />
          </form>
        </aside>
      </main>
      <footer>
        <h3>Footer del blog</h3>
      </footer>
    </>
  );
}

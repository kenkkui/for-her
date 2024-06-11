interface ContentSructureProps {}

const columnsNum = 12;

export default function ContentStructure2() {
  const columns = Array.from({ length: columnsNum }, (_, i) => {
    return <div className="column" key={i}></div>;
  });

  return (
    <section className="content-wrapper">
      <section className="content-structure">
        <div className="item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          autem soluta officiis perspiciatis optio, repellendus quae rerum
          maxime provident earum quasi molestiae fuga ex aliquam ipsum facere
          possimus quisquam delectus?
        </div>
      </section>

      <section className="content-structure-background">{columns}</section>
    </section>
  );
}

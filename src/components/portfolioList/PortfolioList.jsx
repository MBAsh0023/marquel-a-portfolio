import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected, id}) {

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "web app",
    },
    {
      id: "mobile",
      title: "mobile app",
    },
    {
      id: "banking",
      title: "banking app",
    },
    {
      id: "flash",
      title: "flash card app",
    },
    {
      id: "branding",
      title: "branding",
    },
  ];


  // <ul>
  //       {list.map((item) => (
  //         <PortfolioList
  //           title={item.title}
  //           active={selected === item.id}
  //           setSelected={setSelected}
  //           id={item.id}
  //         />
  //       ))}
  //     </ul>
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=> setSelected(id)}>
        {title}
    </li>
  )
}

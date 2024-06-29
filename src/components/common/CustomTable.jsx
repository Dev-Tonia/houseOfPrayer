export default function CustomTable({ headers, children, tableClass, title }) {
  return (
    <div className="  min-w-[350px] ">
      <h6 className=" text-center font-bold text-lg py-3">{title}</h6>
      <div className={`grid  gap-2 py-3 place-content-center ${tableClass}`}>
        {headers.map((header) => (
          <h6 className=" font-bold " key={header}>
            {header}
          </h6>
        ))}
        {children}
      </div>
    </div>
  );
}

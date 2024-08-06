export default function CustomTable({
  headers,
  children,
  tableClass,
  title,
  tableMinWidth = " min-w-[350px]",
}) {
  return (
    <div className={`${tableMinWidth}`}>
      <h6 className=" text-center font-bold text-lg py-3">{title}</h6>
      <div className={`grid  gap-2 py-3 place-content-center ${tableClass}`}>
        {headers.map((header, index) => (
          <h6 className=" font-bold " key={index + 1}>
            {header}
          </h6>
        ))}
        {children}
      </div>
    </div>
  );
}

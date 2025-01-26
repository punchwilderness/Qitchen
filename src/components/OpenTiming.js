function OpenTiming({ day, time }) {
  return (
    <div>
      <div className="flex flex-row items-baseline gap-x-2">
        <div className="">{day}</div>
        <div className="flex flex-1 border border-dashed h-0"></div>
        <div>{time}</div>
      </div>
    </div>
  );
}

export default OpenTiming;

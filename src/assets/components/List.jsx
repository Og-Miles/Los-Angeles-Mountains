const List = ({ color }) => {
  return (
    <div className='mx-auto'>
      <ul className={`flex text-${color} text-[12px]`}>
        <li className='mr-[16px] underline underline-offset-4 uppercase italic'>
          <a href={`#history`}>01. History</a>
        </li>
        <li className='mr-[16px] underline underline-offset-4 uppercase italic'>
          <a href={`#team`}>02. Team</a>
        </li>
      </ul>
    </div>
  );
};

export default List;

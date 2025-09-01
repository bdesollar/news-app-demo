const Comment = ({ text }) => {
  return (
    <div className='flex items-center space-x-2 mb-2'>
      <div className='w-6 h-6 bg-gray-300 rounded-full' />
      <p className='text-sm'>{text}</p>
      <span>👍</span>
    </div>
  );
};

export default Comment;

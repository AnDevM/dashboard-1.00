function ProfileButton({ author = 'Arthur' }) {
    const initials = author.slice(0, 2).toUpperCase();
  
    return (
      <button
        aria-label={`${author}'s profile`}
        title={`${author}'s profile`}
        className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center text-white font-semibold flex-shrink-0 cursor-pointer hover:bg-blue-950 hover:scale-105"
      >
        {initials}
      </button>
    );
  }
  
  export default ProfileButton;
  
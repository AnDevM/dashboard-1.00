import ProfileButton from './ProfileButton'
import SearchInput from './SearchInput'

function Header ({ author = 'Arthur', tasks ='12' }) {
  return (
    <header className='border-b border-white/10 mx-6'>
      <div className='flex items-center justify-between py-6 max-w-7xl m-auto'>
        <h1 className='text-white text-xl lg:text-3xl'>
          Hi {author}, welcome! You have {tasks} open tasks.
        </h1>

        <div className='flex items-center gap-4 w-1/3'>
          <SearchInput />
          <ProfileButton author={author} />
        </div>
      </div>
    </header>
  )
}

export default Header

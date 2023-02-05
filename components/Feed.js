import InputBox from './InputBox';
import Posts from './Posts';

function Feed() {
  return (
    <div className="flex-grow h-screen  pb-20 pt-6  xl:mr-0 overflow-y-auto">
      <div className="mx-auto max-w-md p-5 lg:p-1 md:max-w-lg">
        <InputBox />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;

import React from 'react'
import Image from './Image'
import PostAction from './PostAction'
import PostInteraction from './PostInteraction'

const Post = () => {
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
        <div className='flex items-center gap-2 mb-2 text-sm font-bold text-textGray'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path
                    fill="#71767b"
                    d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
                />
            </svg>
            <span>
                Iftekhar reposted
            </span>
        </div>
        <div className="flex gap-4">
            <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                <Image
                path={"general/avatar.png"}
                alt=''
                w={100}
                h={100}
                tr={true}
                />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex flex-wrap gap-2 items-center'>
                        <h1 className='text-md font-bold'>Username</h1>
                        <span className='text-textGray'>@iftekhar</span>
                        <span className='text-textGray'>1 day ago</span>
                    </div>
                    <PostAction />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem reiciendis officiis soluta, modi et maxime saepe perspiciatis repellendus nemo.
                </p>
                <Image
                path='general/post.jpeg'
                alt=''
                h={600}
                w={600}
                />
                <PostInteraction />
            </div>
        </div>
    </div>
  )
}

export default Post
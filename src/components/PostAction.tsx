import React from 'react'
import Image from './Image'

const PostAction = () => {
  return (
    <div className='cursor-pointer w-4 h-4 relative'>
        <Image
        path='icons/infoMore.svg'
        alt=''
        h={16}
        w={16}
        />
    </div>
  )
}

export default PostAction
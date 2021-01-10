import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Post.css'
import ThumbsUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import InputOption from './InputOption'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <InputOption
          Icon={ThumbsUpAltOutlinedIcon}
          title='Like'
          color='white'
        />
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='white' />
      </div>
    </div>
  )
})

export default Post

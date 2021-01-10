import React from 'react'
import './Widgets.css'
import GithubIcon from '@material-ui/icons/GitHub'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Dev Room News</h2>
        <a href='//www.github.com/gurvick/Dev-Room' target='_blank'>
          <GithubIcon />
        </a>
      </div>
      {newsArticle(
        "Check out Gurvick Ghai, he's dope",
        'Created By Gurvick Ghai - https://github.com/gurvick '
      )}
      {newsArticle("Check out Harsh Gandhi, he's dope", 'Top news')}
      {newsArticle("Check out Hassan Ali Amjad, he's dope", 'Top news')}
      {newsArticle("Check out Elon Musk, he's dope", 'Top news')}
      {newsArticle("Check out Jeff Bezos, he's dope", 'Top news')}
      {newsArticle("Check out Bill Gates, he's dope", 'Top news')}
    </div>
  )
}

export default Widgets

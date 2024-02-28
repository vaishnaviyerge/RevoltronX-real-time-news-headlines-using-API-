import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title,description,imageUrl,newsUrl}= this.props;
    return (
      <div>
        <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://tse2.mm.bing.net/th?id=OIP.xuDE02BgR2_EL91DRg29pwHaDt&pid=Api&P=0&h=180" : imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
        </div>

      </div>
      </div>
    )
  }
}

export default NewsItem


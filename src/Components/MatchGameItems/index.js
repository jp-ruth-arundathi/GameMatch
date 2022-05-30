import './index.css'

const MatchGameItems = props => {
  const {imageDetails, onClickImagePicture} = props
  const {thumbnailUrl, imageUrl} = imageDetails

  const onClickImage = () => {
    onClickImagePicture(imageUrl)
  }

  return (
    <>
      <li className="image-item-container">
        <button type="button" onClick={onClickImage} className="btn">
          <img className="image-item" src={thumbnailUrl} alt="thumbnail" />
        </button>
      </li>
    </>
  )
}

export default MatchGameItems

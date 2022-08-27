import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem

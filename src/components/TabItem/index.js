import './index.css'

const TabItem = props => {
  const {tabDetails, selectTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onTabClick = () => {
    selectTab(tabId)
  }
  const activeTabBtn = isActive ? 'btn-active' : ''
  return (
    <li className="tab-item">
      <button
        type="button"
        className={`button ${activeTabBtn}`}
        onClick={onTabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

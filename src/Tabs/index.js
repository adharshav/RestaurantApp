import './index.css'

const Tabs = ({categories, activeCategoryId, onCategoryChange}) => (
  <ul className="tab-container">
    {categories.map(category => (
      <li
        className={`each-tab-menu ${
          category.menuCategoryId === activeCategoryId ? 'active-tab-item' : ''
        }`}
        key={category.menuCategoryId}
        onClick={() => onCategoryChange(category.menuCategoryId)}
      >
        <button type="button" className="mt-0 mb-0 ms-2 tab-category-button">
          {category.menuCategory}
        </button>
      </li>
    ))}
  </ul>
)

export default Tabs

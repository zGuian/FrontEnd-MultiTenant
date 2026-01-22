import { IconFilter, IconReset } from '../Icons'
import './filter-sales.style.css'

export function FilterSales() {
  return (
    <>
      <div className="filter-bar">
        <IconFilter />

        <div className="filter-item filter-label">
          Filter By
        </div>

        <div className="filter-item dropdown-item">
          Date
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div className="filter-item dropdown-item">
          Order Type
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div className="filter-item dropdown-item">
          Order Status
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div className="filter-item reset-btn">
          <IconReset />
          Reset Filter
        </div>

      </div>
    </>
  )
}
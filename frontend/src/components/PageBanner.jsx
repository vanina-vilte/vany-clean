import './PageBanner.css'

function PageBanner({ title, subtitle }) {
  return (
    <div className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <span className="page-banner__underline" />
      </div>
    </div>
  )
}

export default PageBanner

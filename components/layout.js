import AutoHeader from './navigation/autoheader'

export default function Layout({ themeName, children }) {
  return (
    <div className="theme-autocomm">
      <AutoHeader />
      <div className="main"> 
         {children}
      </div>
    </div>
  )
}
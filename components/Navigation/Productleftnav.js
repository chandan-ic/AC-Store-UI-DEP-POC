/*import Scrollspy from 'react-scrollspy'
export default function SideBar() {

  return (

    <div className="ml-5 fixed ">
      <div className="w-full flex flex-row sm:block">
        <Scrollspy items={['overview', 'getstartedhere', 'performance',  'color', 'whyus',
          'whyiboughtthisbike', 'techSpecs', 'similarBikes']} currentClassName="active">
          <li className=" p-2 m-1  cursor-pointer text-xs text-transparent  transition duration-300 
             ease-in-out border-l-2  border-gray-400
           hover:border-black transform hover:translate-x-6 hover:scale-110  hover:text-black ">
            <a href="#overview">Overview</a>
          </li>
          <li className=" p-2 m-1  cursor-pointer text-xs text-transparent  transition duration-300 
             ease-in-out border-l-2  border-gray-400 
           hover:border-black transform hover:translate-x-6 hover:scale-110  hover:text-black ">
            <a href="#getstartedhere">Get Started Here</a>
          </li>
          <li className=" p-2 m-1  cursor-pointer text-xs text-transparent  transition duration-300 
             ease-in-out border-l-2  border-gray-400
           hover:border-black transform hover:translate-x-6 hover:scale-110  hover:text-black ">
            <a href="#performance" >Performance </a>
          </li>
         {/* <li className=" p-2 m-1  cursor-pointer text-xs text-transparent  transition duration-300 
             ease-in-out border-l-2  border-gray-400
           hover:border-black transform hover:translate-x-6 hover:scale-110  hover:text-black ">
            <a href="#safety" >Safety </a>
          </li>
          <li className=" p-2 m-1  cursor-pointer text-xs text-transparent  transition duration-300 
             ease-in-out border-l-2  border-gray-400 
           hover:border-black transform hover:translate-x-6 hover:scale-110  hover:text-black ">
            <a href="#color" >Colors </a>
          </li>
          <li className=" p-2 m-1  cursor-pointer text-xs text-transparent  transition duration-300 
             ease-in-out border-l-2  border-gray-400
           hover:border-black transform hover:translate-x-6 hover:scale-110  hover:text-black ">
            <a href="#whyus">Why Us </a>
          </li>
          <li className=" p-2 m-1  cursor-pointer text-xs text-transparent  transition duration-300 
             ease-in-out border-l-2  border-gray-400 
           hover:border-black transform hover:translate-x-6 hover:scale-110  hover:text-black ">
            <a href="#whyiboughtthisbike" >Why I bought this bike </a>
          </li>
          <li className=" p-2 m-1  cursor-pointer text-xs text-transparent  transition duration-300 
             ease-in-out border-l-2  border-gray-400
           hover:border-black transform hover:translate-x-6 hover:scale-110  hover:text-black ">
            <a href="#techSpecs" >TechSpecs</a>
          </li>
          <li className=" p-2 m-1  cursor-pointer text-xs text-transparent  transition duration-300 
             ease-in-out border-l-2  border-gray-400
           hover:border-black transform hover:translate-x-6 hover:scale-110  hover:text-black ">
            <a href="#similarBikes" >SimilarBikes </a>
          </li>
        </Scrollspy>

      </div>
    </div>
  )
}*/







{/*  const [appState, changeAppState] = useState({
    activeObject: null,
    objects: [({ id: 1, title1: 'Overview' }), ({ id: 2, title2: 'Get Started Here' }),
    ({ id: 3, title3: 'Performance' }), ({ id: 4, title4: 'Safety' }), ({ id: 5, title5: 'Colors' }),
    ({ id: 6, title6: 'Why Us' }), ({ id: 7, title7: 'Why I Bought this Bike ' }), ({ id: 8, title8: 'TechSpecs' }),
    ({ id: 9, title9: 'Similar Bikes' })
    ]
  });
  const toggleActive = (index) => {
    changeAppState({ ...appState, activeObject: appState.objects[index] })
  }
  const toggleActiveStyles = (index) => {
    if (appState.objects[index] === appState.activeObject) {
      return "btn active"
    }
    else {
      return "btn inactive"
    }

  }
 {appState.objects.map((elements, index) => (
            <li  key={index} className={toggleActiveStyles(index)} >
              <li ><a href="#overview"  onClick={() => { toggleActive(index) }}>{elements.title1} </a></li>
             <li> <a href="#getstartedhere" onClick={() => { toggleActive(index) }}>{elements.title2} </a></li>
              <li><a href="#performance" onClick={() => { toggleActive(index) }}>{elements.title3} </a></li>
              <li><a href="#safety" onClick={() => { toggleActive(index) }}>{elements.title4} </a></li>
              <li><a href="#color" onClick={() => { toggleActive(index) }}>{elements.title5} </a></li>
              <li><a href="#whyus" onClick={() => { toggleActive(index) }}>{elements.title6} </a></li>
              <li><a href="#whyiboughtthisbike" onClick={() => { toggleActive(index) }}>{elements.title7} </a></li>
              <li><a href="#techSpecs" onClick={() => { toggleActive(index) }}>{elements.title8} </a></li>
              <li><a href="#similarBikes" onClick={() => { toggleActive(index) }}>{elements.title9} </a></li>
            </li>
          ))}*/}
import React, { useState } from 'react';


 const Rto = () =>{
    return (
      <section className="container">
    <div className="inline-flex w-4/5 md:flex flex-row">
    <h2 className="font-bold">RTO</h2>
    <div className="sm:ml-72 inline-flex md:flex justify-center border-2 border-gray-300">
     <div className="w-72 ml-2"><input className="mt-2 ml-1 w-4 h-4" type="radio" checked />
      <span className="ml-1">Permanent</span>
      <input className="ml-10 mt-2 w-4 h-4" type="radio" />
      <span className="ml-1">Temporary</span></div> 
    </div> </div>
</section>
  );
  }
  export default Rto;
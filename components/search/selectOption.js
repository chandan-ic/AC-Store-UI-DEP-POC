import React, { useState } from 'react';
import SearchBrands from './searchBrands';
import SearchSlider from './searchSlider';
import SpecialFeatures from './specialFeatures';
import SearchColors from './searchColor';
import SearchSliderEngine from './engineSlider';

export default function SearchSideBar() {
  return (
    <section className="">
      <div className="w-60 ">
        <div className="border border-gray-100">
          <SearchBrands />
        </div>
        <div className="border border-gray-100">
          <SearchSlider />
        </div>
        <div className="border border-gray-100">
          <SearchSliderEngine />
        </div>
        <div className="border border-gray-100">
          <SpecialFeatures />
        </div>
        <div className="border border-gray-100">
          <SearchColors />
        </div>
      </div>

    </section>
  );
}



/*    <section>
            <div className="container">
                <div className="w-1/6 border-2 border-gray-4">
<div class="ml-4">
  <span class="font-bold">BRANDS</span>
  <div class="mt-2">
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" unchecked />
        <span class="ml-2">Dominar</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" checked />
        <span class="ml-2 font-bold">Pulsar</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" />
        <span class="ml-2">Avenger</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" checked />
        <span class="ml-2 font-bold">Platina</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" />
        <span class="ml-2">CT</span>
      </label>
    </div>
  </div>
</div>

</div>
</div>
</section>*/
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default function AccordionCard({ data, title }) {
    return (
        <div>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <span className="text-sm font-bold border-black shadow-xs p-2 border-b-2">{title}</span>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="border-white">
                <p className="pl-8">
                    <ul className="text-sm space-y-2 tracking-wider">
                        {data && data.map((ts, i) => (<li key={i} className="p-2 mt-3 border-b-2   border-gray-200">
                            <p className="font-semibold">{ts.label}</p>
                            <h6>{ts.value}</h6>
                        </li>))}
                    </ul>
                </p>
            </AccordionItemPanel>

        </div>
    )
}


// <AccordionItem uuid="b">
//                         <AccordionItemHeading>
//                             <AccordionItemButton>
//                                 <span className="text-sm font-bold border-black shadow-xs p-2 border-b-2">  BRAKES
//                                           </span>  </AccordionItemButton>
//                         </AccordionItemHeading>
//                         <AccordionItemPanel className="border-white" >
//                             <p className="pl-8">
//                                 <ul className=" text-sm space-y-2 tracking-wider">
//                                     {vehicle && vehicle.Technical_Specs_Break.map((tc, i) => (<li key={i} className="p-2 mt-3 border-b-2  border-gray-200">
//                                         <p className="font-semibold">{tc.label}</p>
//                                         <h6>{tc.value}</h6>
//                                     </li>))}
//                                 </ul>
//                             </p>
//                         </AccordionItemPanel>
//                     </AccordionItem>
//                 </Accordion>
//             </div>
//             <div className="flex flex-col md:w-1/3 ml-10">
//                 <Accordion allowZeroExpanded preExpanded={['a']} >
//                     <AccordionItem uuid="a">
//                         <AccordionItemHeading>
//                             <AccordionItemButton>
//                                 <span className="text-sm font-bold border-black shadow-xs p-2 border-b-2">
//                                     DIMENSION & CHASSIS
//                                          </span>   </AccordionItemButton>
//                         </AccordionItemHeading>
//                         <AccordionItemPanel className="border-white">
//                             <p className="pl-8">
//                                 <ul className="text-sm space-y-2 tracking-wider">
//                                     {vehicle && vehicle.Technical_Specs_Chasis.map((tc, i) => (<li key={i} className="p-2 mt-3 border-b-2  border-gray-200">
//                                         <p className="font-semibold">{tc.label}</p>
//                                         <h6>{tc.value}</h6>
//                                     </li>))}
//                                 </ul>
//                             </p>
//                         </AccordionItemPanel>
//                     </AccordionItem>
//                     <AccordionItem uuid="b">
//                         <AccordionItemHeading>
//                             <AccordionItemButton>
//                                 <span className="text-sm font-bold border-black shadow-xs p-2 border-b-2">     ELECTRICAL
//                                          </span>     </AccordionItemButton>
//                         </AccordionItemHeading>
//                         <AccordionItemPanel className="border-white" >
//                             <p className="pl-8">
//                                 <ul className="text-sm space-y-2 tracking-wider">
//                                     {vehicle && vehicle.Technical_Specs_Electrical.map((tc, i) => (<li key={i} className="p-2 mt-3 border-b-2  border-gray-200">
//                                         <p className="font-semibold">{tc.label}</p>
//                                         <h6>{tc.value}</h6>
//                                     </li>))}
//                                 </ul>
//                             </p>
//                         </AccordionItemPanel>
//                     </AccordionItem>
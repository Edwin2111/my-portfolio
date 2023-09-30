import Document from "../downloads/Document CV.pdf";
import {FcDownload} from "react-icons/fc";
import { VscFilePdf } from "react-icons/vsc";

function Knowledge() {

    const cono=[
      {id:1, conocimineto:"React JS", porcentage:50, nivel:"IM"},
      {id:2, conocimineto:"Node JS", porcentage:50, nivel:"IM"},
      {id:3, conocimineto:"Tailwind", porcentage:50, nivel:"IM"},
      {id:3, conocimineto:"HTML", porcentage:75, nivel:"Well"},
      {id:4, conocimineto:"Css", porcentage:50, nivel:"IM"},
      {id:4, conocimineto:"Postman", porcentage:75, nivel:"Well"},
      {id:4, conocimineto:"My SQL", porcentage:75, nivel:"Well"},
      {id:4, conocimineto:"MongoDB", porcentage:25, nivel:"Basic"},
    ]

    const add=[
      {id:1, conocimineto:"Microsoft Office", porcentage:50, nivel:"IM"},
      {id:2, conocimineto:"Microsoft Team", porcentage:50, nivel:"IM"},
      {id:3, conocimineto:"Outlook", porcentage:50, nivel:"IM"},
    ]

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h1 className="my-4 text-center text-base md:text-xl font-bold">Web Development Tools</h1>
          <div className="col_1 ml-1 md:ml-5 h-4/5 bg-gray-600 pt-2 rounded-md">
            {
              cono.map((data)=>(
                <div className="flex flex-row items-center text-white">
                  <div className="ml-1 md:ml-5 w-1/4 text-xs md:text-base">
                    {data.conocimineto}
                  </div>

                  <div className="w-2/4 bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width:data.porcentage+"%"}}></div>  
                  </div>
                  <div className="ml-1 md:ml-3 w-1/4 text-xs md:text-base ">{data.nivel}</div>
                </div>
              ))
            }
          </div>
        </div>
        
        <div>
        <h1 className="my-4 text-center text-base md:text-xl font-bold">Additional Tools</h1>
          <div className="col-2 mr-1 md:mr-5 h-4/5 bg-gray-600 pt-2 rounded-md">
            {
              add.map((dato)=>(
                <div className="flex flex-row items-center text-white">
                  <div className="ml-1 md:ml-5 w-1/4 text-xs md:text-base">
                    {dato.conocimineto}
                  </div>

                  <div className="w-2/4 bg-gray-200 rounded-full h-2.5 ">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width:dato.porcentage+"%"}}></div>
                  </div>
                  <div className="ml-1 md:ml-3 w-1/4 text-xs md:text-base">{dato.nivel}</div>
                </div>
                
              ))
            }
          </div>
        </div>
      </div>
      <div className="mt-10 mx-5 h-28 bg-white flex items-center justify-center rounded-md">
        
          <span className="mr-10 px-2 text-black font-bold">More information download the CV</span>
          <div className="flex flex-row mt-5">
            <a className="mr-10" href={Document} target="_blank"> 
            <VscFilePdf className="text-red-700 w-10 h-10 ml-3"/>View PDF</a>
            <a href={Document} download className=""> <FcDownload className="w-10 h-10 ml-6"/> Download PDF</a>
          </div>
        
      </div>
    </div>
  )
}

export default Knowledge
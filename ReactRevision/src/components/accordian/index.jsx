import { useState } from "react"
import data from './data'



export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enablemultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])
    //single selection
    function handleSingleSelection(getCurrentId) {
        // console.log(getCurrentId)

        //if selected is equal to getCurrentId then set selected to null else set selected to getCurrentId
        setSelected(getCurrentId == selected ? null : getCurrentId)




    }

    //multiple selection
    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple]; //store all clicked id in multiple state and copy that into cpyMultiple 

        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId); //find index of getCurrentId in cpyMultiple

        console.log(findIndexOfCurrentId)

        //if -1 then push the getCurrentId into the cpyMultiple else remove the getCurrentId from cpyMultiple
        if (findIndexOfCurrentId == -1) {
            cpyMultiple.push(getCurrentId)
        }
        else {
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        }

        //set the cpyMultiple into multiple state
        setMultiple(cpyMultiple)


        console.log(selected, 'selected')
        console.log(multiple, 'multiple')


    }

    return (
        <div className="wrapper flex h-[100vh] w-[100vw] justify-center items-center flex-col gap-4">
            <button onClick={() => setEnableMultiSelection(!enablemultiSelection)} className="p-5 bg-black text-white font-bold cursor-pointer">Enable multiple option</button>
            <div className="accordian w-[500px]">
                {
                    data && data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <div className="item bg-red-300 mb-[10px] pr-[10px] pl-[20px] cursor-pointer" key={index}>
                                    <div onClick={enablemultiSelection ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)} className="title flex justify-between items-center">
                                        <h3 className="font-bold">{item.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        enablemultiSelection ?

                                            multiple.indexOf(item.id) != -1 && (
                                                <div className="content">
                                                    <p className="">{item.answer}</p>
                                                </div>
                                            ) : selected === item.id && (
                                                <div className="content">
                                                    <p className="">{item.answer}</p>
                                                </div>
                                            )
                                    }
                                    {/* {
                                        selected == item.id || multiple.indexOf(item.id)!=-1 ? <div className="content">
                                            <p className="">{item.answer}</p>
                                        </div> : null
                                    } */}
                                </div>
                            )
                        })
                        : <div>No data found</div>
                }
            </div>
        </div>
    )
}
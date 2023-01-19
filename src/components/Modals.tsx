import { FC } from 'react'

interface modalProps {
    no: number
    titleModal: string
    tombol1: string
    tombol2: string
    onClick: () => void
    coba?: string
    input1?: any
    input2?: any
    input3?: any
    input4?: any
    input5?: any
    input6?: any
    input7?: any
    input8?: any
}

const Modals: FC<modalProps> = ({ no, tombol1, tombol2, titleModal, input1, input2, input3, input4,input5, input6, input7, input8,  onClick }) => {
    return (
        <>
            <input type="checkbox" id={`my-modal-${no}`} className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box bg-white  flex flex-col justify-center items-center">
                    <h3 className="font-bold lg:text-2xl  text-base text-[#0D99FF] text-center  ">{titleModal}</h3>
                    {input1}
                    {input2}
                    {input3}
                    {input4}
                    {input5}
                    {input6}
                    {input7}
                    {input8}
                    <div className="grid grid-cols-2 w-2/3 md:w-full lg:w-full max-w-md mt-3">
                        <label htmlFor={`my-modal-${no}`} className="btn bg-[#0D99FF] normal-case border-none mx-1 hover:bg-red-900 text-white" >
                            {tombol1}
                        </label>

                        <label htmlFor={`my-modal-${no}`} className="btn bg-[#0D99FF] normal-case  border-none mx-1 hover:bg-green-700 text-white" onClick={onClick}>
                            {tombol2}
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modals
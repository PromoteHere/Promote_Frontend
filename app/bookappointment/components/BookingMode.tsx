import FalconButton from "@/Components/reuse/Buttons/FalconButton"
import PromoteImage from "@/Components/reuse/Image/Image";
export default function BookingMode() {

    return (
        <div className='grid grid-rows-2 grid-flow-col gap-20'>
            <CardComponent name='E-Bus' onClick={()=> alert("first")}/>
            <CardComponent name='E-Train' onClick={()=> alert("first")}/>
            <CardComponent name='E-Bill board' onClick={()=> alert("first")}/>
            <CardComponent name='E-Cutout Walls' onClick={()=> alert("first")}/>
            <CardComponent name='E-Posters' onClick={()=> alert("first")}/>
      </div>
  )
}
const CardComponent = ({ title, name, onClick }: any) => {
    return <div className="relative ">
        <div>{title}</div>
        <PromoteImage url='https://img.etimg.com/thumb/width-640,height-480,imgsize-216810,resizemode-75,msid-94221910/news/bengaluru-news/bengalureans-can-soon-enjoy-double-decker-bus-rides-in-new-e-avatar/mumbai-an-electric-double-decker-bus-to-be-inducted-by-best-at-colaba-in-mumb-.jpg' width='130' height='100' alt={title} />
        <FalconButton name={name} onClick={onClick} />
    </div>
}

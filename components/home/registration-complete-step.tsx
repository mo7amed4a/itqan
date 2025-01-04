import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import img1 from "../../public/icons/1.jpeg"
import img2 from "../../public/icons/2.jpeg"
import img3 from "../../public/icons/3.jpeg"
import img4 from "../../public/icons/4.jpeg"
import img5 from "../../public/icons/5.jpeg"

export default function RegistrationCompleteStep() {
  return (
    <div className="container lg:max-w-[85vw] mx-auto ">
        <div className="grid grid-cols-2 lg:grid-cols-5 w-full gap-4 px-4 md:px-0">
        <Steps number={1} image={img1} text="ابحث عن الجامعة"/>
        <Steps number={2} image={img2} text="التحق بالجامعة"/>
        <Steps number={3} image={img3} text="الاقامة"/>
        <Steps number={4} image={img4} text="اتمام التسجيل بالجامعة"/>
        <Steps number={5} image={img5} text="الاقامة الطلابية"/>
        </div>
    </div>
  )
}


const Steps = ({
  text,
  image,
  number
}:{
  text: string,
  image: StaticImageData,
  number: number
}) => {
    return (
      <Card className="w-full max-w-sm mx-auto bg-gradient-to-b from-white via-white to-primary border-none">
        <CardContent className="p-6 flex flex-col items-center text-center gap-6 space-y-5">
          <div className="relative">
            {/* <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center">
              <ClipboardCheck className="w-12 h-12 text-amber-500" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
              <CheckCircle className="w-6 h-6 text-white" />
            </div> */}
            <Image src={image} className="size-40" alt="" width={100} height={100} />
            {/* <Image src={image.split('http://').join('https://')} className="size-64" alt="" width={100} height={100} /> */}
          </div>
          
          <span className="text-xl font-bold text-gray-600">
            {text}
          </span>
          
          <Button 
            variant="default"
            className="bg-primary text-white w-40"
          >
            معرفة المزيد
          </Button>
          
          <div className="border-4 bg-transparent p-2 rounded-full">
            <span className={`${number === 1 ? "bg-secondary" : "bg-primary"} !size-10 p-1 flex items-center font-bold justify-center text-center rounded-full text-white text-2xl`}>
              {number}
            </span>
          </div>
        </CardContent>
      </Card>
    )
}

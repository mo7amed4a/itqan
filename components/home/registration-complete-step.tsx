import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, CheckCircle } from 'lucide-react'

export default function RegistrationCompleteStep() {
  return (
    <div className="container lg:max-w-[85vw] mx-auto ">
        <div className="grid grid-cols-2 lg:grid-cols-5 w-full gap-4 px-4 md:px-0">
        <Steps />
        <Steps />
        <Steps />
        <Steps />
        <Steps />
        </div>
    </div>
  )
}


const Steps = () => {
    return (
      <Card className="w-full max-w-sm mx-auto bg-gradient-to-b from-white via-white to-primary border-none">
        <CardContent className="p-6 flex flex-col items-center text-center gap-6 space-y-5">
          <div className="relative">
            <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center">
              <ClipboardCheck className="w-12 h-12 text-amber-500" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <span className="text-xl font-bold text-gray-900">
            إتمام التسجيل بالجامعة
          </span>
          
          <Button 
            variant="default"
            className="bg-primary text-white w-40"
          >
            معرفة المزيد
          </Button>
          
          <div className="border-4 bg-primary p-2 rounded-full">
            <span className="bg-secondary !size-10 p-1 flex items-center font-bold justify-center text-center rounded-full text-white text-2xl">1</span>
          </div>
        </CardContent>
      </Card>
    )
}

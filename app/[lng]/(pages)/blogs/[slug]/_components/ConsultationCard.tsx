import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import img from '../../../../../../public/images/forCartRounded.png'
import LinkApp from "@/components/global/LinkApp"


export default function ConsultationCard({
  link,
  lng
}: {
  link: string
  lng: string
}) {
  return (
      <Card className="w-full py-6 px-4 flex flex-col items-center gap-6 border-none">
        <h2 className="text-lg text-center font-semibold text-gray-600">
          تحدث مع مستشارك التعليمي
        </h2>
        <div className="relative w-full flex justify-center">
          <Image
            src={img}
            alt="Video consultation illustration"
            width={300}
            height={300}
            className="object-cover rounded-full size-64 border-4 border-gray-300"
          />
        </div>
        <LinkApp href={link} lng={lng}>
          <Button
            className="w-full bg-primary text-white text-lg py-6"
          >
            احجز مكالمة الآن
          </Button>
        </LinkApp>
      </Card>
  )
}
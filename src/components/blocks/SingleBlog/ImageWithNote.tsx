import Image from "next/image";

interface ImageWithNodeProps {
  src: string;
  note: string;
  imgWidth?: number;
  imgHeight?: number;
}

const ImageWithNode: React.FC<ImageWithNodeProps> = ({
  src,
  note,
  imgHeight = 600,
  imgWidth = 900,
}) => {
  return (
    <div className=" flex flex-col gap-5 items-center">
      <Image src={src} width={imgWidth} height={imgHeight} alt={note} />
      <p className="text-slate-gray">{note}</p>
    </div>
  );
};

export default ImageWithNode;

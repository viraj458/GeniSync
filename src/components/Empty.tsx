import Image from 'next/image';

type EmptyProps = {
  label: string;
};

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-10 flex flex-col items-center justify-center ">
      <div className="relative h-48 w-60 sm:h-60 sm:w-56 md:h-72 md:w-72 border-none">
        <Image src='/empty.svg' alt='Empty' fill/>
      </div>
      <p className='text-muted-foreground text-sm text-center'>
        {label}
      </p>
    </div>
  );
};
export default Empty;

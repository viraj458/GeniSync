import Image from 'next/image';

type EmptyProps = {
  label: string;
};

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72 md:h-96 md:w-96">
        <Image src='/empty.svg' alt='Empty' fill/>
      </div>
      <p className='text-muted-foreground text-sm text-center'>
        {label}
      </p>
    </div>
  );
};
export default Empty;

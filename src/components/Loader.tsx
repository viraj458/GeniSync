import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className='w-10 h-10 relative'>
        <Image src="/logo.svg" alt="Loader" fill />
      </div>
      <p className="text-sm text-muted-foreground">Thinking...</p>
    </div>
  );
};
export default Loader;

const styles = {
  modal:
    'fixed left-0 top-0 z-[1500] flex h-screen w-full items-center justify-center',
  wrapper: 'h-screen absolute inset-0 bg-black/40',
  body: (className?: string) =>
    `z-[10] overflow-hidden rounded-md bg-white p-6 ${className}`,
  // max-w-[calc(min(90vw,640px))]
  header: 'grid grid-cols-10 mb-4',
  headerText: 'col-span-9',
  title: 'break-words text-xl font-medium md:text-2xl',
  subHeading: 'break-words text-gray',
  description:
    'scrollbar-blue max-h-[50vh] overflow-auto pr-4 text-sm md:text-base',
  closeButton: (closeBtnClass?: string) =>
    `ml-auto cursor-pointer hover:scale-[0.985] ${closeBtnClass}`,
};
export default styles;

function SidebarRow({ Icon, title }) {
  return (
    <div className="flex  items-center font-medium text-[white] space-x-2 p-4 hover:font-medium hover:bg-[#5944DF] rounded-xl cursor-pointer">
      {Icon && <Icon clasName="h-8 w-8  " />}
      <p className="hidden sm:inline-flex ">{title}</p>
    </div>
  );
}

export default SidebarRow;

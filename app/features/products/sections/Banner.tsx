const Banner = () => {
  return (
    <div className="space-y-8 md:space-y-16">
      <div className="pt-4 md:pt-8 text-3xl md:text-5xl font-bold text-center">Our Catalog</div>
      <div className="text-2xl md:text-[40px] bg-primary2 text-white text-center p-4 md:p-16">
        <div className="font-bold">Member Exclusive</div>
        <p  className="md:mt-6">Early Access to New Collections + Special Deals</p>
        <div className="text-lg md:text-xl mt-4 md:mt-10">Not a Member? Contact now to shop our exclusive catalog.</div>
      </div>
    </div>
  );
};

export default Banner;

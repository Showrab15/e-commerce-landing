import masteragentbanner from "../../assets/masteragentbanner.jpg";
export default function MasterAgentBanner() {
  return (
    <div className="mt-10 mx-4 md:mx-10">
      <div>
        <img className="mx-auto mb-8 w-full" src={masteragentbanner} alt="" />
      </div>
      <div></div>
      <h3 className="my-6 uppercase leading-[40px] text-[16px] md:text-[28px] font-bold text-center text-black">
        VELKI Master Agent LIST
      </h3>{" "}
    </div>
  );
}

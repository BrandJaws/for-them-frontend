import SectionHeader from "../common/SectionHeader";
import BinderShopList from "../common/BinderShopList";

const BinderShopSection = () => {
  return (
    <section className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
      <SectionHeader
        title="Binder"
        subtitle="The"
        description="Your maximum healthy bind without sacrificing comfort, breathability, or style."
        animation="top"
      />
      <BinderShopList />
    </section>
  );
};

export default BinderShopSection;

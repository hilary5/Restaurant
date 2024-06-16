import Modal from "./Modal";
import OrderListModal from "./OrderListModal";
import Menu from "./Menu";
import OtherLocations from "./OtherLocations";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Modal />
      <OrderListModal />
      <Menu />
      <OtherLocations />
      <Footer />
    </div>
  );
};

export default Home;

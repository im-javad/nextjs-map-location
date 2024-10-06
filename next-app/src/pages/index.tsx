import dynamic from "next/dynamic"; 

const Map = dynamic(() => import('@/components/Map') , {ssr: false});

const Home = () => {
  return (
    <div>
      <Map />
    </div>
  );
};

export default Home;

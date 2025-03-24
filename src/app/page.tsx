import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Navbar></Navbar>
      <video
        autoPlay
        muted
        loop
        className=" top-0 left-0 w-full h-full object-cover "
      >
        <source src="/background.mp4" type="video/mp4" />
        <source src="/background.webm" type="video/webm" />
      </video>
    </div>
  );
}

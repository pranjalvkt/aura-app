import Navbar from "@/components/Navbar";
import Products from "../components/Products";
import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div style={{display:'ruby'}}>
        <Products/>
      </div>
    </div>
  );
}

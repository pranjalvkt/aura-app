"use client";
import Card from "@/components/Card";
import prod from './prod.json'
export default function Products() {
    fetch('/api').then((response)=> response.json()).then((res)=>console.log(res))
    return (
        <>
            {
                prod.products.map((item)=>(
                    <Card key={item.id} data={item}/>
                ))
            }
        </>
    );
  }